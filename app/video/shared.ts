// הגדרות משותפות לדף הנחיתה (/video) ולדף התודה (/video/thanks)

export const YOUTUBE_ID = "reZrRkTwDro";
export const WHATSAPP_NUMBER = "972506409478";
export const STORAGE_KEY = "shenhav-video-lead";
export const THANKS_PATH = "/video/thanks";

export const DARK = "#2a201b";
export const CREAM = "#f7eee8";
export const ROSE = "#e3b5a4";

// מועדים לשיחת היכרות בדף התודה. להשאיר ריק = רק כפתור וואטסאפ לתיאום.
// דוגמה: ["יום ראשון בשעה 10:00", "יום שלישי בשעה 20:30"]
export const CALL_SLOTS: string[] = [];

export const OTHER = "אחר";
export const QUESTIONS: { q: string; hint: string; multi?: boolean; options: string[] }[] = [
  {
    q: "מה מתאר אותי כשאני מנסה לרדת במשקל?",
    hint: "אפשר לסמן כמה",
    multi: true,
    options: [
      "אני מתחילה בכל הכוח ונשברת אחרי כמה ימים או שבועות",
      "אני יודעת בדיוק מה לאכול, ובערב משהו משתלט עליי",
      "אני מצליחה לרדת, אבל המשקל תמיד חוזר",
      "אני אוכלת מתוך רגש: לחץ, עייפות, שעמום או בדידות",
      "אני כבר לא יודעת מה עוד לנסות",
    ],
  },
  {
    q: "מה הכי קרוב למה שגרם לי להשאיר פרטים דווקא עכשיו?",
    hint: "בחירה אחת",
    options: [
      "נשברתי שוב ואמרתי לעצמי \"מספיק\"",
      "יש אירוע או תאריך שמתקרב",
      "משהו בבריאות או במדדים שלי מדאיג אותי",
      "סתם סקרנית לשמוע",
      OTHER,
    ],
  },
  {
    q: "מה הכי מתאים לי אחרי הסרטון?",
    hint: "בחירה אחת",
    options: [
      "רק רוצה לצפות בסרטון ולהמשיך לקבל ממך תוכן",
      "עוד לא יודעת, אני בודקת",
      "רוצה לשמוע איך את עובדת עם נשים במצב שלי",
      "רוצה שתכתבי לי בוואטסאפ ונדבר",
    ],
  },
];

export const waUrl = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
