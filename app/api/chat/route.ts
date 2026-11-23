// שרת הצ'אט של "חוזרת הביתה": מקבל את השיחה מהדפדפן ושולח אותה ל-Claude.
// המפתח נמצא רק במשתנה הסביבה ANTHROPIC_API_KEY ב-Vercel. לא שומרים שיחות בשרת ולא מדפיסים אותן ללוגים.
import { SYSTEM_PROMPT } from "./prompt";

const MODEL = "claude-sonnet-5-5";
const MAX_TURNS = 40;
const MAX_MESSAGE_CHARS = 2000;
const MAX_TOTAL_CHARS = 40000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 30;

type Turn = { role: "user" | "assistant"; content: string };

// הגבלת קצב בסיסית לכל כתובת IP (לכל מופע שרת בנפרד)
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
}

function bad(message: string, status = 400) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  // מנקים רווחים, ירידות שורה וסימני כיווניות (RTL) שנכנסים לפעמים בהדבקה
  const key = process.env.ANTHROPIC_API_KEY?.replace(/[^\x21-\x7E]/g, "");
  if (!key) return bad("האפליקציה עוד לא מחוברת. נסי שוב מאוחר יותר.", 503);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return bad("יותר מדי הודעות ברצף. קחי רגע, ונסי שוב בעוד כמה דקות.", 429);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return bad("הבקשה לא תקינה.");
  }
  const raw = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(raw) || raw.length === 0) return bad("הבקשה לא תקינה.");

  const messages: Turn[] = [];
  let total = 0;
  for (const m of raw.slice(-MAX_TURNS)) {
    const role = (m as Turn)?.role;
    const content = (m as Turn)?.content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string" || !content.trim()) {
      return bad("הבקשה לא תקינה.");
    }
    if (content.length > MAX_MESSAGE_CHARS) return bad("ההודעה ארוכה מדי. נסי לקצר אותה.");
    total += content.length;
    messages.push({ role, content });
  }
  if (total > MAX_TOTAL_CHARS) return bad("השיחה ארוכה מדי. התחילי שיחה חדשה.");
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") return bad("הבקשה לא תקינה.");

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 700,
        system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
        messages,
      }),
    });
    if (!res.ok) {
      console.error("anthropic error", res.status);
      return bad("משהו השתבש בתשובה. נסי לשלוח שוב.", 502);
    }
    const data = (await res.json()) as { content?: { type: string; text?: string }[] };
    const text = (data.content ?? [])
      .filter((b) => b.type === "text")
      .map((b) => b.text ?? "")
      .join("")
      .trim();
    if (!text) return bad("משהו השתבש בתשובה. נסי לשלוח שוב.", 502);
    return Response.json({ text });
  } catch (e) {
    console.error("anthropic request failed", e instanceof Error ? `${e.name}: ${e.message.slice(0, 160)}` : "");
    return bad("משהו השתבש בתשובה. נסי לשלוח שוב.", 502);
  }
}
