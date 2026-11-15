"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ── הגדרות שנהב ───────────────────────────────────────────
const YOUTUBE_ID = "reZrRkTwDro";
const WHATSAPP_NUMBER = "972506409478";

// המלצות: שם פרטי (ריק = "לקוחה בליווי אישי") + ציטוט
const TESTIMONIALS: { name: string; quote: string }[] = [
  {
    name: "",
    quote:
      "זה לא רק המשקל שהיה לי תקוע. אני באמת מרגישה מעולה. אתמול דיברתי עם בעלי עלייך ואמרתי לו שזה לא דומה לשום תוכנית.",
  },
  {
    name: "",
    quote:
      "מאז המפגש אני מרגישה הרבה יותר בשליטה. משהו בי טיפה יותר רגוע ומשוחרר. אתמול ממש הרגשתי מסודרת ולא מחפשת כלום בין לבין.",
  },
  {
    name: "",
    quote: "מודה על שפגשתי בך. הליווי שלך עכשיו זה כל כך מדויק למה שהייתי צריכה.",
  },
];
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

const PAINS: [string, string][] = [
  ["התחלת תפריט בכל הכוח, ", "ואחרי שבוע הכול התפרק"],
  ["ירדת כמה קילו יפה, ", "והם חזרו. לפעמים עם עוד"],
  ["שמרת יפה כל היום, ", "ובערב המקרר ניצח"],
  ["את יודעת בדיוק מה לאכול, ", "ועדיין מוצאת את עצמך נשנשת בלי לשים לב"],
];

const DARK = "#2a201b";
const ROSE = "#e3b5a4";
const STORAGE_KEY = "shenhav-video-name";

function Pill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className="inline-block rounded-full px-4 py-1.5 text-sm font-bold"
      style={
        dark
          ? { color: ROSE, border: "1px solid rgba(227,181,164,0.4)", background: "rgba(227,181,164,0.08)" }
          : { color: "var(--accent-dark)", border: "1px solid var(--border-accent)", background: "rgba(185,138,120,0.10)" }
      }
    >
      {children}
    </span>
  );
}

function Marker({ children }: { children: ReactNode }) {
  return (
    <span style={{ backgroundImage: "linear-gradient(180deg, transparent 58%, #e3c4b8 58%)", padding: "0 3px" }}>
      {children}
    </span>
  );
}

function RoseButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full rounded-full py-4 px-6 text-lg font-black"
      style={{
        maxWidth: "460px",
        color: DARK,
        background: "linear-gradient(135deg, #f0cfc2, #d9a593)",
        boxShadow: "0 10px 34px rgba(217,165,147,0.35)",
      }}
    >
      {children}
    </motion.button>
  );
}

