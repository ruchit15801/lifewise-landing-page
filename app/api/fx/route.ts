import { NextResponse } from "next/server";

const FRANKFURTER_URL =
  "https://api.frankfurter.app/latest?from=INR&to=USD,EUR,GBP";

export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(FRANKFURTER_URL, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return NextResponse.json(
        { error: "fx_upstream_failed" },
        { status: 502 }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "fx_unavailable" }, { status: 502 });
  }
}
