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

          <h2>Angaben gemäß § 5 TMG und verantwortlich für den Inhalt</h2>
          <p>
            <strong>{site.name}</strong>
            <br />
            Inh. {site.owner}
            <br />
            {site.addresses.legal.street}
            <br />
            {site.addresses.legal.zip} {site.addresses.legal.city}
          </p><br />
          <p>
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p><br />

          <h2>Büro:</h2>
          <p>
            {site.addresses.office.street}
            <br />
            {site.addresses.office.zip} {site.addresses.office.city}
          </p><br />

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
            </a>.
          </p><br />

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </article>
      </main>
    </>
  );
}
