import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/site-header";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Impressum",
  description: `Impressum von ${site.name} — ${site.owner}, Barntrup & Dörentrup.`,
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="py-16 sm:py-20">
        <article className="prose prose-neutral mx-auto max-w-3xl px-4 sm:px-6">
          <nav aria-label="Brotkrumen" className="not-prose mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-[#0b8036]">
              Startseite
            </Link>
            <span aria-hidden="true"> / </span>
            <span>Impressum</span>
          </nav>

          <h1>Impressum</h1>

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>{site.name}</strong>
            <br />
            Inh. {site.owner}
            <br />
            {site.addresses.legal.street}
            <br />
            {site.addresses.legal.zip} {site.addresses.legal.city}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href={site.phoneHref}>{site.phone}</a>
            <br />
            E-Mail: <a href={`mailto:${site.emailOwner}`}>{site.emailOwner}</a>
            <br />
            Öffentliche Anfragen: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>

          <h2>Büroanschrift</h2>
          <p>
            {site.addresses.office.street}
            <br />
            {site.addresses.office.zip} {site.addresses.office.city}
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            {site.owner}
            <br />
            {site.addresses.legal.street}
            <br />
            {site.addresses.legal.zip} {site.addresses.legal.city}
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </article>
      </main>
    </>
  );
}
