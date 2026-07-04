import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { brand } from "@/lib/config";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, email, subject, travelDate, message } = data;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    // ── SMTP is configured via environment variables (see .env.example). ──
    // Until these are set, we log the enquiry so nothing is lost, and
    // return success so the UI doesn't break during development.
    const hasSmtpConfig =
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (!hasSmtpConfig) {
      console.log("[contact] SMTP not configured — enquiry received:", {
        name,
        phone,
        email,
        subject,
        travelDate,
        message,
      });
      return NextResponse.json({ ok: true, delivered: false });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${brand.name} Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || brand.email,
      replyTo: email || undefined,
      subject: `New enquiry: ${subject || "General"} — ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "-"}`,
        `Subject: ${subject || "-"}`,
        `Travel date: ${travelDate || "-"}`,
        `Message: ${message || "-"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ error: "Failed to process enquiry." }, { status: 500 });
  }
}
