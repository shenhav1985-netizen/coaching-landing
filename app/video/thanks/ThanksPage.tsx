"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CALL_SLOTS, DARK, OTHER, QUESTIONS, STORAGE_KEY, YOUTUBE_ID, waUrl } from "../shared";

function RoseButton({ children, onClick, disabled = false }: { children: ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-full py-4 px-6 text-lg font-black transition-opacity"
      style={{
        maxWidth: "460px",
        color: DARK,
        background: "linear-gradient(135deg, #f0cfc2, #d9a593)",
        boxShadow: "0 10px 30px rgba(217,165,147,0.3)",
        opacity: disabled ? 0.45 : 1,
      }}
    >
      {children}
    </button>
  );
}

export default function ThanksPage() {
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [otherText, setOtherText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [requested, setRequested] = useState<string | null>(null);

  useEffect(() => {
    try {
      setName(localStorage.getItem(STORAGE_KEY) ?? "");
    } catch {}
  }, []);

  const q = QUESTIONS[step];
  const isLast = step === QUESTIONS.length - 1;
  const current = answers[step] ?? [];
  const canContinue = current.length > 0 && !(current.includes(OTHER) && !otherText.trim());

  function choose(option: string) {
    const next = [...answers];
    if (q.multi) {
      next[step] = current.includes(option) ? current.filter((o) => o !== option) : [...current, option];
    } else {
      next[step] = [option];
    }
    setAnswers(next);
    // בשאלות של בחירה אחת עוברים אוטומטית, חוץ מ"אחר" ומהשאלה האחרונה (שם יש כפתור "שלחי")
    if (!q.multi && option !== OTHER && !isLast) setTimeout(() => setStep(step + 1), 220);
  }

  const formatAnswer = (i: number) =>
    (answers[i] ?? []).map((o) => (o === OTHER ? "אחר: " + otherText.trim() : o)).join(" | ");

  const answersText = QUESTIONS.map((item, i) => `${item.q}\n← ${formatAnswer(i)}`).join("\n\n");
  const hello = `היי שנהב, אני ${name || "מהדף של הסרטון"} 🤍`;
  const slotLink = (slot: string) =>
    waUrl(`${hello}\nאשמח לשיחת היכרות ב${slot}.\n\nהתשובות שלי:\n\n${answersText}`);
  const otherTimeLink = waUrl(`${hello}\nאשמח לשיחת היכרות, אבל צריכה מועד אחר.\n\nהתשובות שלי:\n\n${answersText}`);

  const showQuestionButton = q.multi || current.includes(OTHER) || isLast;

  return (
    <main className="min-h-screen px-6 pt-12 pb-16" style={{ background: "var(--bg-primary)" }}>
      <div className="mx-auto" style={{ maxWidth: "640px" }}>
        {/* ── חלק 1: הסרטון ── */}
        <header className="text-center">
          <h1 className="font-extrabold" style={{ fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.6rem)", lineHeight: 1.25 }}>
            קיבלתי, תודה שהשארת פרטים 🤍
          </h1>
          <p className="mt-4 mx-auto" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "520px" }}>
            הסרטון מוכן בשבילך. 10 דקות שיסבירו למה את שוברת שוב ושוב,{" "}
            <strong style={{ color: "var(--text-primary)" }}>גם כשאת יודעת הכל.</strong>
          </p>
          <p className="mt-3 font-bold" style={{ color: "var(--accent-dark)" }}>
            לחצי על הנגן. שווה לראות עד הסוף.
          </p>
        </header>

        <div
          className="mt-6 overflow-hidden rounded-[20px]"
          style={{ aspectRatio: "16 / 9", background: "#000", boxShadow: "0 18px 50px rgba(64,51,44,0.2)" }}
        >
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
            title="הסרטון של שנהב"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>

        {/* ── חלק 2 + 3: שאלון ואחריו הזמנה לשיחה ── */}
        <section
          className="mt-12 rounded-[24px] px-6 py-8"
          style={{ background: "#fff", border: "1px solid var(--border-accent)", boxShadow: "0 14px 40px rgba(64,51,44,0.09)" }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className="text-center font-extrabold" style={{ fontSize: "1.45rem", lineHeight: 1.35 }}>
                  אחרי שצפית, רציתי להכיר אותך קצת
                </h2>
                <p className="mt-2 text-center" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  3 שאלות קצרות, זה לוקח דקה, ועוזר לי לדעת איך להתייחס אלייך.
                </p>

                <p className="mt-7 text-center text-sm font-bold" style={{ color: "var(--accent)" }}>
                  שאלה {step + 1} מתוך {QUESTIONS.length}
                </p>
                <div className="mx-auto mt-2 h-1.5 overflow-hidden rounded-full" style={{ background: "var(--bg-secondary)", maxWidth: "220px" }}>
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${((step + (current.length ? 1 : 0)) / QUESTIONS.length) * 100}%`, background: "var(--accent)" }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={step} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ duration: 0.22 }}>
                    <h3 className="mt-5 text-center font-extrabold" style={{ fontSize: "1.25rem", lineHeight: 1.4 }}>
                      {q.q}
                    </h3>
                    <p className="mt-1 text-center text-sm" style={{ color: "var(--text-muted)" }}>
                      {q.hint}
                    </p>
                    <div className="mt-5 space-y-3">
                      {q.options.map((opt) => {
                        const selected = current.includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => choose(opt)}
                            aria-pressed={selected}
                            className="w-full rounded-2xl px-5 py-4 text-right font-semibold transition-colors"
                            style={{
                              background: selected ? "var(--accent-light)" : "var(--bg-primary)",
                              border: `1.5px solid ${selected ? "var(--accent)" : "var(--border-subtle)"}`,
                              lineHeight: 1.5,
                            }}
                          >
                            {q.multi && (
                              <span
                                className="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-md align-middle text-xs text-white"
                                style={{ border: "1.5px solid var(--accent)", background: selected ? "var(--accent)" : "#fff" }}
                                aria-hidden
                              >
                                {selected ? "✓" : ""}
                              </span>
                            )}
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {current.includes(OTHER) && (
                      <input
                        autoFocus
                        placeholder="ספרי לי במילים שלך"
                        value={otherText}
                        onChange={(e) => setOtherText(e.target.value)}
                        className="mt-3 w-full rounded-2xl px-5 py-4 outline-none"
                        style={{ background: "#fff", border: "1.5px solid var(--accent)" }}
                      />
                    )}
                    {showQuestionButton && (
                      <div className="mt-6 flex justify-center">
                        <RoseButton
                          disabled={!canContinue}
                          onClick={() => (isLast ? setSubmitted(true) : setStep(step + 1))}
                        >
                          {isLast ? "שלחי" : "המשך ←"}
                        </RoseButton>
                      </div>
                    )}
                    {step > 0 && (
                      <button type="button" onClick={() => setStep(step - 1)} className="mt-5 text-sm underline" style={{ color: "var(--text-muted)" }}>
                        חזרה לשאלה הקודמת
                      </button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div key="invite" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <h2 className="font-extrabold" style={{ fontSize: "1.6rem" }}>
                  תודה 🤍 קראתי כל מילה.
                </h2>
                <div className="mt-4 space-y-3" style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "1.05rem" }}>
                  <p>אני רוצה להכיר אותך יותר, ושתכירי אותי.</p>
                  <p>
                    לכן אני מזמינה אותך ל<strong style={{ color: "var(--text-primary)" }}>שיחת היכרות קצרה של 10 דקות</strong>. בלי
                    התחייבות ובלי לחץ. בשיחה נבדוק יחד אם ליווי אישי מתאים לך עכשיו, ואם לא, אגיד לך את זה בכנות.
                  </p>
                </div>

                {requested ? (
                  <div className="mt-7 rounded-2xl px-5 py-5" style={{ background: "var(--bg-secondary)" }}>
                    <p className="font-bold" style={{ color: "var(--accent-dark)" }}>
                      נפתח לך וואטסאפ. לחצי שם על "שליחה", ואחזור אלייך לאשר את המועד 🤍
                    </p>
                    <button type="button" onClick={() => setRequested(null)} className="mt-3 text-sm underline" style={{ color: "var(--text-muted)" }}>
                      לבחור מועד אחר
                    </button>
                  </div>
                ) : (
                  <>
                    {CALL_SLOTS.length > 0 && (
                      <>
                        <p className="mt-7 font-bold">בחרי את המועד שנוח לך:</p>
                        <div className="mt-4 space-y-3">
                          {CALL_SLOTS.map((slot) => (
                            <a
                              key={slot}
                              href={slotLink(slot)}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setTimeout(() => setRequested(slot), 400)}
                              className="mx-auto block w-full rounded-full py-4 text-lg font-black"
                              style={{ maxWidth: "460px", color: DARK, background: "linear-gradient(135deg, #f0cfc2, #d9a593)" }}
                            >
                              {slot}
                            </a>
                          ))}
                        </div>
                      </>
                    )}
                    <a
                      href={otherTimeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setTimeout(() => setRequested("other"), 400)}
                      className="mx-auto mt-5 flex w-full items-center justify-center rounded-full py-4 font-black text-white"
                      style={{ maxWidth: "460px", background: "#25D366", boxShadow: "0 8px 24px rgba(37,211,102,0.3)" }}
                    >
                      {CALL_SLOTS.length > 0 ? "לא מתאים? כתבי לי בוואטסאפ ונמצא זמן אחר" : "לתיאום שיחה בוואטסאפ"}
                    </a>
                  </>
                )}

                <p className="mt-7 text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                  אני מלווה עד 7 נשים בו-זמנית, ולכן אני בודקת התאמה לפני כל ליווי.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ── חלק 4 ── */}
        <footer className="mt-12 text-center" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
          <p>אם לא הספקת לצפות בסרטון עכשיו, אין בעיה. הוא נשאר פתוח לך כאן.</p>
          <p className="mt-4 font-extrabold" style={{ color: "var(--accent-dark)", fontSize: "1.3rem" }}>
            שנהב
          </p>
        </footer>
      </div>
    </main>
  );
}
