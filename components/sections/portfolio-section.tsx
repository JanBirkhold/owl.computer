import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PhoneCallButton } from "@/components/ui/phone-call-button";
import { portfolioProjects } from "@/lib/site";

export function PortfolioSection() {
  return (
    <section className="border-y-2 bg-muted/40 py-16 sm:py-20" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 id="portfolio-heading" className="text-3xl font-bold sm:text-4xl">
            Referenz-Websites
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Websites, die ich für Kunden umgesetzt habe — klicken Sie auf eine Vorschau, um die
            Seite live anzusehen.
          </p>
        </div>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2">
          {portfolioProjects.map((project) => (
            <li key={project.url}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border-2 bg-card shadow-sm transition-colors hover:border-[#0b8036]/40 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg bg-black/60 px-3 py-1.5 text-sm font-medium text-white">
                    Live ansehen
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-sm font-medium uppercase tracking-wide text-[#0b8036]">
                    {project.name}
                  </p>
                  <h3 className="mt-1 text-xl font-bold group-hover:text-[#0b8036]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <span className="sr-only">(öffnet in neuem Tab)</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border-2 border-[#0b8036]/20 bg-[#0b8036]/5 p-6 text-center sm:p-8">
          <p className="text-xl font-semibold">Sie möchten auch eine Website?</p>
          <p className="mt-2 text-lg text-muted-foreground">
            Ich erstelle moderne, schnelle Websites nach Ihren Wünschen — Festpreis nach Absprache.
          </p>
          <div className="mt-6 flex justify-center">
            <PhoneCallButton
              label="Beratung anfragen:"
              className="bg-[#0b8036] text-white hover:bg-[#096b2d]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
