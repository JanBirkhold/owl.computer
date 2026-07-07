import Image from "next/image";
import { Check } from "lucide-react";
import { PhoneCallButton } from "@/components/ui/phone-call-button";
import { heroBullets, heroHeadline, heroIntro, site } from "@/lib/site";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0a0a0a] text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="mb-4 text-lg font-medium text-[#a2ce90]">
          IT-Service in Ostwestfalen-Lippe
        </p>
        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl"
        >
          {heroHeadline}
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white">{heroIntro}</p>

        <ul className="mt-6 space-y-3" aria-label="Vorteile">
          {heroBullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-white">
              <Check className="mt-1 size-5 shrink-0 text-[#a2ce90]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 sm:max-w-lg">
          <PhoneCallButton className="w-full bg-[#0b8036] text-white hover:bg-[#096b2d] sm:w-auto" />
          <p className="mt-4 text-base text-white/90">
            {site.geo.areaServed.slice(0, 3).join(", ")} u. Umgebung
          </p>
        </div>
      </div>
    </section>
  );
}
