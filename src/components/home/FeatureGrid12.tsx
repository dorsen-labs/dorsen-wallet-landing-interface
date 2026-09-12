"use client";

import { motion } from "framer-motion";
import { grid12 } from "@/lib/data";
import { SectionHeading } from "@/components/ui/card";

export function FeatureGrid12() {
  return (
    <section className="bg-white py-16 dark:bg-[#050D18] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={<>Everything you need.<br />Nothing you don&apos;t.</>} />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {grid12.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="card-light rounded-2xl p-5"
            >
              <f.icon className="h-5 w-5 text-[#2C87BF]" />
              <h3 className="mt-3 text-[13.5px] font-bold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-1 text-[12.5px] text-slate-500 dark:text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
