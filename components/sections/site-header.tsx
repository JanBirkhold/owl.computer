"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  currentPath?: string;
};

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#0b8036]/30 bg-[#0a0a0a]">
      <div className="mx-auto flex min-h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} Startseite`}>
          <Image
            src="/logo.svg"
            alt=""
            width={140}
            height={57}
            className="h-11 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-3 text-lg font-medium transition-colors hover:bg-white/10 hover:text-[#a2ce90]",
                currentPath === link.href
                  ? "bg-white/10 text-[#a2ce90]"
                  : "text-white",
              )}
              aria-current={currentPath === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden bg-[#0b8036] text-lg text-white hover:bg-[#096b2d] sm:inline-flex",
            )}
            aria-label={`Anrufen: ${site.phone}`}
          >
            <Phone className="size-5" aria-hidden="true" />
            {site.phone}
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  className="min-h-11 border-white/30 bg-white/10 text-base text-white hover:bg-white/20 lg:hidden"
                  aria-label="Menü öffnen"
                />
              }
            >
              <Menu className="size-5" aria-hidden="true" />
              Menü
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#111] text-white sm:max-w-md">
              <SheetHeader>
                <SheetTitle className="text-xl text-white">Menü</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-4 text-xl font-medium transition-colors hover:bg-white/10",
                      currentPath === link.href ? "bg-white/10 text-[#a2ce90]" : "text-white",
                    )}
                    aria-current={currentPath === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={site.phoneHref}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "btn-call mt-6 flex-col bg-[#0b8036] text-white hover:bg-[#096b2d] sm:flex-row",
                  )}
                  aria-label={`Anrufen: ${site.phone}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="size-6" aria-hidden="true" />
                    Anrufen:
                  </span>
                  <span className="tabular-nums">{site.phone}</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
