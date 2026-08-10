"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui";

export default function LeadForm() {
  return (
    <GlassCard accent id="register" className="text-center">
      <motion.a
        href="https://wa.me/972506409478?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%9C%D7%99%D7%95%D7%95%D7%99%20%D7%94%D7%90%D7%99%D7%A9%D7%99"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-2 rounded-2xl font-black text-white py-4 px-6 text-lg"
        style={{
          background: "#25D366",
          boxShadow: "0 0 20px rgba(37,211,102,0.35), 0 4px 20px rgba(64,51,44,0.15)",
        }}
      >
        כנסי כאן לקביעת שיחה, לפרטים נוספים על הליווי ולבדיקת התאמה
      </motion.a>

      <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>
        שיחת היכרות קלילה, בחינם וללא התחייבות.
      </p>
    </GlassCard>
  );
}
