"use client";

import { useEffect, useRef, useState } from "react";
import { BOOKING_LINK, waUrl } from "../video/shared";

type Turn = { role: "user" | "assistant"; content: string };

const OPENING = "היי, אני המאמנת הדיגיטלית של חוזרת הביתה.\nמה מביא אותך לכאן היום?";
const HISTORY_KEY = "habayta-chat-v1";
const CONSENT_KEY = "habayta-consent-v1";

const C = {
  bg: "#faf6f2",
  surface: "#ffffff",
  me: "#f3e9e0",
  ink: "#40332c",
  ink2: "#6e5b50",
  muted: "#9c8578",
  accent: "#b98a78",
  accentDark: "#8b6156",
  line: "#e9dbd0",
};

function Icon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true" style={{ flex: "none" }}>
      <circle cx="60" cy="60" r="60" fill="#f3e9e0" />
      <g transform="translate(0 -5)">
        <path d="M40 96 V60 a20 20 0 0 1 40 0 V96" fill="none" stroke="#8b6156" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="28" y1="96" x2="92" y2="96" stroke="#8b6156" strokeWidth="5" strokeLinecap="round" />
        <circle cx="60" cy="66" r="8" fill="#b98a78" />
      </g>
    </svg>
  );
}

function read<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}
function remove(key: string) {
  try {
    localStorage.removeItem(key);
  } catch {}
}

function Bubble({ turn }: { turn: Turn }) {
  const mine = turn.role === "user";
  const flag = !mine && turn.content.includes("[לשנהב]");
  const call = !mine && turn.content.includes("[שיחה]");
  const text = turn.content.replace(/\[לשנהב\]|\[שיחה\]/g, "").trim();
  return (
    <div className={`flex flex-col gap-2 max-w-[85%] ${mine ? "self-end" : "self-start"}`}>
      <div
        className="px-4 py-3 whitespace-pre-wrap break-words leading-relaxed"
        style={{
          background: mine ? C.me : C.surface,
          border: mine ? "none" : `1px solid ${C.line}`,
          borderRadius: mine ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
        }}
      >
        {text}
      </div>
      {flag && (
        <div className="rounded-2xl px-4 py-3 text-sm leading-relaxed" style={{ background: "#fbe9e1", color: "#7a3a20" }}>
          <div className="font-bold mb-1">חשוב שלא תהיי עם זה לבד</div>
          <div>ער״ן, עזרה רגשית 24/7: <b>1201</b></div>
          <div>במצב חירום: מד״א <b>101</b></div>
          <a className="inline-block mt-2 font-bold underline" href={waUrl("היי שנהב, הגעתי מאפליקציית חוזרת הביתה ואני רוצה לדבר איתך")} target="_blank" rel="noreferrer">
            לכתוב לשנהב בוואטסאפ
          </a>
        </div>
      )}
      {call && (
        <a
          href={BOOKING_LINK}
          target="_blank"
          rel="noreferrer"
          className="self-start rounded-full px-5 py-2.5 font-bold text-sm"
          style={{ background: C.accentDark, color: C.bg }}
        >
          לקביעת שיחת היכרות עם שנהב
        </a>
      )}
    </div>
  );
}

function Consent({ onAccept }: { onAccept: () => void }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex-1 flex flex-col justify-center gap-6 py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <Icon size={96} />
        <h1 className="text-4xl" style={{ fontFamily: "var(--font-display), serif", color: C.ink }}>
          חוזרת הביתה
        </h1>
        <p style={{ color: C.accentDark }}>המאמנת הדיגיטלית לחזרה הביתה, לעצמך</p>
      </div>
      <div className="rounded-2xl p-5 flex flex-col gap-3 text-[15px] leading-relaxed" style={{ background: C.surface, border: `1px solid ${C.line}`, color: C.ink2 }}>
        <p>לפני שמתחילות, כמה דברים חשובים:</p>
        <ul className="flex flex-col gap-2 list-disc pr-5">
          <li>המאמנת היא בינה מלאכותית (AI), שנבנתה על הגישה של שנהב בנימין. היא לא אישה אמיתית.</li>
          <li>זה אימון, לא טיפול רפואי או פסיכולוגי, ואין כאן אבחנה.</li>
          <li>האפליקציה מיועדת לנשים מגיל 18.</li>
          <li>השיחה נשמרת רק במכשיר שלך. כדי לענות לך, ההודעות נשלחות לעיבוד אצל Anthropic, החברה שמפעילה את Claude. אנחנו לא שומרים אותן.</li>
          <li>במצוקה רגשית: ער״ן 1201. במצב חירום: מד״א 101.</li>
        </ul>
      </div>
      <label className="flex items-start gap-3 cursor-pointer" style={{ color: C.ink }}>
        <input id="consent" type="checkbox" className="mt-1.5 w-4 h-4" checked={checked} onChange={(e) => setChecked(e.target.checked)} style={{ accentColor: C.accentDark }} />
        <span>קראתי, אני מעל גיל 18, ואני מסכימה להתחיל</span>
      </label>
      <button
        type="button"
        disabled={!checked}
        onClick={onAccept}
        className="rounded-full py-3.5 font-bold text-lg disabled:opacity-40"
        style={{ background: C.accentDark, color: C.bg }}
      >
        מתחילות
      </button>
    </div>
  );
}

