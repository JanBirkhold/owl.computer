export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <div className="size-8 animate-spin rounded-full border-4 border-[#0b8036]/20 border-t-[#0b8036]" />
      <span className="sr-only">Seite wird geladen …</span>
    </div>
  );
}
