"use client";

import Image from "next/image";

const coins = [
  {
    name: "Dorsen",
    image: "/app/coin/dorsen.png",
  },
  {
    name: "Ethereum",
    image: "/app/coin/eth.png",
  },
  {
    name: "BNB Chain",
    image: "/app/coin/bnb.png",
  },
  {
    name: "Polygon",
    image: "/app/coin/polygon.png",
  },
  {
    name: "USDT",
    image: "/app/coin/usdt.png",
  },
];

export function LogoMarquee() {
  const row = [...coins, ...coins, ...coins];

  return (
    <section className="mt-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-200/70
            bg-slate-50/70
            py-5
            dark:border-white/[0.07]
            dark:bg-white/[0.025]
          "
        >
          <div className="overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-16 px-8">
              {row.map((coin, i) => (
                <div
                  key={`${coin.name}-${i}`}
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-transform
                    duration-300
                    hover:scale-110
                    dark:border-white/10
                    dark:bg-white/[0.06]
                  "
                >
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={48}
                    height={48}
                    className="h-11 w-11 rounded-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}