export default function VideoFunnel() {
  const [name, setName] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setName(saved);
        setUnlocked(true);
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.body.style.overflow = quizOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [quizOpen]);

  const goToVideo = () => videoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  function unlock(e: React.FormEvent) {
    e.preventDefault();
    const clean = name.trim();
    if (!clean) return;
    setName(clean);
    setUnlocked(true);
    try {
      localStorage.setItem(STORAGE_KEY, clean);
    } catch {}
  }

  function choose(option: string) {
    setAnswers([...answers.slice(0, step), option]);
    setTimeout(() => setStep(step + 1), 220);
  }

  const done = step >= QUESTIONS.length;
  const waText =
    `היי שנהב, אני ${name} 🤍 צפיתי בסרטון וענִיתי על השאלות:\n\n` +
    QUESTIONS.map((item, i) => `${item.q}\n← ${answers[i] ?? ""}`).join("\n\n");
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
  const waPlain = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("היי שנהב, הגעתי מהדף של הסרטון 🤍")}`;

  return (
    <main className="relative overflow-hidden pb-28" style={{ background: "var(--bg-primary)" }}>
      {/* ── 1. פתיחה כהה ── */}
      <section className="relative overflow-hidden px-6 pt-14 pb-16 text-center" style={{ background: DARK }}>
        <Image
          src="/images/coach.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 20%", opacity: 0.22 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, rgba(42,32,27,0.55) 0%, ${DARK} 92%)` }}
        />
        <div className="relative mx-auto" style={{ maxWidth: "620px" }}>
          <Pill dark>במיוחד לנשים שיודעות הכל על תזונה, ועדיין חוזרות לנקודת ההתחלה</Pill>
          <h1
            className="mt-6 font-extrabold"
            style={{ color: "#f7eee8", fontSize: "clamp(2.1rem, 1.5rem + 3vw, 3.4rem)", lineHeight: 1.15 }}
          >
            איך לרדת במשקל ולהישאר שם, <span style={{ color: ROSE }}>בלי להתחיל מחדש</span> כל יום ראשון
          </h1>
          <p className="mt-5 mx-auto" style={{ color: "rgba(247,238,232,0.78)", fontSize: "1.12rem", lineHeight: 1.7, maxWidth: "480px" }}>
            סרטון חינמי של 10 דקות שמסביר למה את שוברת שוב ושוב, גם כשאת יודעת הכל. ומה כן עובד.
          </p>
          <div className="mt-8 flex justify-center">
            <RoseButton onClick={goToVideo}>לצפייה בסרטון החינמי ←</RoseButton>
          </div>
          <p className="mt-3 text-sm" style={{ color: "rgba(247,238,232,0.55)" }}>
            10 דקות · בחינם · בלי התחייבות
          </p>
        </div>
      </section>

      {/* ── 2. איפה את עכשיו ── */}
      <section className="px-6 pt-16" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto" style={{ maxWidth: "560px" }}>
          <Pill>איפה את עכשיו</Pill>
          <h2 className="mt-5 font-extrabold" style={{ fontSize: "clamp(1.6rem, 1.3rem + 1.4vw, 2.2rem)", lineHeight: 1.35 }}>
            עם האוכל את כבר מכירה הכל. <Marker>ובכל זאת, כל פעם זה נגמר באותה נקודה</Marker>
          </h2>
          <div className="mt-8 space-y-4">
            {PAINS.map(([start, end]) => (
              <div
                key={start}
                className="rounded-[20px] px-5 py-5"
                style={{ background: "#fff", boxShadow: "0 8px 28px rgba(64,51,44,0.08)", lineHeight: 1.7, fontSize: "1.05rem" }}
              >
                {start}
                <strong style={{ color: "var(--accent-dark)" }}>{end}</strong>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 font-bold" style={{ color: "var(--accent-dark)", fontSize: "1.4rem", lineHeight: 1.5 }}>
            "אני יודעת הכל. אני פשוט לא מצליחה להחזיק את זה."
          </blockquote>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
            מה שאני שומעת כמעט בכל שיחה
          </p>
        </div>
      </section>

      {/* ── 3. הסרטון ── */}
      <section ref={videoRef} className="px-6 pt-20 scroll-mt-4">
        <div className="mx-auto" style={{ maxWidth: "620px" }}>
          <Pill>הסרטון</Pill>
          <h2 className="mt-5 font-extrabold" style={{ fontSize: "clamp(1.6rem, 1.3rem + 1.4vw, 2.2rem)", lineHeight: 1.35 }}>
            זה לא כוח רצון. <Marker>ויש לזה הסבר.</Marker>
          </h2>
          <ul className="mt-6 space-y-3" style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1.05rem" }}>
            {[
              "למה מתוק ואכילה רגשית עובדים כמו התמכרות, ולמה כוח רצון לא מנצח אותם",
              "למה דווקא כשאת \"מתחילה מחדש\" בכל הכוח, הנפילה כמעט מובטחת",
              "מה כן עובד: הרגלים קטנים שבונים זהות חדשה, והמשקל מגיע משם",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {!unlocked ? (
            <form
              onSubmit={unlock}
              className="mt-8 rounded-[24px] px-6 py-8 text-center"
              style={{ background: DARK, boxShadow: "0 20px 50px rgba(42,32,27,0.25)" }}
            >
              <p className="font-extrabold" style={{ color: "#f7eee8", fontSize: "1.4rem" }}>
                הסרטון מחכה לך
              </p>
              <p className="mt-1" style={{ color: "rgba(247,238,232,0.7)" }}>
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
                className="mt-5 w-full rounded-2xl px-5 py-4 text-lg outline-none"
                style={{ background: "#fff", color: "var(--text-primary)" }}
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-full py-4 text-lg font-black"
                style={{ color: DARK, background: "linear-gradient(135deg, #f0cfc2, #d9a593)" }}
              >
                לצפייה בסרטון ←
              </button>
            </form>
          ) : (
            <div className="mt-8">
              <p className="text-center font-bold" style={{ color: "var(--accent-dark)" }}>
                {name}, לחצי על הנגן. זה 10 דקות, ושווה לראות עד הסוף 🤍
              </p>
              <div
                className="mt-4 overflow-hidden rounded-[20px]"
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
              <div className="mt-6 flex justify-center">
                <RoseButton onClick={() => setQuizOpen(true)}>צפית? 3 שאלות קצרות ←</RoseButton>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. נעים להכיר ── */}
      <section className="px-6 pt-20">
        <div className="mx-auto" style={{ maxWidth: "560px" }}>
          <Pill>נעים להכיר</Pill>
          <h2 className="mt-5 font-extrabold" style={{ fontSize: "clamp(1.6rem, 1.3rem + 1.4vw, 2.2rem)", lineHeight: 1.35 }}>
            אני שנהב בנימין, <Marker>והייתי בדיוק שם</Marker>
          </h2>
          <div className="relative mx-auto mt-8" style={{ width: "min(360px, 86vw)", aspectRatio: "4 / 5" }}>
            <Image
              src="/images/coach.jpg"
              alt="שנהב בנימין, מאמנת תזונה מנטלית"
              fill
              sizes="360px"
              style={{
                objectFit: "cover",
                borderRadius: "28px",
                WebkitMaskImage: "linear-gradient(180deg, #000 70%, transparent 100%)",
                maskImage: "linear-gradient(180deg, #000 70%, transparent 100%)",
              }}
            />
          </div>
          <div className="-mt-4 relative space-y-4" style={{ color: "var(--text-secondary)", fontSize: "1.06rem", lineHeight: 1.8 }}>
            <p>
              הכרתי את המעגל הזה מבפנים: להתחיל בכל הכוח, להישבר, לכעוס על עצמי ולהתחיל שוב. ידעתי הכל, ועדיין
              זה לא החזיק.
            </p>
            <p>
              מה ששינה לי את החיים לא היה עוד תפריט. זה היה להבין את המנגנון שמפעיל את האכילה, ולבנות הרגלים מתוך
              זהות חדשה, לא מתוך מלחמה.
            </p>
            <p>
              היום אני מאמנת תזונה מנטלית, ומלווה נשים באופן אישי לרדת במשקל, להישאר שם, ולפנות את הראש מהאוכל
              לחיים עצמם.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. המלצות ── */}
      <section className="px-6 pt-20">
        <div className="mx-auto" style={{ maxWidth: "560px" }}>
          <Pill>מה הן כותבות לי</Pill>
          <div className="mt-8 space-y-5">
            {TESTIMONIALS.map((t, i) => {
              const label = t.name || "לקוחה בליווי אישי";
              return (
                <figure
                  key={i}
                  className="rounded-[22px] px-6 py-6"
                  style={{ background: "#fff", boxShadow: "0 10px 34px rgba(64,51,44,0.09)" }}
                >
                  <blockquote style={{ lineHeight: 1.75, fontSize: "1.03rem" }}>"{t.quote}"</blockquote>
                  <figcaption
                    className="mt-4 pt-4 flex items-center gap-3"
                    style={{ borderTop: "1px solid var(--border-subtle)" }}
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-extrabold text-white"
                      style={{ background: "linear-gradient(135deg, #8b6156, #d9a593)" }}
                      aria-hidden
                    >
                      {t.name ? t.name[0] : "🤍"}
                    </span>
                    <span>
                      <span className="block font-bold" style={{ color: "var(--accent-dark)" }}>
                        {label}
                      </span>
                      <span className="block text-sm" style={{ color: "var(--text-muted)" }}>
                        בליווי אישי עם שנהב
                      </span>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. סגירה כהה ── */}
      <section className="mt-20 px-6 py-16 text-center" style={{ background: DARK }}>
        <div className="mx-auto" style={{ maxWidth: "560px" }}>
          <h2 className="font-extrabold" style={{ color: "#f7eee8", fontSize: "clamp(1.7rem, 1.3rem + 1.8vw, 2.4rem)", lineHeight: 1.3 }}>
            האנרגיה שלך לא צריכה להיות באוכל. <span style={{ color: ROSE }}>הזמן שלך הוא עכשיו.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <RoseButton onClick={unlocked ? () => setQuizOpen(true) : goToVideo}>
              {unlocked ? "3 שאלות קצרות ←" : "לצפייה בסרטון החינמי ←"}
            </RoseButton>
          </div>
        </div>
      </section>

      {/* ── כפתור קבוע בתחתית + וואטסאפ צף ── */}
      <div
        className="fixed inset-x-0 bottom-0 z-20 px-4 pb-4 pt-6"
        style={{ background: "linear-gradient(180deg, transparent, rgba(250,246,242,0.95) 45%)" }}
      >
        <button
          type="button"
          onClick={unlocked ? () => setQuizOpen(true) : goToVideo}
          className="mx-auto block w-full rounded-full py-4 text-lg font-black"
          style={{ maxWidth: "460px", color: "#f7eee8", background: DARK, boxShadow: "0 10px 30px rgba(42,32,27,0.35)" }}
        >
          {unlocked ? "צפית? 3 שאלות קצרות ←" : "לצפייה בסרטון החינמי ←"}
        </button>
      </div>
      <a
        href={waPlain}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="לכתוב לשנהב בוואטסאפ"
        className="fixed z-30 flex h-14 w-14 items-center justify-center rounded-full"
        style={{ left: 16, bottom: 92, background: "#25D366", boxShadow: "0 8px 24px rgba(37,211,102,0.4)" }}
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden>
          <path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.9-3.9-1.9-6 0-5.9 4.9-10.7 11-10.7s11 4.8 11 10.7-4.9 10.9-10.9 10.9zm6-8c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6-.1-.2-.8-1.8-1-2.5-.3-.7-.5-.6-.8-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 2-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4z" />
        </svg>
      </a>

      {/* ── חלון השאלות (קופץ) ── */}
      <AnimatePresence>
        {quizOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-end justify-center sm:items-center"
            style={{ background: "rgba(42,32,27,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuizOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="3 שאלות קצרות"
              className="relative w-full overflow-y-auto rounded-t-[28px] px-6 pt-8 pb-8 sm:rounded-[28px]"
              style={{ maxWidth: "520px", maxHeight: "92vh", background: "var(--bg-primary)" }}
              initial={{ y: 60 }}
              animate={{ y: 0 }}
              exit={{ y: 60 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setQuizOpen(false)}
                aria-label="סגירה"
                className="absolute left-4 top-4 h-9 w-9 rounded-full text-xl"
                style={{ color: "var(--text-muted)", background: "rgba(64,51,44,0.06)" }}
              >
                ×
              </button>

              {!done && (
                <>
                  <p className="text-center text-sm font-bold" style={{ color: "var(--accent)" }}>
                    שאלה {step + 1} מתוך {QUESTIONS.length}
                  </p>
                  <div className="mx-auto mt-3 h-1.5 overflow-hidden rounded-full" style={{ background: "var(--bg-secondary)", maxWidth: "220px" }}>
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
                    transition={{ duration: 0.22 }}
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
                              background: selected ? "var(--accent-light)" : "#fff",
                              border: `1.5px solid ${selected ? "var(--accent)" : "var(--border-subtle)"}`,
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
                  <motion.div key="done" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                    <h3 className="font-extrabold" style={{ fontSize: "1.5rem" }}>
                      תודה, {name} 🤍
                    </h3>
                    <p className="mt-3 mx-auto" style={{ color: "var(--text-secondary)", maxWidth: "400px", lineHeight: 1.7 }}>
                      לחצי על הכפתור, והתשובות שלך יישלחו אליי בוואטסאפ. אני קוראת כל מילה וחוזרת אלייך אישית.
                    </p>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center rounded-2xl py-4 text-lg font-black text-white"
                      style={{ background: "#25D366", boxShadow: "0 8px 24px rgba(37,211,102,0.3)" }}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
