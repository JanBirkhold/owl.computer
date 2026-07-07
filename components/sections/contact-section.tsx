import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { PhoneCallButton } from "@/components/ui/phone-call-button";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="contact-heading" className="text-center text-3xl font-bold sm:text-4xl">
          Kontakt aufnehmen
        </h2>
        <p className="mt-4 text-center text-xl text-muted-foreground">
          Rufen Sie mich an — ich höre zu, erkläre verständlich und berate Sie unverbindlich.
        </p>

        <div className="mx-auto mt-8 max-w-lg">
          <PhoneCallButton className="w-full border-2 border-[#0b8036] bg-[#0b8036]/10 text-[#0b8036] hover:bg-[#0b8036]/20" />
        </div>
        <p className="mt-3 text-center text-lg text-muted-foreground">
          Tippen Sie auf die Nummer — Ihr Handy wählt automatisch.
        </p>

        <div className="mt-6 flex items-start justify-center gap-3 text-center text-lg text-muted-foreground">
          <MapPin className="mt-1 size-5 shrink-0 text-[#0b8036]" aria-hidden="true" />
          <span>
            Büro: {site.addresses.office.street}, {site.addresses.office.zip}{" "}
            {site.addresses.office.city}
          </span>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-lg text-muted-foreground">
          <Phone className="size-5 shrink-0 text-[#0b8036]" aria-hidden="true" />
          Mo–Fr, 9–18 Uhr
        </p>

        <p className="mt-8 text-center text-lg text-muted-foreground">
          Einsatzgebiet: {site.geo.areaServed.join(", ")}.{" "}
          <Link href="/dienstleistungen" className="content-link">
            Alle Leistungen ansehen
          </Link>
        </p>
      </div>
    </section>
  );
}
