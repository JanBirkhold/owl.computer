import { Award, Clock, MapPin, Phone } from "lucide-react";
import { trustPoints } from "@/lib/site";

const icons = [Phone, Clock, MapPin, Award];

export function TrustSection() {
  return (
    <section className="border-y-2 bg-muted/50 py-16 sm:py-20" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 id="trust-heading" className="text-3xl font-bold sm:text-4xl">
            Warum Kunden OWL Computer vertrauen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            Persönlicher IT-Service — fair, verständlich und aus der Region.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {trustPoints.map((point, index) => {
            const Icon = icons[index] ?? Phone;
            return (
              <li
                key={point.title}
                className="rounded-2xl border-2 bg-background p-6"
              >
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-[#0b8036]/10 text-[#0b8036]">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
