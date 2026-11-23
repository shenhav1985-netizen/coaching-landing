import type { Metadata } from "next";
import { Frank_Ruhl_Libre } from "next/font/google";
import CoachChat from "./CoachChat";

const display = Frank_Ruhl_Libre({ subsets: ["hebrew", "latin"], weight: ["500"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "חוזרת הביתה",
  description: "המאמנת הדיגיטלית לחזרה הביתה, בגישה של שנהב בנימין.",
  robots: { index: false, follow: false },
  icons: { icon: "/habayta-icon.svg" },
};

export default function HabaytaPage() {
  return (
    <div className={display.variable}>
      <CoachChat />
    </div>
  );
}
