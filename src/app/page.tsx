import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { FEATURED_PRODUCTS } from "@/data/products";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/modules/products/components/product-card";
import { Categories } from "@/modules/sections/categories";
import { HomeHero } from "@/modules/sections/home-hero";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Categories />

      <section className="container max-w-7xl space-y-8 py-20">
        <header className="space-y-2 text-center">
          <h2 className="text-teal-600 text-title-2">Engineered for Better Performance.</h2>

          <p className="text-lead text-stone-600">
            Discover our latest innovations crafted to keep you connected without limits.
          </p>
        </header>

        <div className="grid grid-cols-3 gap-4">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              className={cn(
                "group relative flex overflow-hidden rounded-xl",
                product.isFeatured ? "col-span-2 items-center" : "aspect-8/9 text-center"
              )}
              key={product.id}
            >
              <div className="relative z-10 max-w-md p-12">
                <h3 className="text-teal-600 text-title-4">{product.name}</h3>
                <p className="mb-3 text-balance text-base">{product.description}</p>
                <Button size="sm" variant="ghost">
                  Learn more
                </Button>
              </div>

              <Image
                alt={product.name}
                className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                fill
                src={product.image}
              />
            </div>
          ))}
        </div>
      </section>
      <div className="overflow-hidden">
        <section className="container max-w-7xl py-20">
          <header className="grid grid-cols-2 gap-12">
            <div className="space-y-3">
              <h2 className="text-teal-600 text-title-2">Explore Our Products</h2>
            </div>
            <p className="text-lead text-stone-600">
              Qordz offers a complete range of charging accessories and smart mobile essentials. Browse our featured
              lineup crafted to keep your devices connected, fast, and ready for anything.
            </p>
          </header>
          <Carousel className="mt-9">
            <CarouselContent>
              {Array.from({ length: 12 }).map((_, index) => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={`carousel-item-${index + 1}`}>
                  <div className="p-1">
                    <ProductCard />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </div>
    </main>
  );
}
