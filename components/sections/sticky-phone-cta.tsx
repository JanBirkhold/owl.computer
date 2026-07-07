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
        className="flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-6 text-xl font-bold text-[#0b8036] transition-colors active:bg-white/90"
        aria-label={`Jetzt anrufen: ${site.phone}`}
      >
        <Phone className="size-7 shrink-0" aria-hidden="true" />
        <span>Jetzt anrufen: {site.phone}</span>
      </a>
    </div>
  );
}
