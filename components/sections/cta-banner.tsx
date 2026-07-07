import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-[#0b8036]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
        <h2 id="cta-heading" className="text-3xl font-bold sm:text-4xl">
          Haben Sie ein IT-Problem?
        </h2>
        <p className="mt-4 text-xl leading-relaxed">
          Rufen Sie mich an — ich helfe Ihnen gerne weiter. Kein Fachchinesisch, keine
          Warteschleife.
        </p>
        <a
          href={site.phoneHref}
          className="btn-call mx-auto mt-8 inline-flex bg-white text-[#0b8036] hover:bg-white/95"
        >
          <Phone className="size-7" aria-hidden="true" />
          {site.phone}
        </a>
        <p className="mt-4 text-lg text-white/90">Mo–Fr, 9–18 Uhr</p>
      </div>
    </section>
  );
}
