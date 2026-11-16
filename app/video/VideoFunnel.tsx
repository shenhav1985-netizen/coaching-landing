"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CREAM, DARK, ROSE, STORAGE_KEY, THANKS_PATH, waUrl } from "./shared";

// צילומי מסך אמיתיים מוואטסאפ (public/images/testimonials)
// הודעה קצרה שצילום המסך שלה קטן מדי לקריאה מוצגת כטקסט, בבועה בסגנון וואטסאפ
type Shot = { name: string } & ({ src: string; w: number; h: number } | { text: string; time: string });
const WHATSAPP_SHOTS: Shot[] = [
  {
    name: "אלכס, 36",
    text: "היום בעלי הביא קופסת שוקולדים משהו טוב, זה אפילו לא העסיק אותי. אני עדיין אוהבת שוקולד, אבל הוא לא המנהל שלי. יש לי שקט בראש",
    time: "10:27",
  },
  { name: "אורית, 54", src: "/images/testimonials/testimonial-9.png", w: 1531, h: 712 },
  {
    name: "ליאת, 43",
    text: "שנהב ❤️ לפעמים אנשים נכנסים לחיינו בדיוק ברגע שבו אנחנו מוכנים לשינוי, ומרגישה שכך קרה לי איתך! יש בך שילוב מדויק ומיוחד של אנושיות, אינטליגנציה רגשית, ובעיקר יכולת לראות מעבר למספרים ולמשקל. את רואה אותי ואת מה שקורה בי בפנים, וזה בדיוק מה שעשה את ההבדל והפך את התהליך לכל כך משמעותי. תודה שאת מובילה אותי לא רק לעבר ירידה במשקל, אלא לעבר שינוי הרבה יותר עמוק בקשר שלי עם עצמי ועם גופי. ושכמה שיותר אנשים יזכו לליווי שלך!",
    time: "9:24",
  },
  { name: "מיכל, 35", src: "/images/testimonials/testimonial-8.png", w: 1128, h: 745 },
  { name: "נועה", src: "/images/testimonials/testimonial-1.png", w: 1075, h: 472 },
  { name: "הילה", src: "/images/testimonials/testimonial-7.png", w: 1466, h: 630 },
  { name: "רותם", src: "/images/testimonials/testimonial-4.png", w: 995, h: 787 },
  { name: "מיכל, 35", src: "/images/testimonials/testimonial-2.png", w: 1096, h: 401 },
  { name: "רונית", src: "/images/testimonials/testimonial-3.png", w: 1107, h: 529 },
  { name: "מאיה", src: "/images/testimonials/testimonial-5.png", w: 1009, h: 323 },
];

// [פתיחה, סוף מודגש]
const SCRIPT_LINES: [string, string][] = [
  ["כל יום ראשון את מגרדת את עצמך מהרצפה ומתחילה מחדש, בשיא המוטיבציה. ", "ואחרי כמה ימים, נפילה גדולה."],
  ["כל היום את מוקפדת, כל השבוע את מדוגמת. ", "ובערב, או בסוף השבוע, הכול קורס מול המקרר."],
  ["את נכנסת למטבח כל כמה דקות, בלי מנוחה. ", "ואוכלת גם כשאת בכלל לא רעבה."],
  ["הג'ינס רחב שבוע אחד, וצמוד חודש אחרי. ", "ואת כועסת על עצמך בלי סוף."],
];

const VIDEO_POINTS: [string, string][] = [
  ["מה באמת תוקע אותך", "ואיך המנגנון הזה פועל אצלך בלי שתשימי לב."],
  ["למה כוח רצון לא עובד כאן", "ולמה המשפט \"פשוט תסגרי את הפה\" מנותק ומחמיר את המצב."],
  ["איך יוצאים מהמעגל הזה אחת ולתמיד", "ואיך חוזרים להיות המנהלת של הגוף שלך, ולא האוכל."],
];

