"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-10 w-10 rounded-full bg-black/5 dark:bg-white/10" />;

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] text-slate-700 hover:bg-black/10 dark:bg-white/10 dark:text-amber-200 dark:hover:bg-white/15 cursor-pointer overflow-hidden"
    >
      <span className={`absolute transition-all duration-300 ${isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}`}>
        <Sun className="h-[18px] w-[18px]" />
      </span>
      <span className={`absolute transition-all duration-300 ${isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}>
        <Moon className="h-[18px] w-[18px]" />
      </span>
    </button>
  );
}
