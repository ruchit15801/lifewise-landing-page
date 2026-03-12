import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LifeWise",
    short_name: "LifeWise",
    description:
      "AI life assistant for reminders, bills, medicines, family tasks and daily life management.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#6D5DF6",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}

