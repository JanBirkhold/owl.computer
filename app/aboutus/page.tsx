import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Mail, Phone } from "lucide-react";
import { SiteHeader } from "@/components/sections/site-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { StructuredData } from "@/components/structured-data";
import { buttonVariants } from "@/components/ui/button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { aboutText, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Über mich",
  description:
    "Kasimir Eckhardt — Inhaber von OWL Computer. B.Sc. Wirtschaftsinformatik, Schwerpunkt Software Engineering. Persönlicher IT-Service in Ostwestfalen-Lippe.",
  path: "/aboutus",
});

export default function UeberMichPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Startseite", path: "/" },
          { name: "Über mich", path: "/aboutus" },
        ])}
      />
      <SiteHeader currentPath="/aboutus" />
      <main id="main-content">
        <section className="border-b bg-muted/30 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <nav aria-label="Brotkrumen" className="mb-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-[#0b8036]">
                Startseite
              </Link>
              <span aria-hidden="true"> / </span>
              <span>Über mich</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Über mich</h1>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-2xl border shadow-lg">
              <Image
                src="/images/kasimir.jpg"
                alt={`Portrait von ${site.owner}, Inhaber von ${site.name}`}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div>
              <p className="text-2xl font-semibold">{site.owner}</p>
              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="size-5 shrink-0 text-[#0b8036]" aria-hidden="true" />
                <span>{aboutText.qualification}</span>
              </div>

              <p className="mt-6 text-lg leading-relaxed">{aboutText.intro}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {aboutText.extended}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className={cn(buttonVariants({ size: "lg" }), "btn-call bg-[#0b8036] hover:bg-[#096b2d]")}
                >
                  <Phone className="size-6" aria-hidden="true" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-h-12 text-lg")}
                >
                  <Mail className="size-5" aria-hidden="true" />
                  E-Mail schreiben
                </a>
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                Details zu meinen{" "}
                <Link href="/service" className="text-[#0b8036] hover:underline">
                  Dienstleistungen
                </Link>{" "}
                finden Sie auf der Leistungsseite.
              </p>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
    </>
  );
}
