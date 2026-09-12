import { Card } from "@/components/ui/card";
import { tokens } from "@/lib/data";

export function Portfolio() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-slate-400">Portfolio</p>
          <p className="text-2xl font-extrabold text-slate-900 dark:text-white">$24,892.40</p>
        </div>
        <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-[11px] font-bold text-green-600">+0.278% today</span>
      </div>
      <svg viewBox="0 0 300 80" className="mt-3 h-20 w-full" fill="none">
        <path d="M0 60 L25 55 L50 58 L75 45 L100 48 L110 70 L125 60 L140 55 L160 40 L185 45 L210 55 L235 50 L260 35 L300 25 L300 80 L0 80 Z" fill="#2C87BF" opacity="0.12" />
        <path d="M0 60 L25 55 L50 58 L75 45 L100 48 L110 70 L125 60 L140 55 L160 40 L185 45 L210 55 L235 50 L260 35 L300 25" stroke="#2C87BF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="300" cy="25" r="4" fill="#2C87BF" />
      </svg>
      <div className="mt-3 space-y-2">
        {tokens.slice(0, 3).map((t) => (
          <div key={t.symbol} className="flex items-center justify-between text-[12.5px]">
            <span className="flex items-center gap-2 font-semibold text-slate-600 dark:text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: t.color }} /> {t.name}
            </span>
            <span className="font-bold text-slate-800 dark:text-white">{t.price}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
