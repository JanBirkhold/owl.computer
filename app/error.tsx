"use client";

import Link from "next/link";
import { useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold">Etwas ist schiefgelaufen</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
      </p>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className={cn(buttonVariants(), "bg-[#0b8036] hover:bg-[#096b2d]")}
        >
          Erneut versuchen
        </button>
        <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
