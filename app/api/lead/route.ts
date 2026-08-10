import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.fullName || !body?.phone || !body?.email) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  console.log("New lead:", body);

  return NextResponse.json({ ok: true });
}
