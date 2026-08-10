import Image from "next/image";
import LeadForm from "./components/LeadForm";
import {
  GlassCard,
  AccentLine,
  AccentDivider,
  AmbientGlow,
  CTAButton,
  SectionHook,
  Reveal,
} from "./components/ui";

export default function Home() {
  return (
    <main className="relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* NAV */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 max-w-5xl mx-auto w-full">
        <span className="font-extrabold text-lg" style={{ color: "var(--text-primary)" }}>
          שנהב בנימין
        </span>
        <span className="text-sm hidden sm:block" style={{ color: "var(--text-muted)" }}>
          מאמנת תזונה מנטלית · ליווי אישי 1:1
        </span>
      </header>

      {/* HERO */}
      <section className="relative px-6 pt-6 pb-20 max-w-5xl mx-auto text-center">
        <AmbientGlow top="10%" left="50%" size={700} opacity={0.08} />

        <Reveal>
          <p
            className="mx-auto"
            style={{
              fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.2rem)",
              maxWidth: "760px",
              color: "var(--text-secondary)",
            }}
          >
            התחנה הסופית לנשים שעייפות ממאבק בירידה במשקל — ורוצות לבנות אורח חיים
            יציב בראש שקט
          </p>
        </Reveal>

        <Reveal>
          <h1
            className="font-bold leading-snug mx-auto"
            style={{
              fontSize: "clamp(1.15rem, 1rem + 0.8vw, 1.55rem)",
              maxWidth: "700px",
              marginTop: "1.25rem",
              color: "var(--text-primary)",
            }}
          >
            תוך 10 שבועות אנחנו מנתקות מהשורש את התלות באוכל — עד שאת יוצאת מהלופ של
            דיאטות ומאבק במשקל, ומעניקה לעצמך שגרת תזונה חופשית ויציבה שעובדת מבפנים
            ומחזירה לך{" "}
            <span style={{ color: "var(--accent-dark)" }}>סדר, קלילות ושקט</span> —
            בעזרת שיטה מנטלית לשחרור דפוסי מחשבה שעבדה לאלפי נשים.
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-4 font-bold" style={{ color: "var(--accent-dark)" }}>
            מזינות את הגוף והראש, בלי להישחק ובלי להתחיל מחדש כל שבוע.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 mx-auto relative" style={{ width: "min(360px, 80vw)" }}>
            <div
              className="relative rounded-[28px] overflow-hidden"
              style={{
                border: "1.5px solid var(--border-accent)",
                boxShadow: "0 0 50px rgba(185,138,120,0.18), 0 20px 60px rgba(64,51,44,0.15)",
                aspectRatio: "4 / 5",
              }}
            >
              <Image
                src="/images/coach.png"
                alt="שנהב בנימין — מאמנת תזונה מנטלית"
                fill
                sizes="360px"
                style={{ objectFit: "cover", objectPosition: "center 92%" }}
                priority
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10">
            <CTAButton text="אני רוצה לבדוק שהתהליך מתאים לי" />
          </div>
        </Reveal>
      </section>

      <AccentDivider />

      {/* NO MORE */}
      <section className="relative px-6 py-14 max-w-3xl mx-auto text-center">
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            לא עוד תהליך שמתחיל בהתלהבות ונגמר בעייפות.
            <br />
            לא עוד ליווי שדורש ממך להיות &quot;חזקה&quot;, &quot;ממושמעת&quot; או &quot;יותר
            בעניין&quot; — ולא עוד הבטחה לשינוי חיצוני שמתרסק על החיים האמיתיים שלך
            באמצע שבוע עמוס.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            הגיע הזמן לנתק את הקשר בין אוכל למילוי רגשי, לנצח דפוסי אכילה לא
            מיטיבים, להחזיר בעלות לגוף — ולבנות הרגלים חדשים מהשורש, שעובדים
            בשבילך גם כשאין לך כוח, זמן או חשק.
          </p>
        </Reveal>

        <Reveal>
          <GlassCard accent className="mt-8" style={{ maxWidth: "640px", margin: "0 auto" }}>
            <p className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
              תהליך אחד מדויק שמחזיק שגרה, נראות חיצונית ואורח חיים — לאורך זמן.
            </p>
          </GlassCard>
        </Reveal>
      </section>

      <AccentDivider />

      {/* REALITY AFTER */}
      <section className="relative px-6 py-14 max-w-3xl mx-auto text-center">
        <Reveal>
          <SectionHook>איך נראית המציאות שלך אחרי שהמאבק נגמר?</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            ששששקט. אין דרמות סביב אוכל. אין חשיבה אובססיבית ואין החלטות אינסופיות.
            <br />
            יש סדר, פשטות וביטחון מלא במה שנכנס לגוף — ביום רגיל, לא ביום מושלם.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-5 text-right" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
          <Reveal>
            <p>
              <b style={{ color: "var(--accent-dark)" }}>יותר קלילות:</b> הגוף נרגע.
              האכילה מפסיקה להיות מאבק יומיומי. את לא &quot;בדיאטה&quot; ולא
              &quot;נשברת&quot; — את פשוט חיה בתוך שגרה עם הרגלים שעובדים בשבילך.
            </p>
          </Reveal>
          <Reveal>
            <p>
              <b style={{ color: "var(--accent-dark)" }}>יותר שליטה:</b> לא דרך
              איסורים ולא דרך כוח רצון, אלא דרך שיטה ברורה שמחזיקה גם בשבוע עמוס, גם
              בעייפות וגם בחיים עצמם.
            </p>
          </Reveal>
          <Reveal>
            <p>
              <b style={{ color: "var(--accent-dark)" }}>יותר ביטחון בעצמך:</b> את
              יוצרת סמכות פנימית שמותאמת אישית לך, ואין תוכנית שאת צריכה להיצמד
              אליה. במקום לשאול שוב &quot;למה זה לא מחזיק אצלי&quot; — יש לך הרגלים
              חדשים שמקרינים על כל תחומי החיים.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-8" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            יש לך שיטה בוגרת. אחראית. יציבה ואנושית.
            <br />
            כזו שלא מבטיחה קסמים — אלא מסיימת מאבק.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* QUALIFYING / MIRROR */}
      <section className="relative px-6 py-14 max-w-3xl mx-auto text-center">
        <Reveal>
          <SectionHook>ככה שאם את...</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            אישה חכמה, מתפקדת ועמוסה, שכבר ניסתה &quot;להסתדר עם אוכל&quot; בכל דרך
            אפשרית: דיאטות, שיטות, השראה, משמעות, ימי ראשון עם כוונות.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-6 font-bold" style={{ color: "var(--text-primary)" }}>
            אבל...
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-4" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            בפועל ממשיכה להרגיש שהתזונה גוזלת ממך אנרגיה במקום להחזיר אותה — אנחנו
            כאן כדי לסגור לך את הפינה <b style={{ color: "var(--text-primary)" }}>אחת ולתמיד</b>.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-3 text-right" style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.9 }}>
          <Reveal>
            <p>אם את מצליחה במיליון תחומי חיים... אבל לא מרוצה מהנראות, והרבה יותר עייפה מהמאבק בתזונה.</p>
          </Reveal>
          <Reveal>
            <p>אם הראש שלך תפוס באוכל והחלטות הרבה יותר ממה שהיית רוצה להודות...</p>
          </Reveal>
          <Reveal>
            <p>
              ואם עמוק בפנים את יודעת שמה שחסר לך זה לא עוד ידע — אלא שיטה בוגרת,
              יציבה ואישית, כזו שעובדת גם כשעמוס, גם כשאת עייפה ו&quot;שלא בא לך&quot; —
              זה המקום שלך.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-8" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            ואם נמאס לך להרגיש שכל שינוי מחזיק שבוע-שבועיים ומתפרק לך בחיים
            האמיתיים, ואת לא מחפשת להיות &quot;מושלמת&quot; אלא רגועה — וחשוב לך לבנות
            אורח חיים עם תזונה שמתאימה לאופי שלך, ולא זירת מאבק —
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* PERSONAL OFFER + FIRST CTA */}
      <section id="offer" className="relative px-6 py-16 max-w-3xl mx-auto text-center">
        <AmbientGlow top="30%" left="50%" size={600} opacity={0.06} />
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            בתהליך הליווי האישי שלי אני לוקחת אותך <b style={{ color: "var(--text-primary)" }}>1:1</b> לבניית
            שגרת תזונה אישית, יציבה, מותאמת וארוכת טווח — בלי דיאטות, בלי כוח רצון,
            ובלי להתחיל מחדש כל כמה ימים.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-6 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.15rem", lineHeight: 1.9 }}>
            זה לא תהליך שמעמיס ולא מסע של הוכחות. זאת התחנה הסופית למי שרוצה שהאוכל
            יפסיק לנהל לה את החיים — ויתחיל סוף-סוף לשרת אותם.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-8 mx-auto" style={{ maxWidth: "460px" }}>
            <LeadForm />
          </div>
        </Reveal>
      </section>

      <AccentDivider />

      {/* SOCIAL PROOF PLACEHOLDER */}
      <section className="relative px-6 py-14 max-w-4xl mx-auto text-center">
        <Reveal>
          <SectionHook>מה נשים אחרות אומרות</SectionHook>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <Reveal key={n}>
              <div
                className="relative rounded-2xl overflow-hidden mx-auto"
                style={{
                  border: "1px solid var(--border-accent)",
                  boxShadow: "0 10px 30px rgba(64,51,44,0.1)",
                  maxWidth: "360px",
                }}
              >
                <Image
                  src={`/images/testimonials/testimonial-${n}.png`}
                  alt={`המלצה אמיתית מלקוחה ${n}`}
                  width={720}
                  height={480}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <AccentDivider />

      {/* WHY / AUTHORITY STORY */}
      <section className="relative px-6 py-16 max-w-3xl mx-auto text-center">
        <Reveal>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(1.6rem, 1.3rem + 1.2vw, 2.25rem)", color: "var(--text-primary)" }}
          >
            כאן מסתיים המאבק: <span style={{ color: "var(--accent-dark)" }}>תזונה שלא צריכה משמעת</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            דמייני מציאות שבה האוכל כבר לא תופס מקום בראש. אין מחשבות חוזרות ואין
            התלבטות אינסופית. יש שגרה שעובדת, גוף רגוע ותחושה ברורה שזה סוף הסיפור.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-8 font-bold" style={{ color: "var(--text-primary)" }}>
            עכשיו בואי נדבר אמת:
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-4" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            זה לא קרה עד היום כי &quot;לא רצית מספיק&quot;, ולא כי חסרה לך משמעת, ידע או
            כוח רצון. וזה גם לא יקרה דרך עוד דיאטה, עוד תפריט או עוד גורו אינסטגרם
            שמבטיח שינוי — שנעלם כשהוא פוגש את החיים.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            בגלל שנמאס לי לראות נשים נלחמות בגוף שלהן... ונמאס לי מתעשייה שלמה
            שמוכרת כוח רצון, איסורים ותקוות — ומשאירה אחריה עייפות, אשמה והתחלות
            כושלות — החלטתי להרים את הכפפה ולבנות תהליך פרימיום אישי אחר לגמרי.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            לא דיאטה שמחזיקה שבוע ולא &quot;שיטה&quot; שמתרסקת ביומיום. ובטח שבלי הבטחות
            לנראות בלי לשאול איך החיים שלך נראים אחר כך.
          </p>
        </Reveal>

        <Reveal>
          <GlassCard accent className="mt-8" style={{ maxWidth: "640px", margin: "0 auto" }}>
            <p style={{ color: "var(--text-primary)" }}>
              ככה נוצר תהליך עומק בתזונה — מבוסס גוף, הרגלים ותודעה. לא דיאטה ולא
              תוכנית &quot;21 יום&quot;, אלא שיטה יציבה שמנתקת את התלות מאוכל מהשורש —
              ומחזיקה כל החיים.
            </p>
          </GlassCard>
        </Reveal>
      </section>

      <AccentDivider />

      {/* FOUNDATIONS */}
      <section className="relative px-6 py-14 max-w-3xl mx-auto text-center">
        <Reveal>
          <SectionHook>אז מה את מקבלת בפנים?</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            את מקבלת את היסודות שכל אישה חייבת לשלוט בהם כדי שהתזונה תפסיק להיות
            מאבק:
          </p>
        </Reveal>

        <Reveal>
          <GlassCard className="mt-8 text-right" style={{ maxWidth: "560px", margin: "0 auto" }}>
            <ul className="flex flex-col gap-3" style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>
              {[
                "ויסות גוף רעב",
                "הרגלים שעובדים גם בעומס",
                "סדר תזונתי בלי אובססיה",
                "שקט מנטלי סביב אוכל",
                "יישום אישי בעולם האמיתי (ולא במעבדה)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: "var(--accent-dark)" }}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal>
          <p className="mt-8 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.15rem" }}>
            זאת לא תיאוריה. זאת מיומנות.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* OUTCOMES AFTER 10 WEEKS */}
      <section className="relative px-6 py-14 max-w-3xl mx-auto text-center">
        <Reveal>
          <SectionHook>אחרי 10 שבועות את הולכת לדעת בדיוק:</SectionHook>
        </Reveal>

        <Reveal>
          <GlassCard accent className="mt-6 text-right" style={{ maxWidth: "620px", margin: "0 auto" }}>
            <ul className="flex flex-col gap-3" style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>
              {[
                "איך לאכול בלי לחשוב על זה כל היום",
                "איך לבנות שגרה שמחזיקה גם כשאת עייפה",
                "איך לזהות רעב אמיתי לעומת רעב רגשי",
                "איך לעצור לופים של אכילה, אשמה ופיצוי",
                "ואיך להחזיר שליטה רגועה — בלי מלחמה",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: "var(--accent-dark)" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal>
          <p className="mt-8" style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            וכל זה — בלי תפריטים נוקשים ובלי &quot;מה מותר ומה אסור&quot;.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* MECHANISM */}
      <section className="relative px-6 py-16 max-w-3xl mx-auto text-center">
        <Reveal>
          <SectionHook>הצצה למנגנון התהליך האישי</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            ב-10 שבועות אנחנו מתקינות לך מערכת הפעלה חדשה. מפרקות את ההתניות
            הישנות ובונות את מערכת היחסים שלך עם הגוף — ככה שהתוצאה היא לא רק
            ירידה במשקל, אלא חופש מנטלי אמיתי.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 text-right">
          {[
            {
              title: "מכבות את הרעש בראש",
              body: "מפרידות בין 'מי שאת' לבין 'הקול הרעב' שמנהל אותך, כך שהדיאלוג הפנימי המתיש נפסק ואת חוזרת לשמוע את עצמך.",
              result: "0% מאבק, 100% שקט",
            },
            {
              title: "נטרול הטריגרים הרגשיים",
              body: "נמפה את 'הכפתורים' שמפעילים אצלך אכילה (עייפות, עצבים, בדידות) ומנתקות את החיווט האוטומטי ששולח אותך למקרר, ככה שהאכילה מפסיקה להיות פיצוי.",
              result: "שליטה מלאה ללא כוח רצון",
            },
            {
              title: "להעיר את המנכ\"לית שבפנים",
              body: "נעביר את המושכות מהדחפים והרגשות, לשכל ולשיקול הדעת, ונבנה אצלך סמכות פנימית שיודעת לקבל החלטות גם מול הפיתוי הכי גדול.",
              result: "ביטחון עצמי בלתי שביר",
            },
            {
              title: "לצרוב זהות חדשה של אישה חופשייה",
              body: "נעשה מעבר מנטלי מאישה ש'נלחמת במשקל' לאישה ש'המשקל לא מעסיק אותה', דרך שינויי דפוסי חשיבה עמוקים שמשפיעים על איך שאת רואה את עצמך בעולם.",
              result: "שינוי שלא דורש תחזוקה מתישה",
            },
            {
              title: "בניית שגרת חיים חסינה",
              body: "תטמיעי הרגלים גמישים שעובדים בשבילך גם בימים הכי לחוצים, בחופשות ובמשברים, כדי שלא תצטרכי להיות 'מושלמת' בשביל לראות תוצאות.",
              result: "יציבות בכל סיטואציה",
            },
          ].map((step, i) => (
            <Reveal key={step.title}>
              <GlassCard>
                <p className="font-extrabold mb-2" style={{ color: "var(--accent-dark)" }}>
                  {i + 1}. {step.title}
                </p>
                <p style={{ color: "var(--text-secondary)" }}>{step.body}</p>
                <p className="mt-3 font-bold" style={{ color: "var(--text-primary)" }}>
                  ← {step.result}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <AccentDivider />

      {/* TRUTH QUOTE */}
      <section className="relative px-6 py-14 max-w-3xl mx-auto text-center">
        <Reveal>
          <SectionHook>תביני:</SectionHook>
        </Reveal>
        <Reveal>
          <GlassCard accent style={{ maxWidth: "640px", margin: "0 auto" }}>
            <p style={{ color: "var(--text-primary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
              אי אפשר לפתור בעיה רגשית עם פתרון טכני כמו ספירת קלוריות.
              <br />
              זה כמו לנסות לכבות שריפה עם מחשבון.
            </p>
            <AccentLine />
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.9 }}>
              המנגנון הזה הוא הפעם הראשונה שבה את מפסיקה לטפל בסימפטום (המשקל)
              ומתחילה לטפל בדפוס המנטלי.
              <br />
              כי ברגע שהראש משתחרר... הגוף מפסיק לאגור את מה שהוא לא צריך.
            </p>
          </GlassCard>
        </Reveal>
      </section>

      <AccentDivider />

      {/* FINAL CTA */}
      <section id="register-final" className="relative px-6 py-16 max-w-3xl mx-auto text-center">
        <AmbientGlow top="40%" left="50%" size={650} opacity={0.07} />
        <Reveal>
          <div className="mx-auto" style={{ maxWidth: "460px" }}>
            <LeadForm />
          </div>
        </Reveal>
      </section>

      <footer className="px-6 py-10 text-center">
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} שנהב בנימין — ליווי תזונתי מנטלי אישי
        </p>
      </footer>
    </main>
  );
}
