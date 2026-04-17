import type { Metadata } from "next";

import { Cta } from "@/components/layout/cta";
import { JsonLd } from "@/components/seo/json-ld";

import { PRODUCTS } from "@/data/products";
import { breadcrumbJsonLd, buildMetadata, itemListJsonLd } from "@/lib/seo";
import { AboutBrand } from "@/modules/sections/about-brand";
import { Categories } from "@/modules/sections/categories";
import { Community } from "@/modules/sections/community";
import { FeaturedProducts } from "@/modules/sections/featured-products";
import { HomeHero } from "@/modules/sections/home-hero";
import { Products } from "@/modules/sections/products";

export const metadata: Metadata = buildMetadata({
  title: "Qordz UAE \u2013 Premium Earbuds, Power Banks, Cables & Adapters",
  description:
    "Shop Qordz mobile accessories in the UAE. Fast-charging cables, TWS earbuds, power banks and adapters engineered in Dubai. Free delivery across the UAE and GCC.",
  path: "/",
  keywords: [
    "Qordz",
    "mobile accessories UAE",
    "mobile accessories Dubai",
    "wireless earbuds UAE",
    "power bank UAE",
    "fast charging cable Dubai",
    "USB-C charger UAE",
    "buy phone accessories online UAE",
  ],
});

export default function Home() {
  const featured = PRODUCTS.slice(0, 8);

  return (
    <main>
      <HomeHero />
      <Categories />
      <FeaturedProducts />
      <Products />
      <AboutBrand />
      <Community />

      <Cta />

      <JsonLd data={breadcrumbJsonLd([{ name: "Home", url: "/" }])} id="ld-breadcrumb-home" />
      <JsonLd data={itemListJsonLd(featured, "Featured Qordz products in UAE")} id="ld-itemlist-home" />
    </main>
  );
}
