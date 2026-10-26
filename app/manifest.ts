import type { MetadataRoute } from "next";
import { PLAY_APP_TITLE, PLAY_PACKAGE_ID, PLAY_SHORT_DESCRIPTION } from "@/lib/play-listing";
import { SITE_NAME } from "@/lib/seo";
import { APP_STORE_ID, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";

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
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any"
      }
    ],
    related_applications: [
      {
        platform: "play",
        url: PLAY_STORE_URL,
        id: PLAY_PACKAGE_ID
      },
      {
        platform: "itunes",
        url: APP_STORE_URL,
        id: APP_STORE_ID
      }
    ],
    prefer_related_applications: false
  };
}
