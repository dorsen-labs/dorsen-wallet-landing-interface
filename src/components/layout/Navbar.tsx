"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#" className="flex items-center gap-2">
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
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[13.5px] font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="hidden sm:inline-flex">
            Download App
          </Button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] dark:bg-white/10 cursor-pointer lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200/60 bg-white px-4 py-4 dark:border-white/[0.06] dark:bg-[#050D18] lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[14px] font-medium text-slate-600 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Button className="mt-2 w-full">Download App</Button>
          </div>
        </div>
      )}
    </header>
  );
}
