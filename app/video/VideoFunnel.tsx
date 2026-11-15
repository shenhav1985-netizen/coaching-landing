"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../components/ui";

// ── הגדרות שנהב ───────────────────────────────────────────
// מזהה הסרטון ביוטיוב: מה שמופיע אחרי v= בקישור (או אחרי youtu.be/)
const YOUTUBE_ID = "reZrRkTwDro";
const WHATSAPP_NUMBER = "972506409478";
// ─────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    q: "מה הכי מתאר אותי כשאני מנסה לרדת במשקל?",
    options: [
      "אני מתחילה בכל הכוח ונשברת אחרי כמה ימים או שבועות",
      "אני יודעת בדיוק מה לאכול, ובערב משהו משתלט עליי",
      "אני מצליחה לרדת, אבל המשקל תמיד חוזר",
      "אני אוכלת מתוך רגש: לחץ, עייפות, שעמום או בדידות",
      "אחרי כל נפילה אני כועסת על עצמי ומענישה את עצמי",
      "אני כבר לא יודעת מה עוד לנסות",
    ],
  },
  {
    q: "מה הכי קרוב למה שגרם לי להשאיר פרטים דווקא עכשיו?",
    options: [
      "נשברתי שוב ואמרתי לעצמי \"מספיק\"",
      "יש אירוע או תאריך שמתקרב",
      "הבנתי שאני לא רוצה להעביר את זה הלאה לילדים שלי",
      "משהו בבריאות או במדדים שלי מדאיג אותי",
      "ראיתי אישה אחרת שיצאה מהמעגל, וזה נתן לי תקווה",
      "סתם סקרנית לשמוע",
    ],
  },
  {
    q: "מה הכי מתאים לי אחרי הסרטון?",
    options: [
      "רק רוצה לצפות בסרטון ולהמשיך לקבל ממך תוכן",
      "עוד לא יודעת, אני בודקת",
      "רוצה לשמוע איך את עובדת עם נשים במצב שלי",
      "רוצה שתכתבי לי בוואטסאפ ונדבר",
    ],
  },
];

const TESTIMONIALS = [
  "זה לא רק המשקל שהיה לי תקוע. אני באמת מרגישה מעולה. אתמול דיברתי עם בעלי עלייך ואמרתי לו שזה לא דומה לשום תוכנית יריד. במשקל שעשיתי איך אני שמחה שהקשבתי לתחושות שלי.",
  "מעדכנת שמאז המפגש אני מרגישה הרבה יותר בשליטה. כבר היום השלישי שאני כותבת לי בבוקר את הדברים שחשוב לי לעשות במהלך היום, ומפתיע איך שזה ממש קורה. משהו בי טיפה יותר רגוע ומשוחרר. אתמול ממש הרגשתי מסודרת ולא מחפשת כלום בין לבין.",
  "מודה על שפגשתי בך, ועל זה שבנקודת הזמן הזו בדיוק בחרתי להתקשר אלייך ולבחור בך. הליווי שלך עכשיו זה כל כך מדויק למה שהייתי צריכה.",
  "אני ממש מנסה לתרגל אותו. וזה באמת חזק. ומרגישה שזה לא רק באוכל. ואם אני אצליח לסגל לי את זה, זה יהיה ממש משנה חיים ✨",
  "תודה על המפגשים הכל כך משמעותיים איתך. שנהב, אין לך מושג כמה הדרך בה את מעבירה את המפגשים היא חזקה ועמוקה בשבילי 🙏",
];

const STORAGE_KEY = "shenhav-video-name";