const IMAGINE_LINES = [
  "את קמה בבוקר מלאת אנרגיה, נינוחה, אוהבת את מה שאת רואה במראה.",
  "לא מתחילה את היום עם מחשבות של מה מותר ומה אסור.",
  "ארוחה שאת פשוט נהנית ממנה, בלי צל של אשמה אחרי.",
  "ערב רגיל, בלי פסטיבל אכילה. את מחליטה מה לאכול, ולא האוכל מחליט בשבילך.",
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

// ── חיבור לטופס של רב מסר (נטען מוסתר בדף, הטופס המעוצב ממלא ושולח אותו) ──
const RAV_FORM_SRC = "https://form2.ravpage.co.il/9317a8fb473b49a4bd9124712670381f6AFA1030";
const RAV_CONTAINER_ID = "rav-hidden-form";

function setInputValue(el: HTMLInputElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
  if (setter) setter.call(el, value);
  else el.value = value;
  for (const type of ["input", "change", "blur"]) el.dispatchEvent(new Event(type, { bubbles: true }));
}

function submitToRav(name: string, phone: string): boolean {
  const root = document.getElementById(RAV_CONTAINER_ID);
  const nameInput = root?.querySelector<HTMLInputElement>('input[name="fields[13_Fixed]"]');
  const phoneInput = root?.querySelector<HTMLInputElement>('input[name="fields[2_Fixed]"]');
  const button = root?.querySelector<HTMLButtonElement>("button.submitButton");
  if (!nameInput || !phoneInput || !button) return false;
  setInputValue(nameInput, name);
  setInputValue(phoneInput, phone);
  button.click();
  return true;
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
      localStorage.setItem(STORAGE_KEY, n);
    } catch {}
    if (!submitToRav(n, digits)) console.error("ravpage form not loaded; lead not saved");
    // רב מסר מעביר אחרי הרשמה לדף התודה. אם זה לוקח זמן, עוברים בעצמנו
    setTimeout(() => {
      setSending(false);
      onDone(n);
    }, 2500);
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setName(saved);
        setUnlocked(true);
      }
    } catch {}

    const container = document.getElementById(RAV_CONTAINER_ID);
    if (container && !container.querySelector("script")) {
      const script = document.createElement("script");
      script.src = RAV_FORM_SRC;
      script.charset = "UTF-8";
      container.appendChild(script);
    }
  }, []);


  function handleDone(n: string) {
    setName(n);
    window.location.href = THANKS_PATH;
  }

  const goThanks = () => {
    window.location.href = THANKS_PATH;
  };
  const goCta = () => (unlocked ? goThanks() : formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  const waPlain = waUrl("היי שנהב, הגעתי מהדף של הסרטון 🤍");

  const CtaRow = () => (
    <div className="mt-10 flex justify-center">
      <RoseButton onClick={goCta}>{unlocked ? "הסרטון כאן ←" : "אני רוצה לראות את הסרטון ←"}</RoseButton>
    </div>
  );

  return (
    <main className="relative pb-10" style={{ background: "var(--bg-primary)", overflowX: "clip" }}>
      <div
        id={RAV_CONTAINER_ID}
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px", top: 0, width: "400px", height: "1px", overflow: "hidden" }}
      />

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
          <Pill dark>במיוחד לנשים שרוצות לרדת במשקל, להפסיק לשבור ולחזור לנהל את הגוף שלהן</Pill>
          <h1
            className="mt-6 font-extrabold"
            style={{ color: CREAM, fontSize: "clamp(2.1rem, 1.5rem + 3vw, 3.4rem)", lineHeight: 1.15 }}
          >
            הסוד שמאחורי הקלעים, שבגללו את <span style={{ color: ROSE }}>שוברת שוב ושוב</span>
          </h1>
          <div className="mt-6 mx-auto space-y-3" style={{ color: "rgba(247,238,232,0.82)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "500px" }}>
            <p>בואי לא נייפה את האמת.</p>
            <p>
              את יודעת מה צריך לעשות כדי לרדת במשקל ולשמור עליו.{" "}
              <strong style={{ color: CREAM }}>ובכל זאת, זה לא מחזיק.</strong>
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
              <RoseButton onClick={goCta}>הסרטון כאן ←</RoseButton>
            ) : (
              <LeadForm onDone={handleDone} />
            )}
          </div>

        </div>
      </section>

      {/* ── 2. התסריט ── */}
      <Section>
        <Pill>נשמע מוכר?</Pill>
        <H2>
          את בטח מכירה את התסריט הזה <Marker>מקרוב</Marker>
        </H2>
        <div className="mt-8 space-y-4">
          {SCRIPT_LINES.map(([line, punch]) => (
            <div
              key={line}
              className="flex gap-3 rounded-[20px] px-5 py-5"
              style={{ background: "#fff", boxShadow: "0 8px 28px rgba(64,51,44,0.08)", lineHeight: 1.7, fontSize: "1.05rem" }}
            >
              <span style={{ color: "var(--accent)" }}>✦</span>
              <span>
                {line}
                <strong style={{ color: "var(--accent-dark)" }}>{punch}</strong>
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 font-bold" style={{ color: "var(--accent-dark)", fontSize: "1.3rem", lineHeight: 1.5 }}>
          ובפנים, תחושה שקטה שמשהו חייב להשתנות.
        </p>
      </Section>

      {/* ── 3. את צודקת, זה לא הגיוני ── */}
      <section style={{ background: DARK }}>
        <div className="mx-auto px-6 pt-16" style={{ maxWidth: "580px" }}>
          <H2 dark>
            את צודקת.
            <br />
            <span style={{ color: ROSE }}>זה לא הגיוני.</span>
          </H2>
        </div>
        <div className="mx-auto mt-8" style={{ maxWidth: "580px", color: "rgba(247,238,232,0.85)", fontSize: "1.07rem", lineHeight: 1.75 }}>
          <div className="px-6 py-5" style={{ borderTop: "1px solid rgba(247,238,232,0.12)" }}>
            את יודעת מה לאכול. את יודעת כמה. את אפילו יודעת למה.
            <br />
            את מתחילה כל פעם מחדש, בכל הכוח, עם תוכנית מסודרת.
            <br />
            ובכל זאת, המשקל תקוע במקום. או גרוע מזה, רק עולה.
          </div>
          <div className="px-6 py-6 font-bold" style={{ background: "rgba(0,0,0,0.22)", color: ROSE }}>
            ובינינו? את פשוט מרגישה שאיבדת שליטה. גם על ההחלטות שלך, וגם על הגוף שלך.
            <br />
            וכל נפילה משאירה אחריה רק סבל ואשמה.
          </div>
          <div className="px-6 py-5" style={{ borderBottom: "1px solid rgba(247,238,232,0.12)" }}>
            וכל בוקר את שואלת את עצמך:
            <br />
            &quot;מה לא בסדר איתי?&quot;
          </div>
          <div className="px-6 pt-7 pb-16 font-extrabold" style={{ color: ROSE, fontSize: "1.2rem", lineHeight: 1.6 }}>
            הבעיה היא לא שאת לא מתאמצת מספיק.
            <br />
            הבעיה היא שאת מנסה לפתור בעיה עמוקה בעזרת הכלים הלא נכונים.
          </div>
        </div>
      </section>

      {/* ── 4. קחי רגע לדמיין ── */}
      <Section>
        <div className="text-center">
          <H2>
            תצללי איתי <Marker>לרגע הבא:</Marker>
          </H2>
        </div>
        <ul className="mt-8">
          {IMAGINE_LINES.map((line) => (
            <li
              key={line}
              className="flex gap-3 py-4"
              style={{ borderBottom: "1px solid var(--border-subtle)", lineHeight: 1.7, fontSize: "1.05rem" }}
            >
              <span className="font-black" style={{ color: "var(--accent-dark)" }}>✓</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center font-extrabold" style={{ color: "var(--accent-dark)", fontSize: "1.25rem", lineHeight: 1.5 }}>
          זה לא חלום. זה מה שאני והנשים שאני מלווה מרגישות היום, כשמבינים את המנגנון.
        </p>
        <CtaRow />
      </Section>

      {/* ── 5. מה הן כותבות לי (צילומי וואטסאפ) ── */}
      <section className="py-14" style={{ background: "var(--bg-secondary)" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "580px" }}>
          <Pill>מה הן כותבות לי</Pill>
          <H2>
            אל תאמיני רק לי. <Marker>תאמיני להן</Marker>
          </H2>
        </div>
        {/* ערימה: כל כרטיס נדבק למעלה בזמן הגלילה, והבא נערם מעליו */}
        <div className="mx-auto mt-8 px-6" style={{ maxWidth: "460px" }}>
          {WHATSAPP_SHOTS.map((shot, i) => (
            <div key={i} className="sticky mb-8" style={{ top: `${72 + i * 12}px` }}>
            <div
              className="overflow-hidden rounded-[20px]"
              style={{
                background: "#fff",
                border: "1px solid rgba(64,51,44,0.06)",
                boxShadow: "0 -6px 24px rgba(64,51,44,0.10), 0 14px 34px rgba(64,51,44,0.12)",
              }}
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-extrabold text-white"
                  style={{ background: "linear-gradient(135deg, #8b6156, #d9a593)" }}
                  aria-hidden
                >
                  {shot.name[0]}
                </span>
                <span className="flex-1">
                  <span className="block font-bold" style={{ color: "var(--accent-dark)" }}>
                    {shot.name}
                  </span>
                  <span className="block text-xs" style={{ color: "var(--text-muted)" }}>
                    בליווי אישי עם שנהב
                  </span>
                </span>
                <span className="text-sm" style={{ color: "#d9a593", letterSpacing: "1px" }} aria-label="5 כוכבים">
                  ★★★★★
                </span>
              </div>
              <div style={{ background: "#efe7de" }}>
              {"src" in shot ? (
                <Image src={shot.src} alt="הודעה מלקוחה בוואטסאפ" width={shot.w} height={shot.h} className="h-auto w-full" sizes="460px" />
              ) : (
                <div className="p-3">
                  <div className="rounded-2xl rounded-tr-sm bg-white px-4 pt-3 pb-2" style={{ boxShadow: "0 1px 1px rgba(0,0,0,0.08)" }}>
                    <p style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "#111" }}>{shot.text}</p>
                    <p className="mt-1 text-left text-xs" style={{ color: "#8a8a8a" }}>
                      {shot.time}
                    </p>
                  </div>
                </div>
              )}
              </div>
            </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs" style={{ color: "var(--text-muted)" }}>
          חלק מהשמות שונו כדי לשמור על פרטיות הלקוחות
        </p>
      </section>

      {/* ── 6. מה בסרטון ── */}
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

      {/* ── 7. איך אני חושבת ── */}
      <Section dark>
        <div className="text-center">
          <p className="text-sm font-bold tracking-[0.25em]" style={{ color: ROSE }}>
            הגישה שלי
          </p>
          <H2 dark>איך אני חושבת, ולמה זה עובד</H2>
        </div>
        <div className="mt-6 space-y-4" style={{ color: "rgba(247,238,232,0.82)", fontSize: "1.07rem", lineHeight: 1.85 }}>
          <p>
            את לא צריכה עוד דיאטה קפדנית. את צריכה <strong style={{ color: ROSE }}>דיוקים בתזונה</strong>, כאלה שמבטיחים לך
            שובע ואכילה טובה.
          </p>
          <p>
            ובטח שלא את העצות המעצבנות האלה: &quot;נסי להבין מה את באמת צריכה כשיש לך דחף למתוק. חיבוק? נשימה?&quot;{" "}
            <span style={{ color: ROSE }}>(אחותך צריכה נשימה. את כרגע רוצה שוקולד.)</span>
          </p>
          <p>
            הסיבה שאת שוברת שוב ושוב היא לא באג באופי שלך, והיא לא קשורה לכוח רצון. יש{" "}
            <strong style={{ color: CREAM }}>מנגנון שלם שמנהל אותך מאחורי הקלעים</strong>. ברגע שמבינים אותו, מפסיקים
            להילחם בו.
          </p>
          <p>
            אני לא מלמדת להתאפק בכוח. <strong style={{ color: ROSE }}>אני מלמדת להשתחרר מזה</strong>, ולחזור להיות המנהלת של
            הגוף שלך.
          </p>
        </div>
        <CtaRow />
      </Section>

      {/* ── 8. נעים להכיר ── */}
      <Section>
        <p className="text-sm font-bold tracking-[0.25em]" style={{ color: "var(--accent)" }}>
          נעים להכיר
        </p>
        <H2>
          12 שנים הייתי <Marker>בדיוק איפה שאת עכשיו</Marker>
        </H2>
        <p className="mt-2 text-sm font-bold" style={{ color: "var(--text-muted)" }}>
          שנהב בנימין · מומחית לבריאות טבעית, רפואה תזונתית ושחרור מאכילה רגשית
        </p>
        <div className="mt-6 space-y-4" style={{ color: "var(--text-secondary)", fontSize: "1.06rem", lineHeight: 1.85 }}>
          <p>
            12 שנים הייתי במעגל הדיאטות. מתחילה מלאת התרגשות, יורדת, וחוזרת לנקודת ההתחלה. שוב ושוב.
          </p>
          <p>
            המעגל הזה פיתח אצלי אכילה רגשית שלא הצלחתי לשלוט בה, ואיתה סבל נורא. הייתי בטוחה שלעולם לא אצא מזה. שנועדתי
            להיות כל החיים במאבק עם האוכל והמשקל. האמנתי שזה הגורל שלי.
          </p>
          <p className="font-bold" style={{ color: "var(--text-primary)" }}>
            ואז הבנתי משהו ששינה הכל: האכילה לא הייתה הבעיה. היא הייתה סימפטום של משהו אחר, שביקש ריפוי.
          </p>
          <p>
            כשהבנתי איך מערכת ההפעלה שלי עובדת, הירידה במשקל קרתה באופן טבעי. ואני שומרת עליה עד היום, בלי מאבק.
          </p>
          <p className="font-extrabold" style={{ color: "var(--accent-dark)", fontSize: "1.2rem" }}>
            עכשיו הגיע הזמן שלך ללמוד את זה.
          </p>
        </div>
        <div className="relative mx-auto mt-10" style={{ width: "min(340px, 80vw)", aspectRatio: "1 / 1" }}>
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: "linear-gradient(135deg, #8b6156, #d9a593)", transform: "translate(-10px, 10px)" }}
          />
          <div className="absolute inset-0 overflow-hidden rounded-full" style={{ border: "5px solid #fff", boxShadow: "0 18px 50px rgba(64,51,44,0.18)" }}>
            <Image
              src="/images/coach-kitchen.jpg"
              alt="שנהב בנימין"
              fill
              sizes="680px"
              style={{ objectFit: "cover", transform: "scale(2.4)", transformOrigin: "51% 33%" }}
            />
          </div>
        </div>

        <div className="mt-12 rounded-[22px] px-6 py-6" style={{ background: "#fff", border: "1px solid var(--border-accent)", boxShadow: "0 8px 28px rgba(64,51,44,0.07)" }}>
          <p className="font-extrabold" style={{ color: "var(--accent-dark)", fontSize: "1.2rem" }}>
            למה רק 7?
          </p>
          <p className="mt-2" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
            אני מלווה עד 7 נשים בו-זמנית, באופן אישי. ככה אני מצליחה להישאר איתך באמת, ולא להפוך אותך למספר. כשהמקומות
            מלאים, את נכנסת לרשימת המתנה, ואני חוזרת אלייך כשמתפנה מקום.
          </p>
        </div>
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

      {/* ── 10. אם הגעת עד לכאן + טופס ── */}
      <Section dark>
        <div className="text-center">
          <Pill dark>אם הגעת עד לכאן</Pill>
          <H2 dark>
            משהו בטקסט הזה <span style={{ color: ROSE }}>נגע בך.</span>
          </H2>
          <div className="mt-6 space-y-3" style={{ color: "rgba(247,238,232,0.82)", fontSize: "1.07rem", lineHeight: 1.8 }}>
            <p>כל מה שרצית זה שמישהי סוף סוף תלמד אותך איך לצאת מהמעגל הזה, ותחזיר אותך להיות המנהלת של הגוף שלך.</p>
            <p className="font-bold" style={{ color: CREAM }}>
              את יכולה להשתחרר מהמעגל הזה, אחת ולתמיד. הסרטון הזה הוא הצעד הראשון שלך.
            </p>
          </div>
          <div className="mt-8">
            {unlocked ? (
              <div className="flex justify-center">
                <RoseButton onClick={goCta}>הסרטון כאן ←</RoseButton>
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

      {/* ── וואטסאפ צף ── */}
      <a
        href={waPlain}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="לכתוב לשנהב בוואטסאפ"
        className="fixed z-30 flex h-14 w-14 items-center justify-center rounded-full"
        style={{ left: 16, bottom: 20, background: "#25D366", boxShadow: "0 8px 24px rgba(37,211,102,0.4)" }}
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden>
          <path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.9-3.9-1.9-6 0-5.9 4.9-10.7 11-10.7s11 4.8 11 10.7-4.9 10.9-10.9 10.9zm6-8c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6-.1-.2-.8-1.8-1-2.5-.3-.7-.5-.6-.8-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 2-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4z" />
        </svg>
      </a>
    </main>
  );
}
