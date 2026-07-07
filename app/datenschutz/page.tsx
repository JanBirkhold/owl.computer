import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/site-header";
import { createMetadata } from "@/lib/seo";
import { imageCredits, site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${site.name} — Informationen zur Verarbeitung personenbezogener Daten.`,
  path: "/datenschutz",
});

export default function DatenschutzPage() {
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
            <span>Datenschutz</span>
          </nav>

          <h1>Datenschutzerklärung</h1>

          <h2>1. Verantwortlicher</h2>
          <p>
            {site.owner}
            <br />
            {site.name}
            <br />
            {site.addresses.legal.street}, {site.addresses.legal.zip} {site.addresses.legal.city}
            <br />
            E-Mail: <a href={`mailto:${site.emailOwner}`}>{site.emailOwner}</a>
          </p>

          <h2>2. Allgemeine Hinweise</h2>
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Personenbezogene Daten werden
            auf dieser Website nur im technisch notwendigen Umfang sowie bei direktem Kontakt per
            Telefon oder E-Mail verarbeitet.
          </p>

          <h2>3. Technische Zugriffsdaten</h2>
          <p>
            Beim Aufruf dieser Website werden automatisch technische Zugriffsdaten in Logfiles
            erfasst (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp). Diese
            Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen der technischen
            Sicherheit und Stabilität der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an einem sicheren Betrieb).
          </p>

          <h2>4. Kontakt per Telefon oder E-Mail</h2>
          <p>
            Wenn Sie uns telefonisch oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen
            mitgeteilten Daten (z. B. Name, Telefonnummer, E-Mail-Adresse, Inhalt Ihrer Anfrage)
            ausschließlich zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
            b DSGVO (Vertragsanbahnung) bzw. lit. f DSGVO (berechtigtes Interesse an der
            Beantwortung von Anfragen).
          </p>
          <p>
            Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>

          <h2>5. Ihre Rechte</h2>
          <p>Sie haben das Recht auf:</p>
          <ul>
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
          </ul>
          <p>
            Beschwerderecht bei einer Aufsichtsbehörde, z. B. der Landesbeauftragte für Datenschutz
            und Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
          </p>

          <h2>6. Bildquellen (Pexels)</h2>
          <p>
            Stock-Fotos auf dieser Website stammen von{" "}
            <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">
              Pexels
            </a>{" "}
            und sind kostenlos nutzbar:
          </p>
          <ul>
            {imageCredits.map((credit) => (
              <li key={credit.file}>
                <a href={credit.url} target="_blank" rel="noopener noreferrer">
                  {credit.file}
                </a>{" "}
                — Foto von {credit.photographer}
              </li>
            ))}
          </ul>

          <p className="text-sm text-muted-foreground">Stand: Juli 2026</p>
        </article>
      </main>
    </>
  );
}
