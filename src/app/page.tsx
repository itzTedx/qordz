import { Cta } from "@/components/layout/cta";

import { AboutBrand } from "@/modules/sections/about-brand";
import { Categories } from "@/modules/sections/categories";
import { Community } from "@/modules/sections/community";
import { FeaturedProducts } from "@/modules/sections/featured-products";
import { HomeHero } from "@/modules/sections/home-hero";
import { Products } from "@/modules/sections/products";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Categories />
      <FeaturedProducts />
      <Products />
      <AboutBrand />
      <Community />

      <Cta />
    </main>
  );
}
