import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/site-header";
import { ServicesSection } from "@/components/sections/services-section";
import { DataRecoverySection } from "@/components/sections/data-recovery-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Dienstleistungen",
  description:
    "IT-Dienstleistungen von OWL Computer: OS-Installation, Virenschutz, Datenrettung, Kaufberatung, Netzwerk, Reparatur, Webentwicklung und Hosting ab 5 €/Monat. 50 €/Stunde in OWL.",
  path: "/service",
});

export default function DienstleistungenPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Startseite", path: "/" },
          { name: "Dienstleistungen", path: "/service" },
        ])}
      />
      <SiteHeader currentPath="/service" />
      <main id="main-content">
        <section className="border-b bg-muted/30 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <nav aria-label="Brotkrumen" className="mb-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-[#0b8036]">
                Startseite
              </Link>
              <span aria-hidden="true"> / </span>
              <span>Dienstleistungen</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Dienstleistungen & Preise</h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Neben den hier aufgeführten Leistungen biete ich alle erdenklichen weiteren
              IT-Dienstleistungen an. Sprechen Sie mich einfach an — wir finden eine Lösung für Ihr
              Anliegen.
            </p>
          </div>
        </section>

        <ServicesSection showAll compact />

        <DataRecoverySection />

        <section className="py-16 sm:py-20" aria-labelledby="pricing-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="pricing-heading" className="text-2xl font-bold sm:text-3xl">
              Preise & Abrechnung
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-wider text-[#0b8036]">
                  Stundensatz
                </p>
                <p className="mt-2 text-4xl font-bold">{site.hourlyRate} €</p>
                <p className="mt-2 text-muted-foreground">
                  Alle nach Zeitaufwand abzurechnenden Arbeiten werden mit dem Stundensatz berechnet.
                </p>
              </div>
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-wider text-[#0b8036]">
                  Pauschalpreise
                </p>
                <p className="mt-2 text-4xl font-bold">Individuell</p>
                <p className="mt-2 text-muted-foreground">
                  Auf Wunsch vereinbaren wir Pauschalpreise nach Abschätzung des Gesamtaufwands im
                  konkreten Einzelfall.
                </p>
              </div>
            </div>
            <p className="mt-8 text-muted-foreground">
              Webspace-Vermietung mit oder ohne Administration ab{" "}
              <strong className="text-foreground">5 € pro Monat</strong>, je nach Umfang. Aufträge
              können telefonisch oder per E-Mail erteilt werden.
            </p>
          </div>
        </section>

        <PortfolioSection />
        <CtaBanner />
      </main>
    </>
  );
}
