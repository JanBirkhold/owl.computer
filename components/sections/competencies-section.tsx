import { GraduationCap, Layers, Network, UserCheck } from "lucide-react";
import { competencies } from "@/lib/site";

const icons = [GraduationCap, Layers, Network, UserCheck];

export function CompetenciesSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="competencies-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="competencies-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Kompetenzen & Erfahrung
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kasimir Eckhardt verbindet Studium und Praxis: Wirtschaftsinformatik mit Schwerpunkt
              Software Engineering — plus jahrelange Erfahrung in IT-Support, Webentwicklung und
              Infrastruktur.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {competencies.map((item, index) => {
              const Icon = icons[index] ?? GraduationCap;
              return (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-xl border bg-card p-5 shadow-sm"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#a2ce90]/30 text-[#0b8036]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
