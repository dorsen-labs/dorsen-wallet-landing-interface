import Image from "next/image";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function SendReceive() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card className="flex flex-col items-center p-5 text-center">
        <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400">Send</p>
        <p className="mt-1 font-mono text-[13px] font-bold text-slate-800 dark:text-white">0xDC…AC41</p>
        <div className="relative mt-4 h-36 w-36 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
          <Image src="/app/app-light.png" alt="Receive QR" fill className="object-cover object-top dark:hidden" />
          <Image src="/app/app-dark.png" alt="Receive QR dark" fill className="hidden object-cover object-top dark:block" />
        </div>
        <Button size="sm" variant="mint" className="mt-4 w-full">
          <Copy className="h-3.5 w-3.5" /> Copy Address
        </Button>
      </Card>
      <Card className="p-5">
        <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400">Recent activity</p>
        <div className="mt-3 space-y-2.5">
          {[
            { t: "Received 0.5 ETH", s: "2 min ago", up: true },
            { t: "Sent 120 USDC", s: "1 hr ago", up: false },
            { t: "Swapped SOL → USDC", s: "Yesterday", up: true },
          ].map((a) => (
            <div key={a.t} className="flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2.5 dark:bg-white/[0.05]">
              <div>
                <p className="text-[12px] font-bold text-slate-700 dark:text-slate-200">{a.t}</p>
                <p className="text-[11px] text-slate-400">{a.s}</p>
              </div>
              <span className={`text-[12px] font-bold ${a.up ? "text-green-600" : "text-slate-400"}`}>{a.up ? "↓" : "↑"}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
