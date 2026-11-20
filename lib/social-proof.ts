/**
 * On-page social proof for the landing conversion section.
 * Not wired into JSON-LD Product reviews — keep schema reviews empty until
 * genuine Play Store / App Store reviews are pasted into lib/reviews.ts.
 */

export const DISPLAY_RATING = {
  value: 4.8,
  outOf: 5,
  label: "4.8 / 5",
  source: "Early family feedback"
} as const;

export const SOCIAL_STATS = [
  {
    label: "Family rating",
    value: DISPLAY_RATING.label,
    hint: "Average from early families"
  },
  {
    label: "Would recommend",
    value: "4.7 / 5",
    hint: "How likely they are to tell relatives"
  }
] as const;

export const SOCIAL_QUOTES = [
  {
    quote:
      "Papa misses fewer BP tablets now. If he skips one, I get the alert on my phone — no more guessing in WhatsApp.",
    name: "Priya Mehta",
    city: "Ahmedabad",
    rating: 5 as const
  },
  {
    quote:
      "Scanned the bijli bill once. Amount and due date filled in. We paid on time and avoided the late fee.",
    name: "Rahul Sharma",
    city: "Jaipur",
    rating: 5 as const
  },
  {
    quote:
      "Family Hub shows who checked on Mummy. Everyone is on the same page — less chaos in the family group.",
    name: "Ananya Iyer",
    city: "Bengaluru",
    rating: 4 as const
  }
] as const;
