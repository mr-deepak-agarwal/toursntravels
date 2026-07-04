import { NextRequest, NextResponse } from "next/server";

// TODO before launch: wire this to one (or more) of:
//  - Resend / SMTP email to the client's inbox
//  - WhatsApp Business API / Twilio to auto-notify on WhatsApp
//  - Google Sheets (via a service account) as a simple CRM log
//  - Formspree, if you want zero backend maintenance (see codeq.tech's own setup)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("New enquiry:", body);

    // Example Formspree forwarding (uncomment and set the endpoint):
    // await fetch("https://formspree.io/f/YOUR_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