export default function VideoFunnel() {
  const [name, setName] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const videoRef = useRef<HTMLDivElement>(null);
  const gateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setName(saved);
        setUnlocked(true);
      }
    } catch {}
  }, []);

  function unlock(e: React.FormEvent) {
    e.preventDefault();
    const clean = name.trim();
    if (!clean) return;
    setName(clean);
    setUnlocked(true);
    try {
      localStorage.setItem(STORAGE_KEY, clean);
    } catch {}
    setTimeout(() => videoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  }

  function choose(option: string) {
    const next = [...answers.slice(0, step), option];
    setAnswers(next);
    setTimeout(() => setStep(step + 1), 220);
  }

  const done = step >= QUESTIONS.length;
  const waText =
    `היי שנהב, אני ${name} 🤍 צפיתי בסרטון וענִיתי על השאלות:\n\n` +
    QUESTIONS.map((item, i) => `${item.q}\n← ${answers[i] ?? ""}`).join("\n\n");
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  function goToCta() {
    (unlocked ? videoRef : gateRef).current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="relative overflow-hidden pb-28" style={{ background: "var(--bg-primary)" }}>
      {/* HERO: נעים להכיר */}
      <section
        className="relative px-6 pt-10 text-center"
        style={{ background: "linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)" }}
      >
        <Reveal>
          <span
            className="inline-block rounded-full px-4 py-1.5 text-sm font-bold"
            style={{
              color: "var(--accent-dark)",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid var(--border-accent)",
            }}
          >
            נעים להכיר
          </span>
        </Reveal>

        <Reveal>
          <h1
            className="mt-5 mx-auto font-extrabold"
            style={{
              fontSize: "clamp(2rem, 1.5rem + 2.4vw, 3.2rem)",
              lineHeight: 1.2,
              maxWidth: "640px",
              color: "var(--text-primary)",
            }}
          >
            אני שנהב בנימין,
            <br />
            <span style={{ color: "var(--accent-dark)" }}>ואני יודעת בדיוק</span> למה את שוברת שוב ושוב.
          </h1>
        </Reveal>

        <div className="relative mx-auto mt-8" style={{ width: "min(380px, 88vw)", aspectRatio: "4 / 5" }}>
          <Image
            src="/images/coach.jpg"
            alt="שנהב בנימין, מאמנת תזונה מנטלית"
            fill
            priority
            sizes="380px"
            style={{
              objectFit: "cover",
              borderRadius: "28px 28px 0 0",
              WebkitMaskImage: "linear-gradient(180deg, #000 62%, transparent 100%)",
              maskImage: "linear-gradient(180deg, #000 62%, transparent 100%)",
            }}
          />
        </div>

        <Reveal>
          <div
            className="mx-auto -mt-6 relative space-y-4 text-right"
            style={{ maxWidth: "560px", color: "var(--text-secondary)", fontSize: "1.08rem", lineHeight: 1.8 }}
          >
            <p>
              אני מאמנת תזונה מנטלית, ומלווה נשים שרוצות לרדת במשקל ולהפסיק להתעסק באוכל כל היום.
            </p>
            <p>
              עברתי את המעגל הזה בעצמי: להתחיל בכל הכוח, להישבר, לכעוס על עצמי ולהתחיל שוב. היום אני יודעת
              שזה אף פעם לא היה עניין של כוח רצון.
            </p>
          </div>
        </Reveal>
      </section>

      {/* הבטחת הסרטון */}
      <section className="px-6 pt-16">
        <Reveal>
          <div
            className="mx-auto text-center rounded-[24px] px-6 py-9"
            style={{
              maxWidth: "600px",
              background: "#fff",
              border: "1px solid var(--border-accent)",
              boxShadow: "0 18px 50px rgba(64,51,44,0.10)",
            }}
          >
            <p className="text-sm font-bold tracking-wide" style={{ color: "var(--accent)" }}>
              סרטון חינמי · 10 דקות
            </p>
            <h2
              className="mt-3 font-extrabold"
              style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.4vw, 2.1rem)", lineHeight: 1.3 }}
            >
              למה את שוברת שוב ושוב,
              <br />
              גם כשאת יודעת הכל
            </h2>
            <p className="mt-4 mx-auto" style={{ color: "var(--text-secondary)", maxWidth: "440px", lineHeight: 1.7 }}>
              ולמה עוד תפריט, ועוד ניסיון עם כוח רצון, לא יפתרו את זה. ומה כן.
            </p>
          </div>
        </Reveal>
      </section>

      {/* המלצות */}
      <section className="px-6 pt-16">
        <Reveal>
          <h2 className="text-center font-extrabold" style={{ fontSize: "clamp(1.4rem, 1.2rem + 1vw, 1.9rem)" }}>
            מה נשים כותבות לי
          </h2>
        </Reveal>
        <div className="mx-auto mt-8 space-y-5" style={{ maxWidth: "560px" }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i}>
              <figure
                className="rounded-[22px] px-6 py-6"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(64,51,44,0.06)",
                  boxShadow: "0 10px 34px rgba(64,51,44,0.09)",
                }}
              >
                <blockquote style={{ lineHeight: 1.75, fontSize: "1.02rem" }}>{t}</blockquote>
                <figcaption
                  className="mt-4 pt-4 text-sm font-bold"
                  style={{ borderTop: "1px solid var(--border-subtle)", color: "var(--accent-dark)" }}
                >
                  לקוחה בליווי אישי
                  <span className="font-normal" style={{ color: "var(--text-muted)" }}>
                    {" "}
                    · מתוך הודעה בוואטסאפ
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* שער: שם */}
      {!unlocked && (
        <section ref={gateRef} className="px-6 pt-16 scroll-mt-6">
          <Reveal>
            <form
              onSubmit={unlock}
              className="mx-auto text-center rounded-[24px] px-6 py-9"
              style={{
                maxWidth: "520px",
                background: "linear-gradient(135deg, rgba(185,138,120,0.12), #fff)",
                border: "1.5px solid var(--border-accent)",
                boxShadow: "0 18px 50px rgba(64,51,44,0.10)",
              }}
            >
              <h2 className="font-extrabold" style={{ fontSize: "1.6rem" }}>
                הסרטון מחכה לך
              </h2>
              <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
                רק תגידי לי איך קוראים לך
              </p>
              <label htmlFor="first-name" className="sr-only">
                שם פרטי
              </label>
              <input
                id="first-name"
                required
                autoComplete="given-name"
                placeholder="שם פרטי"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-6 w-full rounded-2xl px-5 py-4 text-lg outline-none"
                style={{ background: "#fff", border: "1.5px solid var(--border-accent)" }}
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-2xl py-4 text-lg font-black text-white"
                style={{
                  background: "linear-gradient(135deg, #8b6156, #b98a78)",
                  boxShadow: "0 8px 24px rgba(139,97,86,0.30)",
                }}
              >
                לצפייה בסרטון
              </button>
            </form>
          </Reveal>
        </section>
      )}

      {/* סרטון + שאלות */}
      {unlocked && (
        <section ref={videoRef} className="px-6 pt-16 scroll-mt-6">
          <div className="mx-auto" style={{ maxWidth: "640px" }}>
            <h2 className="text-center font-extrabold" style={{ fontSize: "1.6rem" }}>
              {name}, הנה הסרטון שלך 🤍
            </h2>
            <p className="mt-2 text-center" style={{ color: "var(--text-secondary)" }}>
              לחצי על הנגן. זה 10 דקות, ושווה לראות עד הסוף.
            </p>

            <div
              className="mt-6 overflow-hidden rounded-[20px]"
              style={{ aspectRatio: "16 / 9", background: "#000", boxShadow: "0 18px 50px rgba(64,51,44,0.18)" }}
            >
              {YOUTUBE_ID ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
                  title="הסרטון של שנהב"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full items-center justify-center text-white/70">הסרטון יופיע כאן</div>
              )}
            </div>

            <div
              className="mt-12 rounded-[24px] px-6 py-8"
              style={{
                background: "#fff",
                border: "1px solid var(--border-accent)",
                boxShadow: "0 14px 40px rgba(64,51,44,0.09)",
              }}
            >
              {!done && (
                <>
                  <p className="text-center text-sm font-bold" style={{ color: "var(--accent)" }}>
                    אחרי שצפית · שאלה {step + 1} מתוך {QUESTIONS.length}
                  </p>
                  <div className="mx-auto mt-3 h-1.5 overflow-hidden rounded-full" style={{ background: "var(--bg-secondary)", maxWidth: "240px" }}>
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ width: `${(step / QUESTIONS.length) * 100}%`, background: "var(--accent)" }}
                    />
                  </div>
                </>
              )}

              <AnimatePresence mode="wait">
                {!done ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="mt-6 text-center font-extrabold" style={{ fontSize: "1.3rem", lineHeight: 1.4 }}>
                      {QUESTIONS[step].q}
                    </h3>
                    <div className="mt-6 space-y-3">
                      {QUESTIONS[step].options.map((opt) => {
                        const selected = answers[step] === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => choose(opt)}
                            className="w-full rounded-2xl px-5 py-4 text-right font-semibold transition-colors"
                            style={{
                              background: selected ? "var(--accent-light)" : "var(--bg-primary)",
                              border: `1.5px solid ${selected ? "var(--accent)" : "var(--border-subtle)"}`,
                              color: "var(--text-primary)",
                              lineHeight: 1.5,
                            }}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="mt-5 text-sm underline"
                        style={{ color: "var(--text-muted)" }}
                      >
                        חזרה לשאלה הקודמת
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <h3 className="font-extrabold" style={{ fontSize: "1.45rem" }}>
                      תודה, {name} 🤍
                    </h3>
                    <p className="mt-3 mx-auto" style={{ color: "var(--text-secondary)", maxWidth: "420px", lineHeight: 1.7 }}>
                      לחצי על הכפתור, התשובות שלך יישלחו אליי בוואטסאפ. אני קוראת כל מילה וחוזרת אלייך אישית.
                    </p>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-2 rounded-2xl py-4 text-lg font-black text-white"
                      style={{ background: "#25D366", boxShadow: "0 8px 24px rgba(37,211,102,0.30)" }}
                    >
                      שליחת התשובות לשנהב בוואטסאפ
                    </a>
                    <button
                      type="button"
                      onClick={() => setStep(0)}
                      className="mt-4 text-sm underline"
                      style={{ color: "var(--text-muted)" }}
                    >
                      לשנות תשובה
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* כפתור קבוע בתחתית */}
      <div
        className="fixed inset-x-0 bottom-0 z-20 px-4 pb-4 pt-3"
        style={{ background: "linear-gradient(180deg, transparent, var(--bg-primary) 40%)" }}
      >
        <button
          type="button"
          onClick={goToCta}
          className="mx-auto block w-full rounded-full py-4 text-lg font-black text-white"
          style={{
            maxWidth: "520px",
            background: "linear-gradient(135deg, #8b6156, #b98a78, #d9b3a4)",
            boxShadow: "0 10px 30px rgba(139,97,86,0.35)",
          }}
        >
          {unlocked ? (done ? "לשליחת התשובות ←" : "לסרטון ולשאלות ←") : "לצפייה בסרטון החינמי ←"}
        </button>
      </div>
    </main>
  );
}
