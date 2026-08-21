import type { MetadataRoute } from "next";
import { PLAY_APP_TITLE, PLAY_SHORT_DESCRIPTION } from "@/lib/play-listing";
import { SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: PLAY_APP_TITLE,
    short_name: SITE_NAME,
    description: PLAY_SHORT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#6D5DF6",
    lang: "en-IN",
    orientation: "portrait",
    categories: ["lifestyle", "productivity", "health"],
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=com.lifewise",
        id: "com.lifewise"
      }
    ],
    prefer_related_applications: false
  };
}
