import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-2 border-white/10 bg-[#0a0a0a] pb-24 text-white md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-semibold text-white">{site.name}</p>
            <p className="mt-2 text-lg leading-relaxed text-white/90">{site.tagline}</p>
            <p className="mt-4 text-base text-white/70">{site.copyright}</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Kontakt</p>
            <ul className="mt-3 space-y-3 text-lg">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 font-medium text-[#a2ce90] underline underline-offset-4"
                >
                  <Phone className="size-5 shrink-0" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#a2ce90]"
                >
                  <Mail className="size-5 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/90">
                <MapPin className="mt-1 size-5 shrink-0" aria-hidden="true" />
                <span>
                  {site.addresses.office.street}, {site.addresses.office.zip}{" "}
                  {site.addresses.office.city}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Seiten</p>
            <ul className="mt-3 space-y-2 text-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#a2ce90] hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/impressum" className="hover:text-[#a2ce90] hover:underline">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-[#a2ce90] hover:underline">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="bg-white/10" />
      <div className="mx-auto max-w-6xl px-4 py-4 text-center text-base text-white/70 sm:px-6">
        IT-Service in {site.geo.areaServed.slice(0, 4).join(", ")} und Umgebung
      </div>
    </footer>
  );
}
