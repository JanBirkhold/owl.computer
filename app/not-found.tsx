import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium text-[#0b8036]">404</p>
      <h1 className="mt-2 text-3xl font-bold">Seite nicht gefunden</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <Link href="/" className={cn(buttonVariants(), "mt-6 bg-[#0b8036] hover:bg-[#096b2d]")}>
        Zur Startseite
      </Link>
    </main>
  );
}
