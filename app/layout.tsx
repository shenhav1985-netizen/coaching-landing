import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "התחנה הסופית לנשים שעייפות ממאבק בירידה במשקל",
  description:
    "תהליך ליווי אישי 1:1 בן 10 שבועות לניתוק התלות באוכל מהשורש ובניית שגרת תזונה יציבה בראש שקט.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