export default function CoachChat() {
  const [ready, setReady] = useState(false);
  const [consented, setConsented] = useState(false);
  const [history, setHistory] = useState<Turn[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsented(read(CONSENT_KEY, false));
    setHistory(read<Turn[]>(HISTORY_KEY, []));
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) write(HISTORY_KEY, history);
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [history, ready, busy]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    const next: Turn[] = [...history, { role: "user", content: text }];
    setHistory(next);
    setInput("");
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: [{ role: "assistant", content: OPENING }, ...next] }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.text) throw new Error(data.error || "משהו השתבש בתשובה. נסי לשלוח שוב.");
      setHistory([...next, { role: "assistant", content: data.text }]);
    } catch (e) {
      setHistory(history);
      setInput(text);
      setError(e instanceof Error ? e.message : "משהו השתבש בתשובה. נסי לשלוח שוב.");
    } finally {
      setBusy(false);
    }
  }

  function newChat() {
    setHistory([]);
    setError("");
    remove(HISTORY_KEY);
  }

  return (
    <main className="min-h-dvh flex justify-center" style={{ background: C.bg, color: C.ink }}>
      <div className="w-full max-w-xl flex flex-col px-4 min-h-dvh">
        {!ready ? null : !consented ? (
          <Consent
            onAccept={() => {
              write(CONSENT_KEY, true);
              setConsented(true);
            }}
          />
        ) : (
          <>
            <header className="sticky top-0 z-10 flex items-center justify-between gap-3 py-3" style={{ background: C.bg, borderBottom: `1px solid ${C.line}` }}>
              <div className="flex items-center gap-3">
                <Icon />
                <div>
                  <div className="text-xl leading-tight" style={{ fontFamily: "var(--font-display), serif" }}>חוזרת הביתה</div>
                  <div className="text-xs" style={{ color: C.muted }}>מאמנת דיגיטלית · בגישה של שנהב בנימין</div>
                </div>
              </div>
              {history.length > 0 && (
                <button type="button" onClick={newChat} className="rounded-full px-4 py-1.5 text-sm" style={{ border: `1px solid ${C.line}`, color: C.ink2, background: C.surface }}>
                  שיחה חדשה
                </button>
              )}
            </header>

            <div className="flex-1 flex flex-col gap-3 py-4">
              <Bubble turn={{ role: "assistant", content: OPENING }} />
              {history.map((t, i) => (
                <Bubble key={i} turn={t} />
              ))}
              {busy && (
                <div className="self-start px-4 py-3 rounded-2xl text-sm" style={{ background: C.surface, border: `1px solid ${C.line}`, color: C.muted }}>
                  כותבת…
                </div>
              )}
              {error && <div className="self-center text-sm text-center" style={{ color: "#a4452a" }}>{error}</div>}
              <div ref={endRef} />
            </div>

            <form
              className="sticky bottom-0 flex items-end gap-2 py-3"
              style={{ background: C.bg }}
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <textarea
                id="message"
                rows={1}
                value={input}
                maxLength={2000}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="כתבי לי מה עובר עלייך..."
                className="flex-1 min-w-0 resize-none rounded-2xl px-4 py-3 max-h-40 outline-none focus:ring-2"
                style={{ background: C.surface, border: `1px solid ${C.line}`, color: C.ink, fontSize: 16 }}
              />
              <button type="submit" disabled={busy || !input.trim()} className="rounded-2xl px-5 py-3 font-bold disabled:opacity-40" style={{ background: C.accentDark, color: C.bg }}>
                שליחה
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
