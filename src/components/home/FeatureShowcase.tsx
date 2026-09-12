"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/card";
import { SecureKeys } from "./features/SecureKeys";
import { SwapCard } from "./features/SwapCard";
import { Networks } from "./features/Networks";
import { SendReceive } from "./features/SendReceive";
import { Portfolio } from "./features/Portfolio";
import { ConnectWeb3 } from "./features/ConnectWeb3";

function Text({
  title,
  points,
}: {
  title: React.ReactNode;
  points: string[];
}) {
  return (
    <div>
      <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-[1.7rem]">{title}</h3>
      <ul className="mt-5 space-y-2.5">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-slate-500 dark:text-slate-400">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2C87BF]/10 text-[#2C87BF]">
              <Check className="h-3 w-3" />
            </span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FeatureShowcase() {
  const rows = [
    {
      text: <Text title={<>Your keys.<br />Your assets.<br /><span className="text-gradient">Your control.</span></>} points={["Self-custody by default — no account needed", "Secure enclave + biometric unlock", "Encrypted backup you own"]} />,
      ui: <SecureKeys />,
    },
    {
      text: <Text title={<>Swap without<br />the complexity.</>} points={["Best route across DEXes automatically", "Clear price, fee and slippage upfront", "One-tap approve & swap"]} />,
      ui: <SwapCard />,
    },
    {
      text: <Text title={<>One wallet.<br /><span className="text-gradient">Multiple networks.</span></>} points={["Ethereum, BNB, Polygon, Solana & more", "Auto-detect network per dApp", "Bridge assets without leaving app"]} />,
      ui: <div id="networks"><Networks /></div>,
    },
    {
      text: <Text title={<>Send and receive,<br />without friction.</>} points={["Address, ENS or QR — your choice", "Save contacts in address book", "Copy in one tap, paste never"]} />,
      ui: <SendReceive />,
    },
    {
      text: <Text title={<>Know what<br />you own.</>} points={["Live portfolio with P&L per token", "Price alerts that actually ping", "Export history to Excel for tax"]} />,
      ui: <Portfolio />,
    },
    {
      text: <Text title={<>Connect to Web3.</>} points={["WalletConnect + in-app browser", "Per-site permissions you can revoke", "Scam & phishing warnings built-in"]} />,
      ui: <ConnectWeb3 />,
    },
  ];

  return (
    <section className="bg-slate-50/70 py-16 dark:bg-[#071223] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={<>Powerful features.<br />Simple experience.</>} desc="Everything below is live in the app today." />
        <div className="mt-12 space-y-12">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>{r.text}</div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>{r.ui}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
