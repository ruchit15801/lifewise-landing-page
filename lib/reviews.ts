/**
 * Real customer reviews — page UI + Product / SoftwareApplication schema.
 * Google: reviews must be genuine and visible on the page.
 *
 * Paste your real reviews below. Leave empty until you have them.
 */

export type AppReview = {
  author: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  body: string;
  /** ISO date YYYY-MM-DD */
  datePublished: string;
};

/** TODO: Owner will provide real reviews — do not invent. */
export const APP_REVIEWS: AppReview[] = [];

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

export const HAS_APP_REVIEWS = APP_REVIEWS.length > 0;

export const APP_AGGREGATE_RATING = HAS_APP_REVIEWS
  ? {
      ratingValue: round1(
        APP_REVIEWS.reduce((sum, r) => sum + r.rating, 0) / APP_REVIEWS.length
      ),
      reviewCount: APP_REVIEWS.length,
      ratingCount: APP_REVIEWS.length,
      bestRating: 5 as const,
      worstRating: 1 as const
    }
  : null;
