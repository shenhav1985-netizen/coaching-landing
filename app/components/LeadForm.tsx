"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { GlassCard, AccentLine } from "./ui";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("fullName") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!fullName || !phone || !email) {
      setError("נא למלא את כל השדות");
      return;
    }
    if (!/^[\d\-+\s()]{7,}$/.test(phone)) {
      setError("מספר טלפון לא תקין");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("כתובת מייל לא תקינה");
      return;
    }

    setError("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, phone, email }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <GlassCard accent className="text-center">
        <p className="text-lg font-bold" style={{ color: "var(--accent-dark)" }}>
          הפרטים התקבלו בהצלחה
        </p>
        <AccentLine />
        <p style={{ color: "var(--text-secondary)" }}>
          אחזור אליך תוך זמן קצר לשיחה קלילה, בחינם וללא התחייבות.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard accent id="register">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="fullName" className="text-sm" style={{ color: "var(--text-secondary)" }}>
            שם מלא
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            className="w-full rounded-xl bg-black/[0.03] border border-black/10 px-4 py-3 text-base outline-none focus:border-[var(--accent)] transition-colors"
            style={{ color: "var(--text-primary)" }}
            placeholder="השם שלך"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm" style={{ color: "var(--text-secondary)" }}>
            טלפון
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl bg-black/[0.03] border border-black/10 px-4 py-3 text-base outline-none focus:border-[var(--accent)] transition-colors"
            style={{ color: "var(--text-primary)" }}
            placeholder="050-0000000"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm" style={{ color: "var(--text-secondary)" }}>
            המייל שלך
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-xl bg-black/[0.03] border border-black/10 px-4 py-3 text-base outline-none focus:border-[var(--accent)] transition-colors"
            style={{ color: "var(--text-primary)" }}
            placeholder="name@email.com"
          />
        </div>

        {error && (
          <p className="text-sm" style={{ color: "#ef4444" }}>
            {error}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm" style={{ color: "#ef4444" }}>
            משהו השתבש בשליחה, נסי שוב או צרי קשר ישירות.
          </p>
        )}

        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-2 rounded-2xl font-black text-white py-4 px-6 text-lg disabled:opacity-60"
          style={{
            background: "linear-gradient(135deg, #8b6156, #b98a78, #e3c4b8)",
            boxShadow: "0 0 20px rgba(185,138,120,0.35), 0 4px 20px rgba(64,51,44,0.15)",
          }}
        >
          {status === "submitting" ? "שולחת..." : "אני רוצה לבדוק שהתהליך מתאים לי"}
        </motion.button>

        <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
          לאחר מילוי הטופס אחזור אליך לשיחה קלילה, בחינם וללא התחייבות, כדי לבדוק אם התהליך מתאים לך בשלב הזה.
        </p>
      </form>
    </GlassCard>
  );
}
