"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function StickyPhoneCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-[#064d20] bg-[#0b8036] p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] md:hidden"
      role="complementary"
      aria-label="Schnellanruf"
    >
      <a
        href={site.phoneHref}
        className="flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-xl bg-white px-4 py-2 text-[#0b8036] transition-colors active:bg-white/90"
        aria-label={`Jetzt anrufen: ${site.phone}`}
      >
        <span className="inline-flex items-center gap-2 text-base font-bold">
          <Phone className="size-6 shrink-0" aria-hidden="true" />
          Jetzt anrufen:
        </span>
        <span className="text-lg font-bold tabular-nums">{site.phone}</span>
      </a>
    </div>
  );
}
