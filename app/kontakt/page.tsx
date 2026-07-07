import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/site-header";
import { ContactSection } from "@/components/sections/contact-section";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Kontakt",
  description:
    "Kontaktieren Sie OWL Computer: Telefon 0176-34934106, info@owl.computer oder Kontaktformular. IT-Service in Barntrup, Dörentrup und OWL.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Startseite", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />
      <SiteHeader currentPath="/kontakt" />
      <main id="main-content">
        <section className="border-b bg-muted/30 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <nav aria-label="Brotkrumen" className="mb-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-[#0b8036]">
                Startseite
              </Link>
              <span aria-hidden="true"> / </span>
              <span>Kontakt</span>
            </nav>
            <h1 className="text-4xl font-bold sm:text-5xl">Kontakt</h1>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
              Am einfachsten erreichen Sie mich per Telefon unter{" "}
              <a href="tel:+4917634934106" className="content-link font-bold">
                0176-34934106
              </a>
              . Alternativ nutzen Sie das Formular weiter unten.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
}
