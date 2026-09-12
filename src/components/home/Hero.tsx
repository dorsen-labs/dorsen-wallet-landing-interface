"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Layers3,
  Zap,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-[#050D18]">
      {/* =========================================================
          LIGHT BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 dark:hidden">
        {/* Main blue glow */}
        <div className="absolute -right-32 -top-40 h-[650px] w-[650px] rounded-full bg-[#2C87BF]/10 blur-[120px]" />

        {/* Cyan glow */}
        <div className="absolute -left-40 top-[40%] h-[500px] w-[500px] rounded-full bg-[#08C2E5]/10 blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(44,135,191,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(44,135,191,0.055) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          DARK BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 hidden dark:block">
        {/* Main blue glow */}
        <div className="absolute -right-32 -top-40 h-[650px] w-[650px] rounded-full bg-[#2C87BF]/20 blur-[130px]" />

        {/* Cyan glow */}
        <div className="absolute -left-40 top-[40%] h-[500px] w-[500px] rounded-full bg-[#08C2E5]/10 blur-[130px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(44,135,191,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(44,135,191,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          HERO CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-2 sm:px-6 lg:px-8 lg:pb-12 lg:pt-4">
        <div className="grid min-h-[520px] items-center gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-20"
          >
            {/* Brand */}
            <div className="mb-7 flex items-center gap-3">
              <Image
                src="/app/logo/dorsen-icon.png"
                alt="Dorsen Wallet logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl border border-[#2C87BF]/20 object-cover shadow-sm"
              />

              <span className="logo-gradient font-sans text-xl font-extrabold tracking-tight">
                DORSEN
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-2xl text-[2.45rem] font-medium leading-[0.96] tracking-[-0.055em] text-[#0B2342] sm:text-5xl md:text-[4rem] lg:text-[3.7rem] dark:text-white">
              Simple. Safe. <span className="logo-gradient">Secure.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base font-medium leading-7 text-slate-500 sm:text-lg dark:text-slate-400">
              The self-custody wallet for swapping, sending, receiving and
              exploring Web3 across multiple networks — with your keys,
              your assets, and your control.
            </p>

            {/* ===================================================
                DOWNLOAD BUTTONS
            ==================================================== */}

            <div className="mt-8 flex flex-wrap gap-3">
              {/* iOS */}
              <Button
                size="lg"
                className="
                  h-12
                  rounded-full
                  bg-[#2C87BF]
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#2C87BF]/20
                  transition-all
                  hover:bg-[#409BD3]
                  hover:shadow-xl
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="mr-2 h-4 w-4"
                  fill="none"
                >
                  <path
                    d="M4.5 3.7L13.2 12 4.5 20.3C4.18 20.06 4 19.67 4 19.2V4.8C4 4.33 4.18 3.94 4.5 3.7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.05 12.8L16.35 15.1L6.15 20.95C5.68 21.22 5.08 21.08 4.7 20.68L14.05 12.8Z"
                    fill="currentColor"
                    opacity="0.7"
                  />
                  <path
                    d="M14.05 11.2L4.7 3.32C5.08 2.92 5.68 2.78 6.15 3.05L16.35 8.9L14.05 11.2Z"
                    fill="currentColor"
                    opacity="0.85"
                  />
                </svg>                Download on Android
              </Button>

              {/* Android */}
              <Button
                size="lg"
                className="
                  h-12
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-5
                  text-sm
                  font-semibold
                  text-slate-800
                  shadow-sm
                  transition-all
                  hover:bg-slate-50
                  dark:border-white/10
                  dark:bg-white/[0.06]
                  dark:text-white
                  dark:hover:bg-white/[0.1]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="mr-2 h-4 w-4"
                  fill="none"
                >
                  <path
                    d="M4.5 3.7L13.2 12 4.5 20.3C4.18 20.06 4 19.67 4 19.2V4.8C4 4.33 4.18 3.94 4.5 3.7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.05 12.8L16.35 15.1L6.15 20.95C5.68 21.22 5.08 21.08 4.7 20.68L14.05 12.8Z"
                    fill="currentColor"
                    opacity="0.7"
                  />
                  <path
                    d="M14.05 11.2L4.7 3.32C5.08 2.92 5.68 2.78 6.15 3.05L16.35 8.9L14.05 11.2Z"
                    fill="currentColor"
                    opacity="0.85"
                  />
                </svg>

                Download APK
              </Button>

              {/* Chrome */}
              {/* <Button
                size="lg"
                className="
                  h-12
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-5
                  text-sm
                  font-semibold
                  text-slate-800
                  shadow-sm
                  transition-all
                  hover:bg-slate-50
                  dark:border-white/10
                  dark:bg-white/[0.06]
                  dark:text-white
                  dark:hover:bg-white/[0.1]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 3.5a6.5 6.5 0 0 1 5.63 3.25H12a3.25 3.25 0 0 0-2.81 1.62L6.37 5.5A6.47 6.47 0 0 1 12 5.5ZM5.5 12a6.47 6.47 0 0 1 .87-3.25l2.82 4.88A3.25 3.25 0 0 0 12 15.25h5.63A6.5 6.5 0 0 1 5.5 12Zm6.5 6.5a6.5 6.5 0 0 1-5.63-3.25H12a3.25 3.25 0 0 0 2.81-1.62l2.82-4.88A6.5 6.5 0 0 1 12 18.5Z" />
                </svg>                Chrome Extension
              </Button> */}
            </div>

            {/* Trust */}

          </motion.div>

          {/* =====================================================
              RIGHT SIDE — 3 WALLET IMAGES
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              min-h-[300px]
              items-center
              justify-center
              lg:min-h-[450px]
            "
          >
            {/* Background glow */}
            <div className="pointer-events-none absolute right-[5%] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-[#2C87BF]/15 blur-[100px] dark:bg-[#2C87BF]/20 dark:blur-[120px]" />

            {/* Extra cyan glow */}
            <div className="pointer-events-none absolute bottom-[5%] right-[20%] h-[260px] w-[260px] rounded-full bg-[#08C2E5]/10 blur-[90px]" />

            {/* Decorative ring */}
            <div className="pointer-events-none absolute right-[8%] top-[8%] h-32 w-32 rounded-full border border-[#2C87BF]/10 dark:border-[#2C87BF]/20" />

            {/* ===================================================
                IMAGE 1 — LEFT / BACK
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 40, rotate: -2 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="
                absolute
                left-[2%]
                top-[20%]
                z-10
                w-[40%]
                max-w-[270px]
                overflow-hidden
                rounded-[28px]
                shadow-2xl
                shadow-[#2C87BF]/10
                transition-transform
                duration-500
                hover:-translate-x-2
                hover:-rotate-3
              "
            >
              {/* LIGHT */}
              <Image
                src="/app/app-light.png"
                alt="Dorsen Wallet"
                width={600}
                height={1000}
                priority
                className="block h-auto w-full dark:hidden"
              />

              {/* DARK */}
              <Image
                src="/app/app-dark.png"
                alt="Dorsen Wallet"
                width={600}
                height={1000}
                priority
                className="hidden h-auto w-full dark:block"
              />
            </motion.div>

            {/* ===================================================
                IMAGE 2 — CENTER / FRONT
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                absolute
                left-1/2
                top-[7%]
                z-30
                w-[48%]
                max-w-[350px]
                -translate-x-1/2
                overflow-hidden
                rounded-[30px]
                shadow-2xl
                shadow-[#2C87BF]/20
                transition-transform
                duration-500
                hover:-translate-y-2
              "
            >
              {/* LIGHT */}
              <Image
                src="/app/app-light.png"
                alt="Dorsen Wallet"
                width={600}
                height={1000}
                priority
                className="block h-auto w-full dark:hidden"
              />

              {/* DARK */}
              <Image
                src="/app/app-dark.png"
                alt="Dorsen Wallet"
                width={600}
                height={1000}
                priority
                className="hidden h-auto w-full dark:block"
              />
            </motion.div>

            {/* ===================================================
                IMAGE 3 — RIGHT / BACK
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -40, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="
                absolute
                right-[1%]
                top-[20%]
                z-20
                w-[40%]
                max-w-[270px]
                overflow-hidden
                rounded-[28px]
                shadow-2xl
                shadow-[#2C87BF]/10
                transition-transform
                duration-500
                hover:translate-x-2
                hover:rotate-3
              "
            >
              {/* LIGHT */}
              <Image
                src="/app/app-light.png"
                alt="Dorsen Wallet"
                width={600}
                height={1000}
                priority
                className="block h-auto w-full dark:hidden"
              />

              {/* DARK */}
              <Image
                src="/app/app-dark.png"
                alt="Dorsen Wallet"
                width={600}
                height={1000}
                priority
                className="hidden h-auto w-full dark:block"
              />
            </motion.div>

            {/* Small floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="
                absolute
                bottom-[9%]
                right-[5%]
                z-40
                hidden
                rounded-2xl
                border
                border-slate-200/80
                bg-white/90
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl
                sm:block
                dark:border-white/10
                dark:bg-[#0D2038]/90
              "
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                </span>

                <div>
                  <p className="text-[11px] font-bold text-slate-800 dark:text-white">
                    Your keys
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Your control
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM FEATURES
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative z-20 mt-4"
        >

        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-[#050D18] dark:to-transparent" />
    </section>
  );
}

/* ===============================================================
   TRUST ITEM
================================================================ */

function TrustItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C87BF]/10 text-[#2C87BF]">
        {icon}
      </span>

      {text}
    </div>
  );
}

/* ===============================================================
   FEATURE CARD
================================================================ */

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200/80
        bg-white/70
        px-4
        py-4
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#2C87BF]/30
        hover:shadow-lg
        hover:shadow-[#2C87BF]/5
        dark:border-white/[0.08]
        dark:bg-white/[0.035]
      "
    >
      <p className="text-sm font-bold text-slate-800 dark:text-white">
        {title}
      </p>

      <p className="mt-1 text-[11px] text-slate-400">
        {description}
      </p>
    </div>
  );
}