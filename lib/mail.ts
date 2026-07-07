import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

type SendMailInput = {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
};

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  return { host, port, secure, user, pass };
}

let transporter: Transporter | null = null;

function getTransporter() {
  const config = getSmtpConfig();
  if (!config) return null;

  transporter ??= nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  return transporter;
}

export function isSmtpConfigured() {
  return getSmtpConfig() !== null;
}

export async function sendContactMail({ to, replyTo, subject, text }: SendMailInput) {
  const transport = getTransporter();
  if (!transport) {
    throw new Error("SMTP ist nicht konfiguriert.");
  }

  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;

  await transport.sendMail({
    from,
    to,
    replyTo,
    subject,
    text,
  });
}
