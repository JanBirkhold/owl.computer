import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type PhoneCallButtonProps = {
  className?: string;
  label?: string;
  showIcon?: boolean;
};

export function PhoneCallButton({
  className,
  label = "Jetzt anrufen:",
  showIcon = true,
}: PhoneCallButtonProps) {
  return (
    <a
      href={site.phoneHref}
      aria-label={`${label} ${site.phone}`}
      className={cn(
        "btn-call flex flex-col items-center gap-0.5 text-center sm:flex-row sm:gap-3",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2">
        {showIcon ? <Phone className="size-7 shrink-0" aria-hidden="true" /> : null}
        {label}
      </span>
      <span className="tabular-nums">{site.phone}</span>
    </a>
  );
}
