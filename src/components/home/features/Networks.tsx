import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { networks } from "@/lib/data";

export function Networks() {
  return (
    <Card className="p-5">
      <p className="px-1 text-[13px] font-bold text-slate-700 dark:text-slate-200">Select network</p>
      <div className="mt-3 space-y-2">
        {networks.map((n, i) => (
          <div key={n.name} className="flex items-center justify-between rounded-2xl px-3 py-2.5 hover:bg-black/[0.03] dark:hover:bg-white/[0.05]">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-extrabold text-white" style={{ background: n.color }}>
                {n.tag.slice(0, 1)}
              </span>
              <div>
                <p className="text-[13px] font-bold text-slate-800 dark:text-slate-100">{n.name}</p>
                <p className="text-[11px] text-slate-400">{n.tag}</p>
              </div>
            </div>
            {i === 0 ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2C87BF] text-white">
                <Check className="h-3 w-3" />
              </span>
            ) : (
              <span className="h-5 w-5 rounded-full border-2 border-slate-200 dark:border-white/15" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
