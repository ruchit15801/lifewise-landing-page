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
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon.png",
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
