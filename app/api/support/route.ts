import { NextResponse } from "next/server";
import { SUPPORT_EMAIL } from "@/lib/support";

export const runtime = "nodejs";

type SupportPayload = {
  name: string;
  email: string;
  phone: string;
  city?: string;
  topic: string;
  message: string;
  website?: string;
};

const rateLimit = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count += 1;
  return false;
}

function validate(body: Partial<SupportPayload>) {
  const errors: string[] = [];
  if (!body.name || body.name.trim().length < 2) errors.push("Name is required.");
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push("Valid email is required.");
  }
  if (!body.phone || body.phone.replace(/\D/g, "").length < 10) {
    errors.push("Valid 10-digit Indian phone number is required.");
  }
  if (!body.topic?.trim()) errors.push("Please select a topic.");
  if (!body.message || body.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters.");
  }
  if (body.website) errors.push("Spam detected.");
  return errors;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again in an hour or WhatsApp us." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as Partial<SupportPayload>;
    const errors = validate(body);
    if (errors.length) {
      return NextResponse.json({ ok: false, error: errors.join(" ") }, { status: 400 });
    }

    const payload = {
      name: body.name!.trim(),
      email: body.email!.trim(),
      phone: body.phone!.trim(),
      city: body.city?.trim() || "Not provided",
      topic: body.topic!.trim(),
      message: body.message!.trim(),
      _subject: `LifeWise Support: ${body.topic}`,
      _template: "table",
      _captcha: "false",
      _replyto: body.email!.trim()
    };

    const res = await fetch(`https://formsubmit.co/ajax/${SUPPORT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("FormSubmit error:", text);
      return NextResponse.json(
        {
          ok: false,
          error: `Could not send email. Please WhatsApp +91 63538 91986 or email ${SUPPORT_EMAIL} directly.`
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Your request was sent to support@lifewiseee.com. We will reply within 24 hours."
    });
  } catch (err) {
    console.error("Support API error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try WhatsApp or call us." },
      { status: 500 }
    );
  }
}
