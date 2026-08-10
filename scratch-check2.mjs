import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 500, height: 900 } });
await page.goto("https://coaching-landing-five.vercel.app/", { waitUntil: "networkidle" });

const info = await page.evaluate(() => {
  const img = document.querySelector('img[alt*="שנהב"]');
  const card = img.closest("div"); // the rounded overflow-hidden container
  const outer = card.parentElement;
  const imgRect = img.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const cardStyle = getComputedStyle(card);
  const imgStyle = getComputedStyle(img);
  return {
    imgRect, cardRect,
    cardBorderRadius: cardStyle.borderRadius,
    cardBorder: cardStyle.border,
    cardOverflow: cardStyle.overflow,
    imgPosition: imgStyle.position,
    imgTop: imgStyle.top,
    imgInset: imgStyle.inset,
    imgObjectFit: imgStyle.objectFit,
    imgObjectPosition: imgStyle.objectPosition,
    imgWidth: imgStyle.width,
    imgHeight: imgStyle.height,
    cardHTML: card.outerHTML.slice(0, 400),
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
