import { ArrowDownUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function SwapCard() {
  return (
    <Card className="p-5">
      <div className="rounded-2xl bg-black/[0.03] p-4 dark:bg-white/[0.04]">
        <p className="text-[11px] font-medium text-slate-400">You pay</p>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-2xl font-extrabold text-slate-900 dark:text-white">100</p>
          <span className="rounded-full bg-black/[0.06] px-3 py-1.5 text-[12px] font-bold dark:bg-white/10">USDC ▾</span>
        </div>
      </div>
      <div className="my-1 flex justify-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2C87BF] text-white shadow-lg shadow-blue-500/40">
          <ArrowDownUp className="h-4 w-4" />
        </span>
      </div>
      <div className="rounded-2xl bg-black/[0.03] p-4 dark:bg-white/[0.04]">
        <p className="text-[11px] font-medium text-slate-400">You receive</p>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-2xl font-extrabold text-slate-900 dark:text-white">0.03884</p>
          <span className="rounded-full bg-black/[0.06] px-3 py-1.5 text-[12px] font-bold dark:bg-white/10">ETH ▾</span>
        </div>
      </div>
      <p className="mt-3 text-center text-[11px] text-slate-400">1 ETH ≈ 2,574 USDC • Fee $0.42</p>
      <Button className="mt-3 w-full">Swap now</Button>
    </Card>
  );
}
