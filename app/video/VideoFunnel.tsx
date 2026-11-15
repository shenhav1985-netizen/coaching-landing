"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ── הגדרות שנהב ───────────────────────────────────────────
const YOUTUBE_ID = "reZrRkTwDro";
const WHATSAPP_NUMBER = "972506409478";

// המלצות אמיתיות: שם פרטי (ריק = "לקוחה בליווי אישי") + ציטוט
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

const SCRIPT_LINES = [
  "כל יום ראשון את צריכה לאסוף את עצמך מחדש, רק כדי לאכול מזין",
  "את פותחת את הארון וכועסת על עצמך, כי שלושה ג'ינסים הפכו צמודים מאוד",
  "את עולה על המשקל, והמספר עליו מחליט איך תרגישי כל היום",
  "ובערב, \"בא לי מתוק\" הופך לפסטיבל אכילה לתוך הלילה. מה שהתחיל כהנאה הופך לסבל ואשמה",
];

const VIDEO_POINTS: [string, string][] = [
  ["מה באמת תוקע אותך", "ואיך המנגנון הזה פועל אצלך בלי שתשימי לב."],
  ["למה כוח רצון לא עובד כאן", "ולמה המשפט \"פשוט תסגרי את הפה\" מנותק ומחמיר את המצב."],
  ["איך יוצאים מהמעגל הזה אחת ולתמיד", "ואיך מחזירים את השליטה לידיים שלך."],
];

const IMAGINE_LINES = [
  "את קמה בבוקר מלאת אנרגיה, נינוחה, אוהבת את מה שאת רואה במראה.",
  "לא מתחילה את היום עם מחשבות של מה מותר ומה אסור.",
  "ארוחה שאת פשוט נהנית ממנה, בלי צל של אשמה אחרי.",
  "חיבור לגוף שלך שמרגיש סוף סוף כמו בית בטוח, ולא כמו אויב.",
];

const FAQ: [string, string][] = [
  [
    "למה זה בחינם?",
    "כי אישה שמבינה מה באמת קורה לה כבר עשתה את הצעד הכי חשוב. הסרטון הוא מתנה ממני, ואין שום דבר לקנות בסופו.",
  ],
  [
    "האם תמכרי לי משהו בסרטון?",
    "לא. את מקבלת את הסרטון נטו. אם תרצי, תהיה אפשרות לשיחה איתי. שום דבר לא נכפה עלייך.",
  ],
  [
    "מה אני מקבלת בדיוק?",
    "סרטון הדרכה ממוקד של 10 דקות. הוא נפתח לך מיד אחרי שאת משאירה שם וטלפון, בלי לחכות.",
  ],
  [
    "מה קורה אחרי שאני רואה אותו?",
    "אחרי הסרטון יש 3 שאלות קצרות. אני קוראת כל תשובה, וכותבת לך אישית בוואטסאפ.",
  ],
  [
    "האם זה מתאים לי אם כבר ניסיתי הכל?",
    "בדיוק בגלל זה זה מתאים לך. את כבר יודעת שתפריטים רגילים לא עובדים לאורך זמן. הסרטון מסביר בדיוק למה, ומה כן יעבוד.",
  ],
];

const DARK = "#2a201b";
const CREAM = "#f7eee8";
const ROSE = "#e3b5a4";
const STORAGE_KEY = "shenhav-video-lead";

// ── רכיבים קטנים ──
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

function H2({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <h2
      className="mt-5 font-extrabold"
      style={{ color: dark ? CREAM : "var(--text-primary)", fontSize: "clamp(1.65rem, 1.3rem + 1.5vw, 2.3rem)", lineHeight: 1.3 }}
    >
      {children}
    </h2>
  );
}

