"use server";

import { z } from "zod";
import { sendContactMail } from "@/lib/mail";
import { site } from "@/lib/site";

const contactSubjectValues = [
  "Allgemeine Anfrage",
  "Computer-Reparatur",
  "Virus / Fehlerbehebung",
  "Kaufberatung",
  "Netzwerk / WLAN",
  "Website-Erstellung",
  "Webspace / Hosting",
  "IT-Infrastruktur Unternehmen",
  "Sonstiges",
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  phone: z
    .string()
    .trim()
    .min(6, "Bitte geben Sie Ihre Telefonnummer ein — für den Rückruf."),
  subject: z.enum(contactSubjectValues, {
    message: "Bitte wählen Sie ein Anliegen.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie kurz Ihr Anliegen.")
    .max(5000, "Ihre Nachricht ist zu lang."),
  privacy: z.literal("true", {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu.",
  }),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    privacy: formData.get("privacy"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Bitte korrigieren Sie die markierten Felder.",
      fieldErrors: fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, phone, subject, message } = parsed.data;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? site.email;

  const emailBody = `
Neue Kontaktanfrage über owl.computer

Name: ${name}
E-Mail: ${email}
Telefon: ${phone}
Anliegen: ${subject}

Nachricht:
${message}
`.trim();

  try {
    await sendContactMail({
      to: toEmail,
      replyTo: email,
      subject: `[OWL Computer] ${subject} — ${name}`,
      text: emailBody,
    });
  } catch (error) {
    console.error("[contact-form]", error);
    return {
      success: false,
      message: `Die Nachricht konnte nicht gesendet werden. Bitte rufen Sie mich direkt an: ${site.phone}`,
    };
  }

  return {
    success: true,
    message:
      "Vielen Dank! Ihre Nachricht wurde übermittelt. Ich melde mich schnellstmöglich bei Ihnen.",
  };
}
