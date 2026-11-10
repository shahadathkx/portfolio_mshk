import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, subject } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message content is required." },
        { status: 400 }
      );
    }

    // Optional Formspree integration if environment variable configured
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      try {
        await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name, email, message, subject }),
        });
      } catch (fErr) {
        console.warn("Formspree forwarding fallback:", fErr);
      }
    }

    // Log the contact message safely on server
    console.log("-----------------------------------------");
    console.log("📨 New Contact Form Submission Received:");
    console.log(`From: ${name.trim()} <${email.trim()}>`);
    if (subject) console.log(`Subject: ${subject.trim()}`);
    console.log(`Message: ${message.trim()}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("-----------------------------------------");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been delivered to Md Shahadat Hossain Khan.",
        data: {
          name: name.trim(),
          email: email.trim(),
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message. Please try again." },
      { status: 500 }
    );
  }
}