function RoseButton({ children, onClick, type = "button" }: { children: ReactNode; onClick?: () => void; type?: "button" | "submit" }) {
  return (
    <motion.button
      type={type}
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

function Section({ children, dark = false, id }: { children: ReactNode; dark?: boolean; id?: string }) {
  return (
    <section id={id} className="px-6 py-16 scroll-mt-4" style={{ background: dark ? DARK : "transparent" }}>
      <div className="mx-auto" style={{ maxWidth: "580px" }}>
        {children}
      </div>
    </section>
  );
}

function LeadForm({ onDone, dark = true }: { onDone: (name: string) => void; dark?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const n = name.trim();
    const digits = phone.replace(/\D/g, "");
    if (!n) return setError("איך קוראים לך?");
    if (digits.length < 9 || digits.length > 12) return setError("נראה שמספר הטלפון לא שלם");
    setError("");
    setSending(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: n, phone }),
      });
    } catch {}
    setSending(false);
    onDone(n);
  }

  const inputStyle = {
    background: "#fff",
    color: "var(--text-primary)",
    border: dark ? "none" : "1.5px solid var(--border-accent)",
  };

  return (
    <form onSubmit={submit} className="mx-auto w-full space-y-3" style={{ maxWidth: "460px" }} noValidate>
      <label className="sr-only" htmlFor={`name-${dark}`}>שם</label>
      <input
        id={`name-${dark}`}
        autoComplete="given-name"
        placeholder="שם"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-2xl px-5 py-4 text-lg outline-none"
        style={inputStyle}
      />
      <label className="sr-only" htmlFor={`phone-${dark}`}>טלפון</label>
      <input
        id={`phone-${dark}`}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        placeholder="טלפון"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full rounded-2xl px-5 py-4 text-lg outline-none"
        style={inputStyle}
      />
      {error && (
        <p className="text-sm font-bold" style={{ color: dark ? ROSE : "var(--accent-dark)" }}>
          {error}
        </p>
      )}
      <RoseButton type="submit">{sending ? "רגע…" : "אני רוצה לראות את הסרטון ←"}</RoseButton>
      <p className="text-center text-sm" style={{ color: dark ? "rgba(247,238,232,0.6)" : "var(--text-muted)" }}>
        בחינם · ללא ספאם · הסרטון נפתח לך מיד אחרי ההרשמה
      </p>
    </form>
  );
}

