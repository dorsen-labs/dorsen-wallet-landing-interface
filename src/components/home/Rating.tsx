import { Star } from "lucide-react";

export function Rating() {
  return (
    <section id="reviews" className="bg-slate-50/70 py-16 dark:bg-[#071223]">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Built for people<br />who use Web3.
        </h2>
        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">4.8</span>
          <span className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </span>
        </div>
        <p className="mt-2 text-[13px] text-slate-500 dark:text-slate-400">120,000+ ratings across App Store & Google Play</p>
        <div className="card-light mx-auto mt-7 max-w-xl rounded-3xl p-6 text-left">
          <p className="text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
            “Swapped, bridged and tracked everything in one place. The cleanest self-custody wallet I&apos;ve used — dark mode is gorgeous.”
          </p>
          <p className="mt-3 text-[12px] font-bold text-slate-800 dark:text-white">— Priya S. <span className="font-normal text-slate-400">· Verified user</span></p>
        </div>
      </div>
    </section>
  );
}
