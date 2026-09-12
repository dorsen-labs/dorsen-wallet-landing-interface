"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { securityItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui/card";

export function Security() {
  return (
    <section id="security" className="bg-white py-16 dark:bg-[#050D18] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Security comes first." desc="Audited, open and self-custodial — your keys never touch our servers." />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Radial diagram */}
          <div className="relative mx-auto flex h-72 w-72 items-center justify-center">
            {[140, 100, 60].map((s) => (
              <span key={s} className="absolute rounded-full border border-[#2C87BF]/20" style={{ width: s * 2, height: s * 2 }} />
            ))}
            {[
              { label: "🔑", pos: "left-0 top-1/2" },
              { label: "🛡️", pos: "right-0 top-1/2" },
              { label: "🔒", pos: "left-1/2 top-0" },
              { label: "👁️", pos: "left-1/2 bottom-0" },
            ].map((n) => (
              <span key={n.label} className={`card-light absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-lg ${n.pos}`}>
                {n.label}
              </span>
            ))}
            <span className="glow-blue flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2C87BF] to-[#08C2E5] text-white">
              <ShieldCheck className="h-9 w-9" />
            </span>
          </div>

          <div className="space-y-3">
            {securityItems.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="card-light flex gap-4 rounded-2xl p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2C87BF]/10 text-[#2C87BF]">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[14px] font-bold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
