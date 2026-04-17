import type { MetadataRoute } from "next";

import { SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} \u2013 Premium Mobile Accessories in UAE`,
    short_name: SITE_NAME,
    description:
      "Shop premium Qordz mobile accessories in the UAE \u2013 TWS earbuds, fast-charging cables, power banks, adapters, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d9488",
    lang: "en-AE",
    orientation: "portrait",
    categories: ["shopping", "lifestyle", "productivity"],
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
