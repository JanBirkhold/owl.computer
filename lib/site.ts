export const site = {
  name: "OWL Computer",
  owner: "Kasimir Eckhardt",
  tagline: "IT-Dienstleistungen in Ostwestfalen-Lippe",
  description:
    "Persönliche IT-Beratung, Computer-Reparatur, Netzwerkeinrichtung und Webentwicklung in Barntrup, Dörentrup und der Region OWL. Fair, kompetent, direkt erreichbar.",
  url: "https://owl.computer",
  locale: "de_DE",
  phone: "0176-34934106",
  phoneHref: "tel:+4917634934106",
  email: "info@owl.computer",
  emailOwner: "keckhardt@owl.computer",
  hourlyRate: 50,
  currency: "EUR",
  addresses: {
    legal: {
      street: "Mittelstr. 63",
      city: "Barntrup",
      zip: "32683",
      country: "DE",
    },
    office: {
      street: "Lemgoer Str. 22",
      city: "Dörentrup",
      zip: "32694",
      country: "DE",
    },
  },
  geo: {
    region: "OWL",
    areaServed: [
      "Barntrup",
      "Dörentrup",
      "Lemgo",
      "Detmold",
      "Bad Salzuflen",
      "Ostwestfalen-Lippe",
    ],
    latitude: 51.989,
    longitude: 9.116,
  },
  social: {},
  copyright: `© ${new Date().getFullYear()} OWL Computer Inh. Kasimir Eckhardt`,
} as const;

export const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const heroHeadline = "Computer-Probleme? Ich helfe Ihnen — persönlich in OWL.";

export const heroIntro =
  "Langsamer PC, Virus, neuer Computer oder Firmen-IT: Ich bin Ihr direkter Ansprechpartner in Barntrup, Dörentrup und Umgebung. Am einfachsten erreichen Sie mich per Telefon.";

export const heroBullets = [
  "Persönliche Beratung — kein Callcenter",
  "Faire Preise: 50 € pro Stunde",
  "Service vor Ort in Ihrer Region",
] as const;

export const services = [
  {
    id: "os-installation",
    title: "Betriebssystem-Installation",
    description:
      "Saubere Installation von Windows, Linux oder macOS — auch parallel zu vorhandenen Systemen (Dual-Boot).",
    icon: "monitor" as const,
    image: "/images/coding.jpg",
  },
  {
    id: "troubleshooting",
    title: "Fehlerbehebung & Virenschutz",
    description:
      "Virusscan und -beseitigung, Performance-Optimierung, Überprüfung installierter Programme und Systembereinigung.",
    icon: "shield" as const,
    image: "/images/hero.jpg",
  },
  {
    id: "consulting",
    title: "Kaufberatung",
    description:
      "Individuelle Hardware-Empfehlungen für Privat, Home-Office und Unternehmen — passend zu Ihrem Budget und Einsatzzweck.",
    icon: "shopping-cart" as const,
    image: "/images/team.jpg",
  },
  {
    id: "network",
    title: "Netzwerkeinrichtung",
    description:
      "Planung und Einrichtung von LAN und WLAN — stabil, sicher und zukunftsfähig für Zuhause und Büro.",
    icon: "wifi" as const,
    image: "/images/network.jpg",
  },
  {
    id: "repair",
    title: "Reparatur & Hardware-Austausch",
    description:
      "Computer-Reparatur vor Ort oder im Service — z. B. SSD-Einbau, RAM-Upgrade, Defektanalyse und Datensicherung.",
    icon: "wrench" as const,
    image: "/images/hardware.jpg",
  },
  {
    id: "data-recovery",
    title: "Datenrettung",
    description:
      "Wiederherstellung von Dateien von Festplatten, SSDs, USB-Sticks und SD-Karten — auch nach Absturz, Formatierung oder defekter Hardware.",
    icon: "hard-drive" as const,
    image: "/images/datenphoenix/datenphoenix-2.jpg",
  },
  {
    id: "webdev",
    title: "Website-Erstellung",
    description:
      "Moderne, schnelle Websites nach Ihren Design-Vorgaben — SEO-optimiert, barrierefrei und mobilfreundlich.",
    icon: "globe" as const,
    image: "/images/coding.jpg",
  },
  {
    id: "hosting",
    title: "Webspace & Administration",
    description:
      "Webspace-Vermietung mit oder ohne Administration ab 5 €/Monat — je nach Umfang, inkl. Updates und Backups.",
    icon: "server" as const,
    image: "/images/hosting.jpg",
  },
] as const;

