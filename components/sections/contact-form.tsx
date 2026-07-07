"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Loader2, Phone, Send } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact";
import { contactSubjects, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

type ContactFormProps = {
  id?: string;
};

export function ContactForm({ id = "contact-form" }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    const isFallback = state.fallback === true;

    return (
      <div
        role="status"
        className={cn(
          "rounded-2xl border-2 p-8 text-center",
          isFallback
            ? "border-orange-500 bg-orange-50"
            : "border-[#0b8036]/40 bg-[#0b8036]/5",
        )}
      >
        <p
          className={cn(
            "text-xl font-semibold",
            isFallback ? "text-orange-900" : "text-[#0b8036]",
          )}
        >
          {state.message}
        </p>
        <p className="mt-3 text-lg text-muted-foreground">
          {isFallback
            ? "Am schnellsten erreichen Sie mich so:"
            : "Bei dringenden Fragen rufen Sie mich direkt an:"}
        </p>
        <a
          href={site.phoneHref}
          className={cn(
            "mt-4 inline-flex min-h-12 items-center gap-2 text-2xl font-bold underline underline-offset-4",
            isFallback ? "text-orange-700 hover:text-orange-900" : "text-[#0b8036]",
          )}
        >
          <Phone className="size-6" aria-hidden="true" />
          {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form id={id} action={formAction} className="senior-form space-y-6" noValidate>
      <p className="text-lg text-muted-foreground">
        Kein Formular nötig?{" "}
        <a href={site.phoneHref} className="content-link text-xl font-bold">
          Einfach anrufen: {site.phone}
        </a>
      </p>

      {state.message && !state.success && (
        <p role="alert" className="field-error rounded-lg bg-destructive/10 px-4 py-3 text-destructive">
          {state.message}
        </p>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Ihr Name *</Label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          aria-invalid={!!state.fieldErrors?.name}
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
          placeholder="z. B. Max Mustermann"
        />
        {state.fieldErrors?.name && (
          <p id="name-error" className="field-error text-destructive">
            {state.fieldErrors.name[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Ihre Telefonnummer *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          aria-invalid={!!state.fieldErrors?.phone}
          aria-describedby="phone-hint"
          placeholder="z. B. 0176 12345678"
        />
        <p id="phone-hint" className="text-base text-muted-foreground">
          Damit ich Sie zurückrufen kann — das ist der schnellste Weg.
        </p>
        {state.fieldErrors?.phone && (
          <p className="field-error text-destructive">{state.fieldErrors.phone[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Ihre E-Mail-Adresse *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={!!state.fieldErrors?.email}
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
          placeholder="z. B. name@email.de"
        />
        {state.fieldErrors?.email && (
          <p id="email-error" className="field-error text-destructive">
            {state.fieldErrors.email[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Worum geht es? *</Label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          aria-invalid={!!state.fieldErrors?.subject}
          aria-describedby={state.fieldErrors?.subject ? "subject-error" : undefined}
          className="flex min-h-12 w-full rounded-lg border-2 border-input bg-transparent px-4 text-lg outline-none focus-visible:border-[#0b8036] focus-visible:ring-[3px] focus-visible:ring-[#0b8036]/30"
        >
          <option value="" disabled>
            — Bitte auswählen —
          </option>
          {contactSubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        {state.fieldErrors?.subject && (
          <p id="subject-error" className="field-error text-destructive">
            {state.fieldErrors.subject[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Ihre Nachricht *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="min-h-32 text-lg"
          aria-invalid={!!state.fieldErrors?.message}
          aria-describedby="message-hint"
          placeholder="Beschreiben Sie kurz Ihr Problem …"
        />
        <p id="message-hint" className="text-base text-muted-foreground">
          Ein oder zwei Sätze reichen — ich melde mich bei Ihnen.
        </p>
        {state.fieldErrors?.message && (
          <p className="field-error text-destructive">{state.fieldErrors.message[0]}</p>
        )}
      </div>

      <div className="flex items-start gap-4 rounded-xl border-2 border-input p-4">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          value="true"
          required
          aria-invalid={!!state.fieldErrors?.privacy}
          aria-describedby={state.fieldErrors?.privacy ? "privacy-error" : undefined}
          className="mt-1 size-6 shrink-0 rounded border-2 border-input accent-[#0b8036]"
        />
        <div>
          <Label htmlFor="privacy" className="text-base font-normal leading-relaxed">
            Ich habe die{" "}
            <Link href="/datenschutz" className="content-link">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
            gespeichert werden. *
          </Label>
          {state.fieldErrors?.privacy && (
            <p id="privacy-error" className="field-error mt-2 text-destructive">
              {state.fieldErrors.privacy[0]}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="btn-call w-full bg-[#0b8036] hover:bg-[#096b2d]"
      >
        {pending ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
            Wird gesendet …
          </>
        ) : (
          <>
            <Send className="size-5" aria-hidden="true" />
            Nachricht abschicken
          </>
        )}
      </Button>
    </form>
  );
}