// ── הדף ──
export default function VideoFunnel() {
  const [name, setName] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
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

  function handleDone(n: string) {
    setName(n);
    setUnlocked(true);
    try {
      localStorage.setItem(STORAGE_KEY, n);
    } catch {}
    setTimeout(() => videoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  }

  const goCta = () =>
    (unlocked ? videoRef : formRef).current?.scrollIntoView({ behavior: "smooth", block: "start" });

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

  const CtaRow = () => (
    <div className="mt-10 flex justify-center">
      <RoseButton onClick={goCta}>{unlocked ? "לסרטון ←" : "אני רוצה לראות את הסרטון ←"}</RoseButton>
    </div>
  );

  return (
    <main className="relative overflow-hidden pb-28" style={{ background: "var(--bg-primary)" }}>
      {/* ── 1. פתיחה ── */}
      <section className="relative overflow-hidden px-6 pt-12 pb-16 text-center" style={{ background: DARK }}>
        <Image
          src="/images/coach-kitchen.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "55% 30%", opacity: 0.5 }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(42,32,27,0.45) 0%, rgba(42,32,27,0.7) 45%, ${DARK} 100%)` }} />
        <div className="relative mx-auto" style={{ maxWidth: "620px" }}>
          <Pill dark>במיוחד לנשים שרוצות לרדת במשקל ולהפסיק לשבור</Pill>
          <h1
            className="mt-6 font-extrabold"
            style={{ color: CREAM, fontSize: "clamp(2.1rem, 1.5rem + 3vw, 3.4rem)", lineHeight: 1.15 }}
          >
            הסוד שבגללו השינוי שלך <span style={{ color: ROSE }}>עוד לא החזיק</span>
          </h1>
          <div className="mt-6 mx-auto space-y-3" style={{ color: "rgba(247,238,232,0.82)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "500px" }}>
            <p>בואי לא נייפה את האמת.</p>
            <p>
              את יודעת מה צריך לעשות כדי לרדת במשקל ולשמור עליו.{" "}
              <strong style={{ color: CREAM }}>אז למה את שוברת שוב ושוב?</strong>
            </p>
            <p>
              ואל תעני לי "כי אני חסרת משמעת וחסרת כוח רצון". כי הנה אני אומרת לך:{" "}
              <strong style={{ color: ROSE }}>זו לא הסיבה.</strong>
            </p>
            <p className="pt-1 font-bold" style={{ color: CREAM }}>
              ב-10 דקות תביני בדיוק למה זה קורה.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-bold" style={{ color: ROSE }}>
            <span>✓ בלי עוד דיאטה</span>
            <span>✓ בלי ליווי רגשי מתיש</span>
            <span>✓ בלי "חזה עוף בגודל כף יד"</span>
          </div>
          <p className="mt-3 text-sm" style={{ color: "rgba(247,238,232,0.6)" }}>
            (גם אם כבר ניסית הכל, ובמיוחד אם את מרגישה שאת הבעיה)
          </p>

          <div ref={formRef} className="mt-8 scroll-mt-6">
            {unlocked ? (
              <RoseButton onClick={goCta}>לסרטון שלך ←</RoseButton>
            ) : (
              <LeadForm onDone={handleDone} />
            )}
          </div>
        </div>
      </section>

      {/* ── הסרטון (נפתח אחרי הרשמה) ── */}
      {unlocked && (
        <section ref={videoRef} className="px-6 pt-14 pb-4 scroll-mt-4">
          <div className="mx-auto" style={{ maxWidth: "640px" }}>
            <p className="text-center font-extrabold" style={{ fontSize: "1.4rem" }}>
              {name}, הנה הסרטון שלך 🤍
            </p>
            <p className="mt-1 text-center" style={{ color: "var(--text-secondary)" }}>
              לחצי על הנגן. זה 10 דקות, ושווה לראות עד הסוף.
            </p>
            <div
              className="mt-5 overflow-hidden rounded-[20px]"
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
        </section>
      )}

      {/* ── 2. התסריט ── */}
      <Section>
        <Pill>נשמע מוכר?</Pill>
        <H2>
          את בטח מכירה את התסריט הזה <Marker>מקרוב</Marker>
        </H2>
        <div className="mt-8 space-y-4">
          {SCRIPT_LINES.map((line) => (
            <div
              key={line}
              className="rounded-[20px] px-5 py-5"
              style={{ background: "#fff", boxShadow: "0 8px 28px rgba(64,51,44,0.08)", lineHeight: 1.7, fontSize: "1.05rem" }}
            >
              {line}
            </div>
          ))}
        </div>
        <p className="mt-8 font-bold" style={{ color: "var(--accent-dark)", fontSize: "1.3rem", lineHeight: 1.5 }}>
          ובפנים, תחושה שקטה שמשהו חייב להשתנות.
        </p>
        <div className="mt-8 rounded-[22px] px-6 py-7" style={{ background: "var(--bg-secondary)" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>זה לא קורה כי את לא מתאמצת.</p>
          <p className="mt-2 font-extrabold" style={{ fontSize: "1.25rem", lineHeight: 1.55 }}>
            זה קורה כי את מנסה לפתור בעיה עמוקה <Marker>בעזרת הכלים הלא נכונים.</Marker>
          </p>
        </div>
      </Section>

      {/* ── 3. מה הבנתי ── */}
      <Section dark>
        <Pill dark>מה הבנתי</Pill>
        <H2 dark>
          ליוויתי כבר עשרות נשים שעברו בדיוק את המעגל הזה. <span style={{ color: ROSE }}>ואת יודעת מה הבנתי?</span>
        </H2>
        <div className="mt-6 space-y-4" style={{ color: "rgba(247,238,232,0.82)", fontSize: "1.07rem", lineHeight: 1.8 }}>
          <p>
            את לא צריכה עוד תפריט תזונתי, לא עוד דיאטנית שתשקול אותך, וגם לא טיפול רגשי אינסופי.
          </p>
          <p>
            ובטח שלא את העצות המעצבנות האלה: "נסי להבין מה את באמת צריכה כשיש לך דחף למתוק. חיבוק? נשימה?"
            <br />
            <span style={{ color: ROSE }}>(אחותך צריכה נשימה. את כרגע רוצה שוקולד.)</span>
          </p>
          <p className="font-bold" style={{ color: CREAM }}>
            את פשוט צריכה להבין מה בדיוק מפעיל אותך שם, מאחורי הקלעים.
          </p>
          <p>
            הסיבה שאת שוברת שוב ושוב היא ממש לא באג באופי שלך, והיא לא קשורה לכוח רצון. יש כאן מנגנון שלם שפשוט
            מנהל אותך, ובסרטון אני מסבירה לך בדיוק איך הוא עובד.
          </p>
        </div>
        <div className="mt-8 rounded-[22px] px-6 py-6" style={{ border: "1px solid rgba(227,181,164,0.35)", background: "rgba(227,181,164,0.06)" }}>
          <p style={{ color: "rgba(247,238,232,0.82)", lineHeight: 1.7 }}>
            אני לא רוצה שתלמדי איך להילחם בעצמך או בדחף, או להתאפק בכוח.
          </p>
          <p className="mt-2 font-extrabold" style={{ color: ROSE, fontSize: "1.25rem" }}>
            אני רוצה ללמד אותך איך להשתחרר מזה.
          </p>
        </div>
        <CtaRow />
      </Section>

      {/* ── 4. מה בסרטון ── */}
      <Section>
        <Pill>הסרטון</Pill>
        <H2>
          מה תקבלי בסרטון <Marker>של 10 דקות?</Marker>
        </H2>
        <div className="mt-8 space-y-4">
          {VIDEO_POINTS.map(([title, text], i) => (
            <div
              key={title}
              className="flex gap-4 rounded-[20px] px-5 py-5"
              style={{ background: "#fff", boxShadow: "0 8px 28px rgba(64,51,44,0.08)" }}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-extrabold text-white"
                style={{ background: "linear-gradient(135deg, #8b6156, #d9a593)" }}
              >
                {i + 1}
              </span>
              <p style={{ lineHeight: 1.7, fontSize: "1.04rem" }}>
                <strong style={{ color: "var(--accent-dark)" }}>{title}.</strong> {text}
              </p>
            </div>
          ))}
        </div>
        <CtaRow />
      </Section>

      {/* ── 5. תדמייני ── */}
      <Section dark>
        <Pill dark>תדמייני רגע</Pill>
        <div className="mt-6 space-y-4">
          {IMAGINE_LINES.map((line) => (
            <p key={line} className="flex gap-3" style={{ color: "rgba(247,238,232,0.85)", fontSize: "1.08rem", lineHeight: 1.7 }}>
              <span style={{ color: ROSE }}>✦</span>
              <span>{line}</span>
            </p>
          ))}
        </div>
        <p className="mt-8 font-extrabold" style={{ color: CREAM, fontSize: "1.4rem", lineHeight: 1.5 }}>
          את קלילה, את מרגישה טוב, את נראית טוב. <span style={{ color: ROSE }}>את חופשייה.</span>
        </p>
        <p className="mt-4" style={{ color: "rgba(247,238,232,0.75)", lineHeight: 1.7 }}>
          זה ממש לא חלום רחוק. זה מה שקורה כשמבינים מה באמת מנהל אותנו.
        </p>
        <p className="mt-4 font-bold" style={{ color: CREAM }}>
          10 דקות. זה כל מה שזה לוקח.
        </p>
        <CtaRow />
      </Section>

      {/* ── 6. המלצות ── */}
      <Section>
        <Pill>מה הן אומרות</Pill>
        <H2>
          אל תאמיני רק לי. <Marker>תאמיני להן</Marker>
        </H2>
        <div className="mt-8 space-y-5">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="rounded-[22px] px-6 py-6" style={{ background: "#fff", boxShadow: "0 10px 34px rgba(64,51,44,0.09)" }}>
              <blockquote style={{ lineHeight: 1.75, fontSize: "1.03rem" }}>"{t.quote}"</blockquote>
              <figcaption className="mt-4 pt-4 flex items-center gap-3" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-extrabold text-white"
                  style={{ background: "linear-gradient(135deg, #8b6156, #d9a593)" }}
                  aria-hidden
                >
                  {t.name ? t.name[0] : "🤍"}
                </span>
                <span>
                  <span className="block font-bold" style={{ color: "var(--accent-dark)" }}>
                    {t.name || "לקוחה בליווי אישי"}
                  </span>
                  <span className="block text-sm" style={{ color: "var(--text-muted)" }}>
                    בליווי אישי עם שנהב
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ── 7. מי אני ── */}
      <Section>
        <Pill>נעים להכיר</Pill>
        <H2>
          אני שנהב בנימין, <Marker>מומחית לבריאות טבעית ותזונה</Marker>
        </H2>
        <div className="relative mx-auto mt-8" style={{ width: "min(420px, 88vw)", aspectRatio: "2 / 3" }}>
          <Image
            src="/images/coach-kitchen.jpg"
            alt="שנהב בנימין"
            fill
            sizes="420px"
            style={{
              objectFit: "cover",
              borderRadius: "28px",
              WebkitMaskImage: "linear-gradient(180deg, #000 82%, transparent 100%)",
              maskImage: "linear-gradient(180deg, #000 82%, transparent 100%)",
            }}
          />
        </div>
        <div className="-mt-4 relative space-y-4" style={{ color: "var(--text-secondary)", fontSize: "1.06rem", lineHeight: 1.8 }}>
          <p>
            בגיל 18 עשיתי את הדיאטה הראשונה שלי. 12 שנים אחר כך הבנתי שלא רציתי רק לרדת במשקל.{" "}
            <strong style={{ color: "var(--text-primary)" }}>רציתי להיוולד מחדש. האוכל היה הדלת.</strong>
          </p>
          <p>
            את לא מבינה כמה אני מכירה את זה מקרוב. אני יודעת בדיוק מה עובר עלייך, כי עברתי את זה בעצמי, ויצאתי.
            וזה בדיוק מה שלימד אותי מה באמת עובד.
          </p>
          <p>עד היום ליוויתי עשרות נשים לצאת מהמעגל הזה, ולחזור להיות בעלות הבית של עצמן.</p>
          <p className="font-bold" style={{ color: "var(--accent-dark)", fontSize: "1.15rem" }}>
            ומבטיחה לך, אפשר לצאת מזה.
          </p>
        </div>

        <div className="mt-10 rounded-[22px] px-6 py-6" style={{ background: "#fff", border: "1px solid var(--border-accent)", boxShadow: "0 8px 28px rgba(64,51,44,0.07)" }}>
          <p className="font-extrabold" style={{ color: "var(--accent-dark)", fontSize: "1.2rem" }}>
            למה רק 7?
          </p>
          <p className="mt-2" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
            אני מלווה עד 7 נשים בו-זמנית, באופן אישי. ככה אני מצליחה להישאר איתך באמת, ולא להפוך אותך למספר. כשהמקומות
            מלאים, את נכנסת לרשימת המתנה, ואני חוזרת אלייך כשמתפנה מקום.
          </p>
        </div>
      </Section>

      {/* ── 8. אם הגעת עד לכאן ── */}
      <Section dark>
        <Pill dark>אם הגעת עד לכאן</Pill>
        <H2 dark>
          משהו בטקסט הזה <span style={{ color: ROSE }}>נגע בך.</span>
        </H2>
        <div className="mt-6 space-y-4" style={{ color: "rgba(247,238,232,0.82)", fontSize: "1.07rem", lineHeight: 1.8 }}>
          <p>
            כל מה שרצית זה שמישהי סוף סוף תלמד אותך איך לצאת מהמעגל הזה, ותחזיר לך את השליטה על האכילה שלך.
          </p>
          <p className="font-bold" style={{ color: CREAM }}>
            את יכולה להשתחרר מהמעגל הזה, אחת ולתמיד. הסרטון הזה הוא הצעד הראשון שלך.
          </p>
        </div>
        <CtaRow />
      </Section>

      {/* ── 9. שאלות ── */}
      <Section>
        <Pill>שאלות שצפות עכשיו</Pill>
        <div className="mt-6 space-y-3">
          {FAQ.map(([q, a], i) => {
            const open = openFaq === i;
            return (
              <div key={q} className="rounded-[18px]" style={{ background: "#fff", boxShadow: "0 6px 22px rgba(64,51,44,0.07)" }}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right font-bold"
                  style={{ fontSize: "1.04rem" }}
                >
                  <span>{q}</span>
                  <span style={{ color: "var(--accent)", fontSize: "1.4rem", transform: open ? "rotate(45deg)" : "none", transition: "transform .2s" }}>
                    +
                  </span>
                </button>
                {open && (
                  <p className="px-5 pb-5" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                    {a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── 10. טופס סיום ── */}
      <Section dark>
        <div className="text-center">
          <H2 dark>
            10 דקות. <span style={{ color: ROSE }}>הצעד הראשון שלך.</span>
          </H2>
          <div className="mt-8">
            {unlocked ? (
              <div className="flex justify-center">
                <RoseButton onClick={goCta}>לסרטון שלך ←</RoseButton>
              </div>
            ) : (
              <LeadForm onDone={handleDone} />
            )}
          </div>
        </div>
      </Section>

      {/* ── פוטר ── */}
      <footer className="px-6 pt-8 text-center text-sm" style={{ color: "var(--text-muted)" }}>
        © 2026 שנהב בנימין | כל הזכויות שמורות
      </footer>

      {/* ── כפתור קבוע + וואטסאפ צף ── */}
      <div
        className="fixed inset-x-0 bottom-0 z-20 px-4 pb-4 pt-6"
        style={{ background: "linear-gradient(180deg, transparent, rgba(250,246,242,0.95) 45%)" }}
      >
        <button
          type="button"
          onClick={unlocked ? () => setQuizOpen(true) : goCta}
          className="mx-auto block w-full rounded-full py-4 text-lg font-black"
          style={{ maxWidth: "460px", color: CREAM, background: DARK, boxShadow: "0 10px 30px rgba(42,32,27,0.35)" }}
        >
          {unlocked ? "צפית? 3 שאלות קצרות ←" : "אני רוצה לראות את הסרטון ←"}
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

      {/* ── חלון השאלות ── */}
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

              {!started && (
                <div className="text-center">
                  <p className="text-sm font-bold tracking-[0.2em]" style={{ color: "var(--accent)" }}>
                    בדיקת התאמה · ליווי אישי
                  </p>
                  <h3 className="mt-4 font-extrabold" style={{ fontSize: "1.8rem", lineHeight: 1.3 }}>
                    הליווי האישי מתאים לך?
                  </h3>
                  <p className="mt-4 mx-auto" style={{ color: "var(--text-secondary)", maxWidth: "380px", lineHeight: 1.75, fontSize: "1.05rem" }}>
                    הליווי הצמוד שלי לא מתאים לכל אחת. 3 שאלות קצרות, ונבדוק יחד אם זה הרגע והמקום הנכונים בשבילך.
                  </p>
                  <div className="mt-7 flex justify-center">
                    <RoseButton onClick={() => setStarted(true)}>בואי נבדוק התאמה ←</RoseButton>
                  </div>
                  <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
                    3 שאלות · ללא התחייבות
                  </p>
                </div>
              )}

              {started && !done && (
                <>
                  <p className="text-center text-sm font-bold" style={{ color: "var(--accent)" }}>
                    שאלה {step + 1} מתוך {QUESTIONS.length}
                  </p>
                  <div className="mx-auto mt-3 h-1.5 overflow-hidden rounded-full" style={{ background: "var(--bg-secondary)", maxWidth: "220px" }}>
                    <div className="h-full rounded-full transition-all duration-300" style={{ width: `${(step / QUESTIONS.length) * 100}%`, background: "var(--accent)" }} />
                  </div>
                </>
              )}

              <AnimatePresence mode="wait">
                {!started ? null : !done ? (
                  <motion.div key={step} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ duration: 0.22 }}>
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
                      <button type="button" onClick={() => setStep(step - 1)} className="mt-5 text-sm underline" style={{ color: "var(--text-muted)" }}>
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
                    <button type="button" onClick={() => setStep(0)} className="mt-4 text-sm underline" style={{ color: "var(--text-muted)" }}>
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
