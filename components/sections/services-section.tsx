import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  HardDrive,
  Monitor,
  Server,
  Shield,
  ShoppingCart,
  Wifi,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const iconMap: Record<(typeof services)[number]["icon"], LucideIcon> = {
  monitor: Monitor,
  shield: Shield,
  "shopping-cart": ShoppingCart,
  wifi: Wifi,
  wrench: Wrench,
  "hard-drive": HardDrive,
  globe: Globe,
  server: Server,
};

type ServicesSectionProps = {
  showAll?: boolean;
  compact?: boolean;
};

export function ServicesSection({ showAll = false, compact = false }: ServicesSectionProps) {
  const displayed = showAll ? services : services.slice(0, 6);

  return (
    <section className="py-16 sm:py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 id="services-heading" className="text-3xl font-bold sm:text-4xl">
            Wobei ich Ihnen helfen kann
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Von Reparatur bis Netzwerk — ich finde die passende Lösung für Sie.
          </p>
        </div>

        <div
          className={cn(
            "mt-10 grid gap-6",
            compact ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
          )}
        >
          {displayed.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.id} className="overflow-hidden border-2">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={cn(
                      "object-cover",
                      "imagePosition" in service && service.imagePosition,
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex size-12 items-center justify-center rounded-xl bg-[#0b8036] text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                </div>
                <CardHeader className="gap-3 p-6">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg leading-relaxed text-foreground/80">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-10 text-center">
            <Link
              href="/service"
              className={cn(
                buttonVariants({ size: "lg" }),
                "min-h-12 text-lg",
              )}
            >
              Alle Leistungen & Preise ansehen
            </Link>
          </div>
        )}

        {!showAll && (
          <p className="mt-6 text-center text-xl text-muted-foreground">
            Erstgespräch unverbindlich —{" "}
            <a href={site.phoneHref} className="content-link text-xl font-bold">
              rufen Sie mich gerne an
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
