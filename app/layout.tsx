import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { SiteFooter } from "@/components/sections/site-footer";
import { StickyPhoneCta } from "@/components/sections/sticky-phone-cta";
import { StructuredData } from "@/components/structured-data";
import { createMetadata, localBusinessJsonLd, servicesJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = createMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${ubuntu.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[#0b8036] focus:px-4 focus:py-2 focus:text-lg focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <StructuredData data={[localBusinessJsonLd(), servicesJsonLd()]} />
        {children}
        <SiteFooter />
        <StickyPhoneCta />
      </body>
    </html>
  );
}