export const datenphoenixFeatured = {
  image: "/images/datenphoenix/datenphoenix-1.jpg",
  alt: "Datenrettung — professionelle Wiederherstellung verlorener Dateien",
  title: "Datenrettung",
  caption:
    "Ob privat oder geschäftlich — verlorene Dateien lassen sich oft wiederherstellen. Typische Fälle im Überblick:",
} as const;

export const datenphoenixGallery = [
  {
    id: "business",
    image: "/images/datenphoenix/datenphoenix-1.jpg",
    alt: "Datenrettung — verlorene Kundendatenbank wiederherstellen",
    title: "Unternehmensdaten",
    caption: "Kundendatenbank oder Firmendaten verloren? Professionelle Wiederherstellung für Unternehmen.",
  },
  {
    id: "hdd",
    image: "/images/datenphoenix/datenphoenix-2.jpg",
    alt: "Datenrettung — Festplatte nach Sturz oder Defekt",
    title: "Festplatten & SSDs",
    caption: "Festplatte runtergefallen oder nicht mehr erkannt? Rettung von HDD und SSD.",
  },
  {
    id: "photos",
    image: "/images/datenphoenix/datenphoenix-3.jpg",
    alt: "Datenrettung — verlorene Familienfotos und Erinnerungen",
    title: "Fotos & Erinnerungen",
    caption: "Gelöschte oder beschädigte Familienfotos — sensible Wiederherstellung Ihrer Erinnerungen.",
  },
  {
    id: "sd-card",
    image: "/images/datenphoenix/datenphoenix-4.jpg",
    alt: "Datenrettung — defekte SD-Karte und Speicherkarten",
    title: "SD-Karten & USB",
    caption: "Probleme mit SD-Karten, USB-Sticks oder Speicherkarten? Schnelle und sichere Hilfe.",
  },
] as const;

export const dataRecoveryIntro = {
  headline: "Datenrettung — wenn wichtige Dateien verschwunden sind",
  description:
    "Ob Festplatte, SSD, SD-Karte oder USB-Stick: Ich helfe Ihnen, verlorene Daten wiederherzustellen — diskret, erfahren und mit professionellen Werkzeugen. Je nach Schadensfall vor Ort oder im Labor.",
  highlights: [
    "Festplatten, SSDs, USB & SD-Karten",
    "Nach Löschung, Absturz oder Formatierung",
    "Fotos, Dokumente & Firmendaten",
    "Ehrliche Einschätzung vorab — keine leeren Versprechen",
  ],
} as const;

export const competencies = [
  {
    title: "Software Engineering",
    description: "B.Sc. Wirtschaftsinformatik mit Schwerpunkt Software Engineering",
  },
  {
    title: "Full-Stack Webentwicklung",
    description: "Next.js, moderne Webtechnologien, Hosting und Server-Administration",
  },
  {
    title: "IT-Infrastruktur",
    description: "Netzwerke, Server, Cloud — Einrichtung und Wartung aus einer Hand",
  },
  {
    title: "Persönlicher Service",
    description: "Direkter Draht, faire Preise, Lösungen statt Fachchinesisch",
  },
] as const;

export const trustPoints = [
  {
    title: "Persönlich erreichbar",
    description: "Sie sprechen direkt mit mir — per Telefon oder E-Mail. Kein Warteschleifen-Musik.",
  },
  {
    title: "Klare Preise",
    description: "50 € pro Stunde. Oder wir vereinbaren einen Festpreis — vorher, ohne Überraschung.",
  },
  {
    title: "Aus der Region",
    description: "Ich komme zu Ihnen nach Barntrup, Dörentrup, Lemgo und in ganz OWL.",
  },
  {
    title: "Alles aus einer Hand",
    description: "Vom langsamen PC bis zur Firmen-Website — ein Ansprechpartner für alle IT-Fragen.",
  },
] as const;

