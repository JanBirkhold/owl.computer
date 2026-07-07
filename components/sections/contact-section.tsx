import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="contact-heading" className="text-center text-3xl font-bold sm:text-4xl">
          Kontakt aufnehmen
        </h2>
        <p className="mt-4 text-center text-xl text-muted-foreground">
          Am schnellsten erreichen Sie mich per Telefon. Alternativ schreiben Sie mir eine
          Nachricht.
        </p>

        <a
          href={site.phoneHref}
          className="btn-call mx-auto mt-8 flex w-full max-w-lg flex-col items-center gap-2 rounded-2xl border-2 border-[#0b8036] bg-[#0b8036]/10 px-8 py-6 text-center transition-colors hover:bg-[#0b8036]/20 sm:flex-row sm:justify-center"
        >
          <Phone className="size-8 shrink-0 text-[#0b8036]" aria-hidden="true" />
          <span className="text-2xl font-bold text-[#0b8036] sm:text-3xl">{site.phone}</span>
          <span className="sr-only">Jetzt anrufen</span>
        </a>
        <p className="mt-3 text-center text-lg text-muted-foreground">
          Tippen Sie auf die Nummer — Ihr Handy wählt automatisch.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 px-6 text-lg font-medium hover:border-[#0b8036]/30 hover:bg-[#0b8036]/5"
          >
            <Mail className="size-5 text-[#0b8036]" aria-hidden="true" />
            {site.email}
          </a>
        </div>

        <div className="mt-6 flex items-start justify-center gap-3 text-center text-lg text-muted-foreground">
          <MapPin className="mt-1 size-5 shrink-0 text-[#0b8036]" aria-hidden="true" />
          <span>
            Büro: {site.addresses.office.street}, {site.addresses.office.zip}{" "}
            {site.addresses.office.city}
          </span>
        </div>

        <div className="mt-12 rounded-2xl border-2 bg-card p-6 sm:p-8">
          <h3 className="text-2xl font-bold">Oder Nachricht schreiben</h3>
          <p className="mt-2 text-lg text-muted-foreground">
            Füllen Sie das Formular aus — ich rufe Sie zurück.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

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
