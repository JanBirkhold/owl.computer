import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageMeta): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${site.name} — ${site.tagline}`
      : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    authors: [{ name: site.owner, url: site.url }],
    creator: site.owner,
    publisher: site.name,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    icons: {
      icon: [
        { url: "/logo.svg", type: "image/svg+xml" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
      shortcut: "/logo.svg",
    },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${site.name} Logo`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
    keywords: [
      "IT-Dienstleistungen",
      "Computer Reparatur",
      "OWL",
      "Ostwestfalen-Lippe",
      "Barntrup",
      "Dörentrup",
      "Lemgo",
      "Webentwicklung",
      "Netzwerk",
      "IT Support",
      "Kasimir Eckhardt",
    ],
    other: {
      "geo.region": "DE-NW",
      "geo.placename": site.addresses.office.city,
      "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
      ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/og-image.png`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addresses.legal.street,
      addressLocality: site.addresses.legal.city,
      postalCode: site.addresses.legal.zip,
      addressCountry: site.addresses.legal.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.geo.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    founder: {
      "@type": "Person",
      name: site.owner,
      jobTitle: "IT-Dienstleister & Software Engineer",
      email: site.emailOwner,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [],
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      "Betriebssystem-Installation",
      "Fehlerbehebung & Virenschutz",
      "Kaufberatung",
      "Netzwerkeinrichtung",
      "Computer-Reparatur",
      "Website-Erstellung",
      "Webspace & Administration",
    ].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name,
        provider: { "@id": `${site.url}/#business` },
        areaServed: site.geo.region,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
