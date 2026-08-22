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
  MarkerHighlight,
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
      <section className="relative px-6 pt-6 pb-16 max-w-3xl mx-auto text-center">
        <AmbientGlow top="10%" left="50%" size={700} opacity={0.08} />

        <Reveal>
          <h1
            className="font-extrabold mx-auto"
            style={{
              fontSize: "clamp(1.7rem, 1.3rem + 1.6vw, 2.6rem)",
              maxWidth: "720px",
              lineHeight: 1.4,
              color: "var(--text-primary)",
            }}
          >
            את יודעת מה צריך לעשות.
            <br />
            <span style={{ color: "var(--accent-dark)" }}>
              אז למה את שוב עושה את מה שהבטחת לעצמך שלא תעשי?
            </span>
          </h1>
        </Reveal>

        <Reveal>
          <div className="mt-10 mx-auto relative" style={{ width: "min(300px, 72vw)" }}>
            <div
              className="relative rounded-[28px] overflow-hidden"
              style={{
                border: "1.5px solid var(--border-accent)",
                boxShadow: "0 0 50px rgba(185,138,120,0.18), 0 20px 60px rgba(64,51,44,0.15)",
                aspectRatio: "4 / 5",
              }}
            >
              <Image
                src="/images/coach.jpg"
                alt="שנהב בנימין - מאמנת תזונה מנטלית"
                fill
                sizes="300px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10">
            <CTAButton text="אני רוצה לשמוע על התהליך" />
          </div>
        </Reveal>
      </section>

      <AccentDivider />

      {/* OPENING - the familiar day */}
      <section className="relative px-6 py-12 max-w-xl mx-auto text-center">
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 2 }}>
            ניסית דיאטות.
            <br />
            צומות.
            <br />
            אולי גם זריקות.
            <br />
            החלטת שתסיימי לאכול בחמש.
            <br />
            אמרת לעצמך שהפעם את באמת תצליחי.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.15rem" }}>
            ובבוקר - את מתחילה מחדש.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 2 }}>
            קפה.
            <br />
            שליטה.
            <br />
            אוכל שהכנת מראש.
            <br />
            החלטה להיות &quot;טובה&quot;.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.15rem" }}>
            ואז מגיעה הביתה.
            <br />
            ופתאום מתחיל המאבק.
          </p>
        </Reveal>

        <Reveal>
          <GlassCard style={{ background: "var(--bg-secondary)" }} className="mt-6">
            <p style={{ color: "var(--accent-dark)", fontSize: "1.08rem", lineHeight: 2, fontStyle: "italic" }}>
              &quot;רק משהו קטן.&quot;
              <br />
              &quot;היום היה קשה.&quot;
              <br />
              &quot;ממחר אני חוזרת לשמור.&quot;
            </p>
            <p className="mt-5" style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.9 }}>
              ואיכשהו, משהו קטן הופך לעוד משהו. ואז למתוק. ואז למלוח. ואז מגיע הרגע
              הזה שאת אומרת:
            </p>
            <p className="mt-3 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}>
              <MarkerHighlight>&quot;אם כבר הרסתי, אז עד הסוף.&quot;</MarkerHighlight>
            </p>
          </GlassCard>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            ולמחרת?
            <br />
            הלקאה. כעס. אכזבה. ושוב הבטחה:{" "}
            <b style={{ color: "var(--text-primary)" }}>&quot;ממחר אני מתחילה.&quot;</b>
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            אבל כמה פעמים אפשר להתחיל מחדש?
            <br />
            כמה פעמים אפשר להבטיח לעצמך ולא לעמוד במילה שלך?
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}>
            והכי כואב - זה כבר מזמן לא רק האוכל.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 2 }}>
            זה הרעש בראש.
            <br />
            המחשבות על מה אכלת ומה תאכלי.
            <br />
            הניסיון להתאפק.
            <br />
            הפחד להישאר לבד ליד המקרר.
            <br />
            הבושה.
            <br />
            והתחושה שאולי משהו פשוט לא בסדר אצלך.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* REFRAME */}
      <section className="relative px-6 py-14 max-w-xl mx-auto text-center">
        <Reveal>
          <SectionHook>אבל מה אם מעולם לא הייתה לך בעיה של כוח רצון?</SectionHook>
        </Reveal>

        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            אני רוצה להגיד לך משהו שאולי אף אחד לא אמר לך עד היום:
          </p>
        </Reveal>

        <Reveal>
          <GlassCard accent className="mt-6" style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p className="font-bold" style={{ color: "var(--text-primary)", fontSize: "1.2rem", lineHeight: 1.9 }}>
              את לא חלשה.
              <br />
              את לא חסרת אופי.
              <br />
              ואת לא מקולקלת.
            </p>
          </GlassCard>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            הכישלונות החוזרים שלך לא אומרים שאת לא מסוגלת להשתנות.
            <br />
            יכול להיות שפשוט ניסית לפתור את הבעיה הלא נכונה.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            כי מה שאת רואה הוא האוכל.
            <br />
            אבל האוכל הוא רק התוצאה.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            מתחתיו יש מנגנון שלם - פיזיולוגי, רגשי והתנהגותי - שפועל לפעמים באופן
            אוטומטי.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            וכשאת מנסה לנצח אותו באמצעות עוד איסור, עוד דיאטה ועוד כוח רצון,
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-3 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.2rem" }}>
            <MarkerHighlight>המלחמה רק מתחילה מחדש.</MarkerHighlight>
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* TURNING POINT */}
      <section className="relative px-6 py-14 max-w-xl mx-auto text-center">
        <Reveal>
          <SectionHook>אז אולי הגיע הזמן להפסיק להילחם בעצמך.</SectionHook>
        </Reveal>

        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            במקום לשאול:
          </p>
          <p className="mt-2 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}>
            &quot;איך אני מצליחה להתאפק?&quot;
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            אנחנו מתחילות לשאול:
          </p>
          <p className="mt-2 font-bold" style={{ color: "var(--accent-dark)", fontSize: "1.15rem" }}>
            &quot;מה באמת קורה לי ברגע הזה?&quot;
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 2 }}>
            מה מפעיל את הדחף?
            <br />
            מה הגוף שלי באמת צריך?
            <br />
            מה אני מרגישה?
            <br />
            איזה הרגל כבר הפך לאוטומטי?
            <br />
            ואיך אני יכולה להתחיל ליצור תגובה אחרת?
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}>
            זה בדיוק מה שאנחנו עושות בתהליך שלי.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* THREE LAYERS METHOD */}
      <section className="relative px-6 py-16 max-w-2xl mx-auto text-center">
        <Reveal>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(1.4rem, 1.1rem + 1vw, 1.9rem)", color: "var(--text-primary)", lineHeight: 1.6 }}
          >
            לא עוד דיאטה.
            <br />
            לא עוד תפריט.
            <br />
            לא עוד רשימת איסורים.
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            אנחנו עובדות על שלושה רבדים במקביל:
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3 text-right">
          <Reveal>
            <GlassCard>
              <p className="font-extrabold mb-2" style={{ color: "var(--accent-dark)" }}>
                הגוף
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                לומדות לחזור לאוכל אמיתי, מזין ומאוזן, מכל אבות המזון - גם פחמימות -
                בלי לחיות בתחושת מחסור ובלי להסתובב כל היום סביב קלוריות וכמויות.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal>
            <GlassCard>
              <p className="font-extrabold mb-2" style={{ color: "var(--accent-dark)" }}>
                המנגנון
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                מבינות מה עומד מאחורי הדחפים, ההשתוקקות והאכילה האוטומטית. לא כדי
                להילחם בהם - אלא כדי להתחיל לשנות את המנגנון שמפעיל אותם.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal>
            <GlassCard>
              <p className="font-extrabold mb-2" style={{ color: "var(--accent-dark)" }}>
                את
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                עובדות על ההלקאה, על הדפוסים, על הצרכים שלא מקבלים מענה ועל האופן
                שבו את מדברת ומתנהגת מול עצמך.
              </p>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-10" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            כי השינוי שאנחנו מחפשות הוא לא רק בצלחת.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-3 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.15rem" }}>
            הוא מתחיל במחשבה, הופך לפעולה - ובסופו של דבר יוצר מציאות חדשה.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* WHAT HAPPENS WHEN THE FIGHT STOPS */}
      <section className="relative px-6 py-14 max-w-xl mx-auto text-center">
        <Reveal>
          <SectionHook>ומה קורה כשמפסיקים להילחם?</SectionHook>
        </Reveal>

        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 2 }}>
            האוכל מתחיל לתפוס פחות מקום בראש.
            <br />
            הדחפים נחלשים.
            <br />
            את מתחילה לזהות את הרגעים שבהם את פועלת על אוטומט.
            <br />
            את מתחילה לבחור אחרת.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            לא כי הכרחת את עצמך.
            <br />
            אלא כי משהו בתוכך השתנה.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            ובהדרגה נבנה הדבר שאולי הכי חסר לך היום:
          </p>
          <p className="mt-2 font-bold" style={{ color: "var(--accent-dark)", fontSize: "1.25rem" }}>
            האמון בעצמך.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            הידיעה שאת יכולה לסמוך על עצמך גם כשאף אחד לא רואה.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* CLOSING */}
      <section className="relative px-6 py-14 max-w-xl mx-auto text-center">
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            זו לא עוד תוכנית לירידה במשקל.
            <br />
            זו דרך ללמוד מחדש איך להיות האישה שמנהלת את החיים שלה - ולא האוכל שמנהל
            אותה.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 2 }}>
            דרך של הבנה.
            <br />
            תרגול.
            <br />
            שינוי.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 2 }}>
            בלי להתחיל מחדש בכל יום שני.
            <br />
            בלי להיות &quot;ילדה טובה&quot;.
            <br />
            בלי לחיות במלחמה עם עצמך.
          </p>
        </Reveal>

        <Reveal>
          <GlassCard accent className="mt-8" style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p className="font-bold" style={{ color: "var(--text-primary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
              אם את מרגישה שהגיע הזמן להפסיק להתחיל מחדש - אני מזמינה אותך להכיר את
              הדרך שלי.
            </p>
          </GlassCard>
        </Reveal>

        <Reveal>
          <div className="mt-8">
            <CTAButton text="אני רוצה לשמוע על התהליך" />
          </div>
        </Reveal>
      </section>

      <AccentDivider />

      {/* AUTHORITY */}
      <section className="relative px-6 py-16 max-w-2xl mx-auto text-center">
        <Reveal>
          <SectionHook>למה זה כל כך חשוב לי באופן אישי</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            אני שנהב בנימין, מומחית לבריאות טבעית וטיפול גוף-נפש באכילה רגשית. הידע
            המקצועי שלי מגיע מלימודי רפואה תזונתית, בריאות טבעית, טיפול באכילה רגשית
            ואימון מנטלי.
          </p>
        </Reveal>
        <Reveal>
          <GlassCard className="mt-6" style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.9 }}>
              אבל לפני שהייתי מאמנת - הייתי שם בעצמי. שנים הייתי במלחמה. רצה בין
              דיאטות, נשברת, מתחילה מחדש. לא נולדתי עם כוח רצון על-אנושי, ובמשך זמן
              רב חשבתי שהבעיה היא חולשה שלי. במסע של שנים הבנתי שהגישה המקובלת של
              דיאטות פשוט לא עובדת - וחיפשתי דרך אחרת. דרך ששמה במרכז שקט, לא מאבק.
            </p>
          </GlassCard>
        </Reveal>
        <Reveal>
          <AccentLine />
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            כי הגוף שלך הוא הכלי שלך למימוש, לביטוי, להשפעה על העולם שלך. הגוף שלך
            יקר - כי את יקרה. ולדאוג לעצמך זו לא אנוכיות: כולם סביבך ייהנו מהגרסה
            החדשה שלך.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* SOCIAL PROOF */}
      <section className="relative px-6 py-14 max-w-3xl mx-auto text-center">
        <Reveal>
          <SectionHook>מה נשים אחרות אומרות</SectionHook>
        </Reveal>
        <div className="mt-8 columns-1 sm:columns-2 gap-5" style={{ columnGap: "1.25rem" }}>
          {[
            { src: "/images/testimonials/testimonial-1.png", w: 1075, h: 472 },
            { src: "/images/testimonials/testimonial-2.png", w: 1096, h: 401 },
            { src: "/images/testimonials/testimonial-3.png", w: 1107, h: 529 },
            { src: "/images/testimonials/testimonial-4.png", w: 995, h: 787 },
            { src: "/images/testimonials/testimonial-5.png", w: 1009, h: 323 },
          ].map((img) => (
            <Reveal key={img.src} className="mb-5 break-inside-avoid">
              <div
                className="overflow-hidden rounded-2xl"
                style={{
                  border: "1.5px solid var(--border-subtle)",
                  boxShadow: "0 4px 24px rgba(64,51,44,0.08)",
                }}
              >
                <Image
                  src={img.src}
                  alt="הודעת תודה מלקוחה"
                  width={img.w}
                  height={img.h}
                  sizes="(max-width: 640px) 100vw, 340px"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-sm" style={{ color: "var(--text-muted)" }}>
            {/* TODO: add real video testimonials once שנהב sends them */}
            בקרוב גם עדויות וידאו.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* PROGRAM */}
      <section className="relative px-6 py-16 max-w-2xl mx-auto text-center">
        <Reveal>
          <SectionHook>זה הליווי שלי</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            תהליך אישי שמשלב בין הגוף לבין הנפש:
          </p>
        </Reveal>

        <Reveal>
          <GlassCard accent className="mt-6 text-right" style={{ maxWidth: "560px", margin: "0 auto" }}>
            <ul className="flex flex-col gap-3" style={{ color: "var(--text-primary)", fontSize: "1.05rem" }}>
              {[
                "הבנה פשוטה ומעשית של הגוף ומנגנוני רעב ושובע",
                "מעבר לאכילה טבעית ומזינה בלי תפריט נוקשה",
                "הפחתת המזונות שמפעילים אצלך את המנגנון הממכר",
                "זיהוי ופירוק של אכילה אוטומטית",
                "עבודה על אכילה רגשית והטריגרים שמפעילים אותה",
                "בניית מסוגלות ועצמאות מול אוכל",
                "שינוי תודעתי ובניית זהות חדשה מול אוכל",
                "וליווי אישי לאורך הדרך",
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
          <p className="mt-8 font-bold" style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}>
            זה לא עוד ניסיון &quot;להצליח בדיאטה&quot;. זה ללמוד איך להפסיק להיות
            במלחמה עם אוכל - ולבנות לעצמך דרך שאת יכולה לחיות איתה.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* FINAL CTA */}
      <section id="register-final" className="relative px-6 py-16 max-w-2xl mx-auto text-center">
        <AmbientGlow top="40%" left="50%" size={650} opacity={0.09} />
        <Reveal>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.2vw, 2.1rem)", color: "var(--text-primary)" }}
          >
            אם את מרגישה שהגיע הזמן להפסיק להתחיל מחדש
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-4" style={{ color: "var(--text-secondary)" }}>
            אני מזמינה אותך לדבר איתי ולשמוע איך הליווי עובד.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-8 mx-auto" style={{ maxWidth: "460px" }}>
            <LeadForm />
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
            אני מלווה את כולן בעצמי, יד ביד - ולוקחת רק{" "}
            <b style={{ color: "var(--accent-dark)" }}>5 נשים בחודש</b>.
          </p>
        </Reveal>
      </section>

      <footer className="px-6 py-10 text-center">
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} שנהב בנימין - ליווי תזונתי מנטלי אישי
        </p>
      </footer>
    </main>
  );
}
