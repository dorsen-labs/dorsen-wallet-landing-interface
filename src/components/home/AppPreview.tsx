"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/card";

function PhoneFrame({ src, alt, label, className = "" }: { src: string; alt: string; label: string; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[300px] ${className}`}>
      <div className="glow-blue overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-black">
        <div className="relative aspect-[9/19] w-full">
          <Image src={src} alt={alt} fill className="object-cover object-top" sizes="300px" />
        </div>
      </div>
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2C87BF] px-4 py-1.5 text-[11px] font-bold text-white shadow-lg">
        {label}
      </span>
    </div>
  );
}

export function AppPreview() {
  return (
    <section className="bg-white py-16 dark:bg-[#050D18] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Real app screenshots"
          title={<>Real app. <span className="text-gradient">Real experience.</span></>}
          desc="Yahi screens aapke image-use folder se — light aur dark dono live app se."
        />
        {/* Dono ek-saath: light + dark */}
        <div className="mt-12 grid gap-10 pb-4 sm:grid-cols-2 sm:gap-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <PhoneFrame src="/app/app-light.png" alt="Dorsen Wallet light mode" label="☀️ Light mode" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }}>
            <PhoneFrame src="/app/app-dark.png" alt="Dorsen Wallet dark mode" label="🌙 Dark mode" />
          </motion.div>
        </div>
        {/* Theme-aware single: system theme ke hisab se auto-switch */}
        <p className="mt-10 text-center text-[12px] font-medium uppercase tracking-widest text-slate-400">
          ↓ Neeche theme toggle karo — phone auto-switch hoga
        </p>
        <div className="mx-auto mt-4 w-full max-w-[300px]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl dark:border-white/10">
            <div className="relative aspect-[9/19] w-full dark:hidden">
              <Image src="/app/app-light.png" alt="Auto light" fill className="object-cover object-top" sizes="300px" />
            </div>
            <div className="relative hidden aspect-[9/19] w-full dark:block">
              <Image src="/app/app-dark.png" alt="Auto dark" fill className="object-cover object-top" sizes="300px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
