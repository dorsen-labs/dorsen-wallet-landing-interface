import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ConnectWeb3() {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2C87BF]/10 text-[#2C87BF]">
          <Globe className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[13px] font-bold text-slate-800 dark:text-white">Uniswap</p>
          <p className="text-[11px] text-slate-400">app.uniswap.org wants to connect</p>
        </div>
      </div>
      <div className="mt-4 space-y-2 rounded-2xl bg-black/[0.03] p-4 text-[12px] text-slate-500 dark:bg-white/[0.04] dark:text-slate-400">
        <p>✓ View wallet balance & activity</p>
        <p>✓ Request transaction approval</p>
        <p className="text-red-400">✕ Never move funds without consent</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button variant="secondary">Reject</Button>
        <Button>Connect</Button>
      </div>
    </Card>
  );
}