export const portfolioProjects = [
  {
    name: "aquafotos.com",
    url: "https://aquafotos.com",
    title: "AquaFotos",
    description: "Unterwasser-Fotografie mit Online-Shop und Gutschein-System",
    image: "/images/references/aquafotos.jpg",
    imageAlt: "Vorschau der Website aquafotos.com — Unterwasser-Fotos",
  },
  {
    name: "katysart.com",
    url: "https://katysart.com",
    title: "KatysArt",
    description: "Künstlerinnen-Portfolio mit Werkgalerie und Malkursen",
    image: "/images/references/katysart.jpg",
    imageAlt: "Vorschau der Website katysart.com — Kunst & Malkurse",
  },
  {
    name: "raimundschmoll.de",
    url: "https://raimundschmoll.de",
    title: "Raimund Schmoll Consulting",
    description: "Unternehmensberatung mit Leistungsübersicht und Kontakt",
    image: "/images/references/raimundschmoll.jpg",
    imageAlt: "Vorschau der Website raimundschmoll.de — Consulting",
  },
  {
    name: "sawasdee-spa.com",
    url: "https://sawasdee-spa.com",
    title: "SAWASDEE Thai Massage & Spa",
    description: "Wellness-Studio mit Terminbuchung und Preisübersicht",
    image: "/images/references/sawasdee-spa.jpg",
    imageAlt: "Vorschau der Website sawasdee-spa.com — Thai Massage & Spa",
  },
] as const;

export const aboutText = {
  intro:
    "Ich habe beruflich viel mit Computern zu tun, aber mein Interesse daran geht noch darüber hinaus, weshalb ich nebenberuflich diverse IT-Dienstleistungen anbiete.",
  extended:
    "Als Inhaber von OWL Computer verbinde ich akademisches Fachwissen (B.Sc. Wirtschaftsinformatik) mit praxisnaher Erfahrung. Ob Privatperson, Selbstständiger oder kleines Unternehmen — ich finde pragmatische Lösungen, die zu Ihrem Budget und Ihren Anforderungen passen. Speziellere Anliegen, die hier nicht aufgeführt sind? Sprechen Sie mich an — wir finden bestimmt eine Lösung.",
  qualification: "B.Sc. Wirtschaftsinformatik — Schwerpunkt Software Engineering",
} as const;

export const imageCredits = [
  {
    file: "hero.jpg",
    photographer: "ThisIsEngineering",
    url: "https://www.pexels.com/photo/person-using-macbook-on-white-table-3861969/",
  },
  {
    file: "hardware.jpg",
    photographer: "Negative Space",
    url: "https://www.pexels.com/photo/turned-on-laptop-computer-442150/",
  },
  {
    file: "network.jpg",
    photographer: "Brett Sayles",
    url: "https://www.pexels.com/photo/ethernet-cables-plugged-in-network-switch-2881224/",
  },
  {
    file: "hosting.jpg",
    photographer: "Brett Sayles",
    url: "https://www.pexels.com/photo/server-racks-on-data-center-4508751/",
  },
  {
    file: "coding.jpg",
    photographer: "Pixabay",
    url: "https://www.pexels.com/photo/turned-on-gray-laptop-computer-270632/",
  },
  {
    file: "team.jpg",
    photographer: "fauxels",
    url: "https://www.pexels.com/photo/photo-of-people-near-wooden-table-3184292/",
  },
] as const;

export const contactSubjects = [
  "Allgemeine Anfrage",
  "Computer-Reparatur",
  "Datenrettung",
  "Virus / Fehlerbehebung",
  "Kaufberatung",
  "Netzwerk / WLAN",
  "Website-Erstellung",
  "Webspace / Hosting",
  "IT-Infrastruktur Unternehmen",
  "Sonstiges",
] as const;
