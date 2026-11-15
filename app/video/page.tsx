import type { Metadata } from "next";
import VideoFunnel from "./VideoFunnel";

export const metadata: Metadata = {
  title: "סרטון חינמי · שנהב בנימין",
  description: "10 דקות שיסבירו למה את שוברת שוב ושוב, גם כשאת יודעת הכל.",
};

export default function VideoPage() {
  return <VideoFunnel />;
}
