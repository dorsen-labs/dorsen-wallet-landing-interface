import Image from "next/image";
import Link from "next/link";
import { Globe, MessageCircle, Send } from "lucide-react";
import { footerCols } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white dark:border-white/[0.06] dark:bg-[#050D18]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/app/logo/dorsen-icon.png"
              alt="Dorsen Wallet logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-xl object-cover shadow-sm"
            />
            <span className="logo-gradient font-sans text-lg font-extrabold tracking-tight">
              DORSEN
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
            Your wallet. Your assets. Your control. Self-custody crypto for everyone.
          </p>
          <div className="mt-5 flex gap-2">
            {[Send, MessageCircle, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.05] text-slate-500 hover:bg-[#2C87BF] hover:text-white dark:bg-white/10 dark:text-slate-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="text-[13px] font-bold text-slate-900 dark:text-white">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-[13px] text-slate-500 hover:text-[#2C87BF] dark:text-slate-400">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200/70 dark:border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-[12px] text-slate-400 sm:flex-row sm:px-6">
          <p>© 2026 Dorsen Wallet. All rights reserved.</p>
          <p>Self-custody. Never share your seed phrase.</p>
        </div>
      </div>
    </footer>
  );
}
