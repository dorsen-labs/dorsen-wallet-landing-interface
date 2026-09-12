import { Check, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SecureKeys() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#2C87BF] to-[#08C2E5] text-white">
          <ShieldCheck className="h-6 w-6" />
        </span>
        <div>
          <p className="text-[13px] font-bold text-slate-800 dark:text-white">Wallet secure</p>
          <p className="text-[11px] text-green-600 dark:text-green-400">● Protected by enclave</p>
        </div>
      </div>
      <div className="mt-5 space-y-2.5">
        {["Keys never leave device", "Biometric unlock enabled", "Encrypted cloud backup"].map((t) => (
          <div key={t} className="flex items-center gap-2.5 rounded-xl bg-black/[0.03] px-3 py-2.5 text-[12.5px] font-medium text-slate-600 dark:bg-white/[0.05] dark:text-slate-300">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/15 text-green-600 dark:text-green-400">
              <Check className="h-3 w-3" />
            </span>
            {t}
          </div>
        ))}
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/10">
        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[#2C87BF] to-[#08C2E5]" />
      </div>
    </Card>
  );
}
