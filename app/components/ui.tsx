"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

export function GlassCard({
  children,
  accent = false,
  className = "",
  style,
  id,
}: {
  children: ReactNode;
  accent?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={className}
      style={{
        background: accent
          ? "linear-gradient(135deg, rgba(185,138,120,0.10) 0%, rgba(255,255,255,0.55) 100%)"
          : "rgba(255,255,255,0.6)",
        border: `1.5px solid ${accent ? "rgba(169,136,122,0.35)" : "rgba(64,51,44,0.08)"}`,
        borderRadius: "20px",
        padding: "clamp(1.5rem, 1rem + 2vw, 2.5rem)",
        boxShadow: accent
          ? "0 0 40px rgba(185,138,120,0.12), 0 8px 32px rgba(64,51,44,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
          : "0 4px 24px rgba(64,51,44,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
        backdropFilter: "blur(8px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function AccentLine() {
  return (
    <div
      style={{
        width: "120px",
        height: "3px",
        background:
          "linear-gradient(90deg, transparent, #b98a78, #e3c4b8, #b98a78, transparent)",
        margin: "20px auto",
        borderRadius: "2px",
        boxShadow: "0 0 12px rgba(185,138,120,0.25)",
      }}
    />
  );
}

export function AccentDivider() {
  return (
    <div
      style={{
        height: "64px",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(185,138,120,0.06) 50%, transparent 100%)",
      }}
    />
  );
}

export function AmbientGlow({
  top = "50%",
  left = "50%",
  size = 600,
  opacity = 0.08,
}: {
  top?: string;
  left?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        transform: "translate(-50%, -50%)",
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(ellipse, rgba(185,138,120,${opacity}) 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
  );
}

export function CTAButton({
  text,
  href = "#register",
  full = false,
}: {
  text: string;
  href?: string;
  full?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: full ? "block" : "inline-block",
        textAlign: "center",
        background: "linear-gradient(135deg, #8b6156, #b98a78, #e3c4b8)",
        color: "#fff",
        fontWeight: 900,
        fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
        padding: "18px 48px",
        borderRadius: "14px",
        boxShadow: "0 0 20px rgba(185,138,120,0.35), 0 4px 20px rgba(64,51,44,0.15)",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {text}
    </motion.a>
  );
}

export function SectionHook({ children }: { children: ReactNode }) {
  return (
    <h3
      style={{
        color: "var(--accent-dark)",
        fontWeight: 800,
        fontSize: "clamp(1.25rem, 1rem + 1.2vw, 1.5rem)",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </h3>
  );
}

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}
