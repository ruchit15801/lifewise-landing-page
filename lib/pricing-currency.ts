/** Listed LifeWise prices are INR. Other currencies are ECB conversions for comparison. */

export const DISPLAY_CURRENCIES = [
  { code: "INR", label: "INR", locale: "en-IN" },
  { code: "USD", label: "USD", locale: "en-US" },
  { code: "EUR", label: "EUR", locale: "en-IE" },
  { code: "GBP", label: "GBP", locale: "en-GB" }
] as const;

export type DisplayCurrency = (typeof DISPLAY_CURRENCIES)[number]["code"];

export type InrRates = Record<DisplayCurrency, number>;

export const INR_ONLY_RATES: InrRates = {
  INR: 1,
  USD: 0,
  EUR: 0,
  GBP: 0
};

const FRANKFURTER_URL =
  "https://api.frankfurter.app/latest?from=INR&to=USD,EUR,GBP";

export async function fetchInrRates(): Promise<{
  rates: InrRates;
  asOf: string | null;
}> {
  const url = typeof window === "undefined" ? FRANKFURTER_URL : "/api/fx";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`FX lookup failed (${res.status})`);
  }
  const data = (await res.json()) as {
    date?: string;
    rates?: Partial<Record<DisplayCurrency, number>>;
  };
  const usd = data.rates?.USD;
  const eur = data.rates?.EUR;
  const gbp = data.rates?.GBP;
  if (!usd || !eur || !gbp) {
    throw new Error("FX lookup missing rates");
  }
  return {
    rates: { INR: 1, USD: usd, EUR: eur, GBP: gbp },
    asOf: data.date ?? null
  };
}

export function formatPlanPrice(
  amountInr: number,
  currency: DisplayCurrency,
  rates: InrRates
) {
  const rate = rates[currency];
  const useCurrency = currency === "INR" || rate > 0 ? currency : "INR";
  const locale =
    DISPLAY_CURRENCIES.find((c) => c.code === useCurrency)?.locale ?? "en-IN";
  const converted = useCurrency === "INR" ? amountInr : amountInr * rate;
  const fraction = useCurrency === "INR" ? 0 : 2;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: useCurrency,
    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction
  }).format(converted);
}
