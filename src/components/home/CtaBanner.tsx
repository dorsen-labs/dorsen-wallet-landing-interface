"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#050D18] sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#EAF2FF] via-[#F6F9FF] to-[#E6FBFF] px-6 py-14 text-center dark:from-[#0B1430] dark:via-[#0A1128] dark:to-[#06283A] sm:px-12"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#2C87BF]/20 blur-3xl" />
        <span className="inline-block rounded-full bg-black/[0.05] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:bg-white/10 dark:text-slate-300">
          Get started in 60 seconds
        </span>
        <h2 className="mx-auto mt-4 max-w-md text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Welcome to the <span className="text-gradient">Dorsen Wallet.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14px] text-slate-500 dark:text-slate-400">
          Join 2M+ users. No account, no email — just download and own your crypto.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button>
            <Smartphone className="h-4 w-4" /> App Store
          </Button>
          <Button variant="secondary">
            <Play className="h-4 w-4" /> Google Play
          </Button>
        </div>

        {/* Theme-aware phone: light/dark auto */}
        <div className="relative mx-auto mt-10 w-full max-w-[260px]">
          <div className="overflow-hidden rounded-[1.8rem] border border-white/40 shadow-2xl dark:border-white/10">
            <div className="relative aspect-[9/18] w-full dark:hidden">
              <Image src="/app/app-light.png" alt="Dorsen app light" fill className="object-cover object-top" sizes="260px" priority={false} />
            </div>
            <div className="relative hidden aspect-[9/18] w-full dark:block">
              <Image src="/app/app-dark.png" alt="Dorsen app dark" fill className="object-cover object-top" sizes="260px" priority={false} />
            </div>
          </div>
          <div className="card-light absolute -right-8 top-8 hidden rounded-2xl px-3 py-2 text-left sm:block">
            <p className="text-[11px] font-bold text-slate-800 dark:text-white">$24,892.40</p>
            <p className="text-[10px] font-bold text-green-600">↑ 0.278% today</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
