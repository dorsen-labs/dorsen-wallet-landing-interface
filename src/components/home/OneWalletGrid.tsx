"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const features = [
  {
    title: "Built-in security",
    desc: "Protect your assets with secure wallet technology built into Dorsen.",
    large: true,
  },
  {
    title: "One-click swaps",
    desc: "Swap tokens quickly with optimized routing and transparent fees.",
    large: true,
  },
  {
    title: "Private by default",
    desc: "No name, email, or phone number required to get started.",
  },
  {
    title: "Real-time activity tracking",
    desc: "See your swaps, transfers, and wallet activity as they happen.",
  },
  {
    title: "Connect to apps",
    desc: "Access your favorite Web3 apps and connect securely.",
  },
];

function FeatureImage({
  title,
  dark,
}: {
  title: string;
  dark: boolean;
}) {
  return (
    <Image
      src={dark ? "/app/app-dark.png" : "/app/app-light.png"}
      alt={title}
      width={700}
      height={1400}
      className="h-auto w-full rounded-[28px] shadow-2xl"
    />
  );
}
export function OneWalletGrid() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="features"
      className="
        bg-white
        py-20
        dark:bg-[#050D18]
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            className="
              text-4xl
              font-medium
              leading-[0.98]
              tracking-[-0.05em]
              text-[#0B2342]
              sm:text-5xl
              md:text-6xl
              lg:text-[4.5rem]
              dark:text-white
            "
          >
            Everything you need,
            <br />
            <span className="text-gradient">
              and then some.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-muted-light
              sm:text-lg
              dark:text-slate-400
            "
          >
            From secure swaps to seamless Web3 access, everything
            is built right into Dorsen Wallet.
          </p>
        </motion.div>

        {/* FEATURE GRID */}
        <div className="mt-14 space-y-4 sm:mt-16">

          {/* LARGE CARDS */}
          <div className="grid gap-4 lg:grid-cols-2">
            {features
              .filter((feature) => feature.large)
              .map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    min-h-[410px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#d7e3ef]
                    bg-[#f5f9ff]
                    p-8
                    shadow-[0_10px_40px_-25px_rgba(10,17,40,0.25)]
                    sm:min-h-[440px]
                    sm:p-10
                    dark:border-white/[0.07]
                    dark:bg-[#0a1930]
                    dark:shadow-[0_20px_60px_-30px_rgba(44,135,191,0.35)]
                  "
                >
                  {/* GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-64
                      w-64
                      rounded-full
                      bg-[#2c87bf]/10
                      blur-3xl
                      dark:bg-[#2c87bf]/15
                    "
                  />

                  {/* TITLE */}
                  <div className="relative z-10 max-w-[280px]">
                    <h3
                      className="
                        text-2xl
                        font-medium
                        leading-tight
                        tracking-[-0.03em]
                        text-[#0B2342]
                        sm:text-[28px]
                        dark:text-white
                      "
                    >
                      {feature.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      absolute
                      bottom-8
                      left-8
                      z-10
                      max-w-[270px]
                      text-base
                      leading-snug
                      text-muted-light
                      sm:bottom-10
                      sm:left-10
                      dark:text-slate-400
                    "
                  >
                    {feature.desc}
                  </p>

                  {/* IMAGE */}
                  <div
                    className="
                      absolute
                      bottom-[-115px]
                      right-[-15px]
                      w-[47%]
                      max-w-[300px]
                      transition-transform
                      duration-500
                      group-hover:-translate-y-2
                    "
                  >
                    <FeatureImage
                      title={feature.title}
                      dark={isDark}
                    />
                  </div>
                </motion.div>
              ))}
          </div>

          {/* SMALL CARDS */}
          <div className="grid gap-4 md:grid-cols-3">
            {features
              .filter((feature) => !feature.large)
              .map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    min-h-[480px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#d7e3ef]
                    bg-[#f5f9ff]
                    p-8
                    shadow-[0_10px_40px_-25px_rgba(10,17,40,0.2)]
                    sm:p-10
                    dark:border-white/[0.07]
                    dark:bg-[#0a1930]
                    dark:shadow-[0_20px_60px_-30px_rgba(44,135,191,0.25)]
                  "
                >
                  {/* TITLE */}
                  <h3
                    className="
                      relative
                      z-10
                      text-2xl
                      font-medium
                      leading-tight
                      tracking-[-0.03em]
                      text-[#0B2342]
                      dark:text-white
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      relative
                      z-10
                      mt-3
                      max-w-[300px]
                      text-base
                      leading-snug
                      text-muted-light
                      dark:text-slate-400
                    "
                  >
                    {feature.desc}
                  </p>

                  {/* IMAGE */}
                  <div
                    className="
                      absolute
                      bottom-[-115px]
                      left-1/2
                      w-[58%]
                      max-w-[250px]
                      -translate-x-1/2
                      transition-transform
                      duration-500
                      group-hover:-translate-y-2
                    "
                  >
                    <FeatureImage
                      title={feature.title}
                      dark={isDark}
                    />
                  </div>
                </motion.div>
              ))}
          </div>

        </div>
      </div>
    </section>
  );
}