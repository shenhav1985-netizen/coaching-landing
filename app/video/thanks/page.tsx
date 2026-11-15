import type { Metadata } from "next";
import ThanksPage from "./ThanksPage";

export const metadata: Metadata = {
  title: "הסרטון שלך · שנהב בנימין",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThanksPage />;
}
