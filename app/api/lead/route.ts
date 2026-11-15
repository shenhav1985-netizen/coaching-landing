import { createHash } from "crypto";

// שומר ליד (שם + טלפון) ברשימה ברב מסר (Responder).
// המפתחות נשמרים כמשתני סביבה ב-Vercel, אף פעם לא בקוד:
// RAVMESSER_C_KEY, RAVMESSER_C_SECRET, RAVMESSER_U_KEY, RAVMESSER_U_SECRET, RAVMESSER_LIST_ID

const md5 = (s: string) => createHash("md5").update(s).digest("hex");

function authHeader(cKey: string, cSecret: string, uKey: string, uSecret: string) {
  const nonce = Math.floor(Math.random() * 1_000_000).toString();
  const timestamp = Math.floor(Date.now() / 1000).toString();
  return [
    `c_key=${encodeURIComponent(cKey)}`,
    `c_secret=${encodeURIComponent(md5(cSecret + nonce))}`,
    `u_key=${encodeURIComponent(uKey)}`,
    `u_secret=${encodeURIComponent(md5(uSecret + nonce))}`,
    `nonce=${encodeURIComponent(nonce)}`,
    `timestamp=${encodeURIComponent(timestamp)}`,
  ].join(", ");
}

export async function POST(request: Request) {
  let name = "";
  let phone = "";
  try {
    const body = await request.json();
    name = String(body.name ?? "").trim().slice(0, 80);
    phone = String(body.phone ?? "").replace(/[^\d+]/g, "").slice(0, 16);
  } catch {
    return Response.json({ ok: false, error: "bad-request" }, { status: 400 });
  }
  if (!name || phone.replace(/\D/g, "").length < 9) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const { RAVMESSER_C_KEY, RAVMESSER_C_SECRET, RAVMESSER_U_KEY, RAVMESSER_U_SECRET, RAVMESSER_LIST_ID } =
    process.env;
  if (!RAVMESSER_C_KEY || !RAVMESSER_C_SECRET || !RAVMESSER_U_KEY || !RAVMESSER_U_SECRET || !RAVMESSER_LIST_ID) {
    return Response.json({ ok: true, saved: false, reason: "ravmesser-not-configured" });
  }

  try {
    const res = await fetch(`https://api.responder.co.il/main/lists/${RAVMESSER_LIST_ID}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader(RAVMESSER_C_KEY, RAVMESSER_C_SECRET, RAVMESSER_U_KEY, RAVMESSER_U_SECRET),
      },
      body: JSON.stringify({ subscribers: JSON.stringify([{ NAME: name, PHONE: phone }]) }),
    });
    return Response.json({ ok: true, saved: res.ok, status: res.status });
  } catch {
    return Response.json({ ok: true, saved: false, reason: "ravmesser-unreachable" });
  }
}
