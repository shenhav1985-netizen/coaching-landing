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
  LoopDiagram,
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
      <section className="relative px-6 pt-6 pb-16 max-w-4xl mx-auto text-center">
        <AmbientGlow top="10%" left="50%" size={700} opacity={0.08} />

        <Reveal>
          <p className="font-bold mb-4" style={{ color: "var(--accent-dark)" }}>
            לפני שאת נרשמת לעוד תוכנית אחת - תעני בכנות
          </p>
        </Reveal>

        <Reveal>
          <h1
            className="font-extrabold mx-auto"
            style={{
              fontSize: "clamp(2rem, 1.5rem + 2.2vw, 3.4rem)",
              maxWidth: "780px",
              lineHeight: 1.35,
              color: "var(--text-primary)",
            }}
          >
            נופלת. מלקה את עצמך.
            <br />
            אוספת את עצמך מהרצפה.
            <br />
            ומתחילה מחדש.
          </h1>
        </Reveal>

        <Reveal>
          <p
            className="mt-6 mx-auto font-bold"
            style={{
              fontSize: "clamp(1.1rem, 1rem + 0.5vw, 1.4rem)",
              maxWidth: "620px",
              color: "var(--accent-dark)",
            }}
          >
            אולי הבעיה היא לא שאת לא מצליחה בדיאטה.
            <br />
            אולי פשוט אף פעם לא טיפלת במה שבאמת גורם לך לאכול.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 mx-auto relative" style={{ width: "min(320px, 75vw)" }}>
            <div
              className="relative rounded-[28px] overflow-hidden"
              style={{
                border: "1.5px solid var(--border-accent)",
                boxShadow: "0 0 50px rgba(185,138,120,0.18), 0 20px 60px rgba(64,51,44,0.15)",
                aspectRatio: "4 / 5",
              }}
            >
              {/* TODO: replace with the real photo at public/images/coach.jpg */}
              <Image
                src="/images/coach.jpg"
                alt="שנהב בנימין - מאמנת תזונה מנטלית"
                fill
                sizes="320px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10">
            <CTAButton text="אני רוצה לשמוע על התוכנית" />
          </div>
        </Reveal>
      </section>

      <AccentDivider />

      {/* EMPATHY + HISTORY */}
      <section className="relative px-6 py-12 max-w-2xl mx-auto text-center">
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            אם ניסית כבר הכל - דיאטות, צומות, ספירת קלוריות, להפסיק לאכול בחמש, להוריד
            פחמימות, ואפילו זריקות... וכל פעם התחלת עם המון מוטיבציה, אמרת לעצמך{" "}
            <MarkerHighlight>&quot;הפעם זה יהיה אחרת&quot;</MarkerHighlight> - ושוב מצאת את
            עצמך חוזרת לאותו מקום, אני יודעת כמה זה מתסכל.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            כי זה כבר לא רק המשקל. זה המאבק היומיומי. הארוחות שאת מתכננת מראש. הניסיון
            להיות &quot;ילדה טובה&quot;. ההבטחה שהיום תשמרי. הדיבור הפנימי שלא מפסיק.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* DAY IN LIFE */}
      <section className="relative px-6 py-14 max-w-2xl mx-auto">
        <Reveal>
          <SectionHook>ואז מגיע הערב</SectionHook>
        </Reveal>
        <Reveal>
          <GlassCard style={{ background: "var(--bg-secondary)" }}>
            <p style={{ color: "var(--text-primary)", fontSize: "1.08rem", lineHeight: 2 }}>
              את חוזרת הביתה אחרי יום שלם שבו הצלחת להחזיק את עצמך. את פותחת את הדלת
              ומזכירה לעצמך: <i style={{ color: "var(--accent-dark)" }}>&quot;אני לא הולכת למקרר.&quot;</i>{" "}
              אבל משהו בפנים כבר מתחיל למשוך.{" "}
              <i style={{ color: "var(--accent-dark)" }}>&quot;רק משהו קטן.&quot;</i> את
              מתחילה מקצת. אחר כך משהו מלוח. ואז מתוק. ואז מגיע הרגע המוכר:{" "}
              <i style={{ color: "var(--accent-dark)" }}>
                &quot;טוב, כבר הרסתי. ממחר אני מתחילה מחדש.&quot;
              </i>
            </p>
            <p className="mt-5" style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.9 }}>
              ואז מגיעות ההלקאות. &quot;איך שוב עשיתי את זה?&quot; &quot;אתמול נשבעתי
              לעצמי.&quot; &quot;למה אני לא מצליחה לעצור?&quot; &quot;כמה פעמים עוד אני
              יכולה לעשות את אותו הדבר?&quot;
            </p>
            <p className="mt-5 font-bold" style={{ color: "var(--text-primary)" }}>
              והדבר שהכי נשבר בדרך הוא לא רק הדיאטה. האמון שלך בעצמך.
            </p>
          </GlassCard>
        </Reveal>
      </section>

      <AccentDivider />

      {/* REFRAME */}
      <section className="relative px-6 py-14 max-w-2xl mx-auto text-center">
        <Reveal>
          <SectionHook>אז קודם כל, אני רוצה שתדעי משהו</SectionHook>
        </Reveal>
        <Reveal>
          <GlassCard accent style={{ maxWidth: "620px", margin: "0 auto" }}>
            <p className="font-bold" style={{ color: "var(--text-primary)", fontSize: "1.15rem", lineHeight: 1.9 }}>
              <MarkerHighlight>הכישלון שלך הוא לא את.</MarkerHighlight> את לא חלשה. זה לא
              שאין לך אופי. וזה לא שאין לך כוח רצון. יש כאן מנגנון. ומנגנון חזק מאוד.
            </p>
          </GlassCard>
        </Reveal>
        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            יש אוכל שיכול להפעיל אצלנו מנגנון ממכר. אנחנו חיות היום בסביבה שבה מזון
            מתועש, מתוק, מלוח וטעים מאוד נמצא בכל מקום. המזון הזה לא רק נותן לנו
            אנרגיה - הוא יכול להפעיל במוח מערכות של תגמול והשתוקקות, וככל שאנחנו
            חוזרות אליו שוב ושוב, החשק והדחף יכולים להפוך לחזקים מאוד.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-6" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            את יכולה לדעת בראש שאת לא רוצה לאכול. ובכל זאת להרגיש:{" "}
            <b style={{ color: "var(--text-primary)" }}>&quot;אני חייבת.&quot;</b> וזה
            בדיוק הרגע שבו את מתחילה לחשוב שמשהו לא בסדר איתך. אבל אם יש מנגנון
            פיזיולוגי שמפעיל רעב, תגמול והשתוקקות - זה כבר לא סיפור של &quot;פשוט
            תתאפקי&quot;.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* EMOTIONAL MECHANISM + LOOP */}
      <section className="relative px-6 py-14 max-w-2xl mx-auto text-center">
        <Reveal>
          <SectionHook>אבל זה רק חצי מהסיפור</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            כי גם אם נוציא מהמשוואה את המזון שמפעיל את הגוף... עדיין יכול להגיע ערב
            קשה. שעמום. עומס. עצבים. בדידות. ריקנות. צורך בפיצוי. או פשוט הרגל שנבנה
            במשך שנים. ואז את לא בהכרח רעבה. את פשוט צריכה משהו. והאוכל הפך להיות
            הדרך המהירה ביותר שלך לקבל אותו. וזה המקום שבו נוצר המנגנון הרגשי.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10">
            <LoopDiagram
              steps={["טריגר", "אכילה", "הקלה רגעית", "הלקאה", "\"ממחר מתחילים מחדש\""]}
            />
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-10" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            עד שהאוכל תופס לך מקום בראש כמעט כל היום. וזה כבר משפיע על הרבה יותר
            מהמשקל - על הביטחון שלך, על הזוגיות, על העבודה, על הילדים, על איך שאת
            מרגישה עם עצמך. כי מבחוץ הכול יכול להיראות בסדר. אבל בפנים יש רעש. ורק את
            יודעת כמה הוא מעייף.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* WHY DIETS FAIL */}
      <section className="relative px-6 py-14 max-w-2xl mx-auto text-center">
        <Reveal>
          <SectionHook>אז למה כל הדיאטות לא פתרו את זה?</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            כי רוב הדיאטות לימדו אותך איך לשלוט באוכל - לא איך להבין את המנגנון שגורם
            לך לאכול. הן נתנו לך תפריט. כמויות. שעות. &quot;אסור&quot;.
            &quot;מותר&quot;. ואת נדרשת להשתמש שוב ושוב בכוח הרצון כדי להחזיק מעמד.
            אבל אם הגוף מרגיש מחסור, אם המוח עסוק באוכל, אם יש השתוקקות חזקה ואם
            במקביל יש גם מנגנון רגשי - כוח רצון לבד לא מספיק. ולכן את מתחילה.
            מצליחה. נשברת. ומתחילה שוב.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* METHOD */}
      <section className="relative px-6 py-16 max-w-2xl mx-auto text-center">
        <Reveal>
          <SectionHook>אז מה אנחנו עושות אחרת?</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            אנחנו לא מתחילות בעוד דיאטה. אני לא נותנת לך תפריט שתצטרכי להיצמד אליו כל
            החיים. אין אצלי רשימת כמויות שתצטרכי לספור. ואני לא רוצה שתהיי תלויה בי
            כדי לדעת מה לאכול - אני רוצה שתכירי את הגוף שלך ותבני לעצמך יכולת להיות
            עצמאית מול אוכל.
          </p>
        </Reveal>

        <Reveal>
          <GlassCard accent className="mt-8" style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
              <MarkerHighlight>אין בשיטה הזו בכלל תפריטים. ואין כמויות. שום ספירה.</MarkerHighlight>
            </p>
          </GlassCard>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 text-right">
          <Reveal>
            <GlassCard>
              <p className="font-extrabold mb-2" style={{ color: "var(--accent-dark)" }}>
                מצד אחד - הגוף
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                את לומדת מה הגוף שלך באמת צריך. איך עובד רעב ושובע. איך המזון משפיע
                עלייך. איך לבנות אכילה שמספקת את הגוף - מגוונת, כולל פחמימות וכל
                אבות המזון. וכשמורידים בהדרגה את מה שמפעיל את ההשתוקקות, הרעש הפיזי
                סביב אוכל יכול להיחלש.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal>
            <GlassCard>
              <p className="font-extrabold mb-2" style={{ color: "var(--accent-dark)" }}>
                ומצד שני - הנפש
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                אנחנו מתחילות לזהות מה קורה לך ברגעים שבהם את פונה לאוכל. מה מפעיל
                אותך. מה את באמת צריכה. איך לעצור את האוטומט. איך להתמודד עם הדחף בלי
                להרגיש שאת במלחמה עם עצמך. ואיך, לאט לאט, לבנות מסוגלות.
              </p>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-10" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            כי אני לא רוצה שתלמדי להתאפק. אני רוצה שתגיעי למצב שאת כבר לא צריכה
            להתאפק כל הזמן. שתוכלי להסתכל על אוכל בלי להרגיש שהוא מנהל אותך. שתדעי
            לזהות רעב, לזהות השתוקקות, לזהות אכילה רגשית. ושתוכלי לבחור. באמת לבחור.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* RESULTS */}
      <section className="relative px-6 py-14 max-w-2xl mx-auto text-center">
        <Reveal>
          <SectionHook>ומה קורה כשהמנגנון מתחיל להשתנות?</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            האוכל מתחיל לתפוס פחות מקום. ההשתוקקות יכולה להיחלש. הרעב הופך ברור
            יותר. האכילה נהיית רגועה יותר. הביטחון שלך בעצמך חוזר. ואצל נשים שמתאימות
            לתהליך, גם הגוף מתחיל להשתנות בהתאם: הנפיחות יכולה לרדת, האנרגיה יכולה
            להשתפר, השינה יכולה להשתפר - והמשקל יכול להתחיל לרדת כחלק מהשינוי כולו.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-6 font-bold" style={{ color: "var(--text-primary)" }}>
            אבל מבחינתי זו לא המטרה היחידה. כי אם ירדת במשקל אבל את עדיין מפחדת
            מאוכל - לא באמת השתחררת.
          </p>
        </Reveal>
      </section>

      <AccentDivider />

      {/* DEEPER GOAL */}
      <section className="relative px-6 py-14 max-w-2xl mx-auto text-center">
        <Reveal>
          <SectionHook>המטרה שלי היא שתבני מנגנון פנימי משלך</SectionHook>
        </Reveal>
        <Reveal>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.9 }}>
            שתדעי מה נכון לך. שתביני את הגוף שלך. שתדעי להתמודד עם טריגרים. שתפסיקי
            להעניש את עצמך על כל סטייה. שתפסיקי להתחיל מחדש בכל יום ראשון. ושתתחילי
            לסמוך על עצמך - לא כי סוף-סוף למדת להיות &quot;חזקה&quot;, אלא כי כבר לא
            תצטרכי להילחם בעצמך כל הזמן.
          </p>
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

      {/* SOCIAL PROOF PLACEHOLDER */}
      <section className="relative px-6 py-14 max-w-3xl mx-auto text-center">
        <Reveal>
          <SectionHook>מה נשים אחרות אומרות</SectionHook>
        </Reveal>
        <Reveal>
          <GlassCard
            className="mt-6"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              border: "1.5px dashed rgba(169,136,122,0.4)",
            }}
          >
            {/* TODO: replace with real video testimonials + screenshots once שנהב sends them */}
            <p style={{ color: "var(--text-muted)" }}>
              מקום שמור לעדויות וידאו וצילומי מסך של תוצאות אמיתיות. נשלב כאן ברגע
              שיישלח החומר.
            </p>
          </GlassCard>
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
