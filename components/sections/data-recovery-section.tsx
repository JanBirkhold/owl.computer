import Image from "next/image";
import { Check, HardDrive } from "lucide-react";
import { PhoneCallButton } from "@/components/ui/phone-call-button";
import { dataRecoveryIntro, datenphoenixFeatured, datenphoenixGallery } from "@/lib/site";
import { cn } from "@/lib/utils";

type GalleryTileProps = {
  image: string;
  alt: string;
  title: string;
  caption: string;
  aspectClass: string;
  sizes: string;
  imagePosition?: string;
};

function GalleryTile({
  image,
  alt,
  title,
  caption,
  aspectClass,
  sizes,
  imagePosition = "object-center",
}: GalleryTileProps) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-transform hover:-translate-y-0.5">
      <div className={cn("relative overflow-hidden", aspectClass)}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-[1.02]",
            imagePosition,
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
        <figcaption className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">{title}</p>
        </figcaption>
      </div>
      <blockquote className="border-t border-white/10 px-4 py-3 text-base leading-relaxed text-white/75">
        {caption}
      </blockquote>
    </figure>
  );
}

export function DataRecoverySection() {
  const [featured, second, third, fourth] = datenphoenixGallery;
  const bottomTiles = [second, third, fourth, featured];

  return (
    <section
      className="relative overflow-hidden bg-[#0a1628] py-16 text-white sm:py-20"
      aria-labelledby="data-recovery-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(11,128,54,0.15),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm font-medium text-sky-200">
              <HardDrive className="size-4" aria-hidden="true" />
              Leistung · Datenrettung
            </div>
            <h2 id="data-recovery-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
              {dataRecoveryIntro.headline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              {dataRecoveryIntro.description}
            </p>

            <ul className="mt-6 space-y-3">
              {dataRecoveryIntro.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-white/90">
                  <Check className="mt-1 size-5 shrink-0 text-[#a2ce90]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <PhoneCallButton
                label="Sofort anrufen:"
                className="w-full bg-[#0b8036] hover:bg-[#096b2d] sm:w-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <GalleryTile
              image={datenphoenixFeatured.image}
              alt={datenphoenixFeatured.alt}
              title={datenphoenixFeatured.title}
              caption={datenphoenixFeatured.caption}
              aspectClass="aspect-[2.4/1]"
              imagePosition="object-[center_88%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {bottomTiles.map((item, index) => (
                <GalleryTile
                  key={`${item.id}-${index}`}
                  image={item.image}
                  alt={item.alt}
                  title={item.title}
                  caption={item.caption}
                  aspectClass="aspect-square"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
