import Image from "next/image";
import Link from "next/link";
import { Check, Mail, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { heroBullets, heroHeadline, heroIntro, site } from "@/lib/site";
import { cn } from "@/lib/utils";

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

        <div className="mt-10 flex flex-col gap-4 sm:max-w-lg">
          <a
            href={site.phoneHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "btn-call w-full bg-[#0b8036] text-white hover:bg-[#096b2d] sm:w-auto",
            )}
          >
            <Phone className="size-7" aria-hidden="true" />
            Jetzt anrufen: {site.phone}
          </a>
          <Link
            href="/kontakt"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-h-12 w-full border-2 border-white/40 bg-white/10 text-lg text-white hover:bg-white/20 hover:text-white sm:w-auto",
            )}
          >
            <Mail className="size-5" aria-hidden="true" />
            Nachricht schreiben
          </Link>
        </div>

        <aside className="mt-10 rounded-2xl border-2 border-[#a2ce90]/40 bg-[#0b8036]/20 p-6 sm:max-w-md">
          <p className="text-lg font-semibold text-[#a2ce90]">Lieber telefonieren?</p>
          <p className="mt-2 text-lg text-white">
            Rufen Sie mich an — ich erkläre alles verständlich und unkompliziert.
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 block text-3xl font-bold text-white underline underline-offset-4 hover:text-[#a2ce90]"
          >
            {site.phone}
          </a>
          <p className="mt-3 text-base text-white/90">
            Mo–Fr, 9–18 Uhr · {site.geo.areaServed.slice(0, 3).join(", ")} u. Umgebung
          </p>
        </aside>
      </div>
    </section>
  );
}
