import Image from "next/image";

import { Badge } from "@/components/ui/badge";
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

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              className={cn(
                "group relative flex overflow-hidden rounded-xl",
                product.isFeatured
                  ? "aspect-video items-center md:col-span-2 md:aspect-auto"
                  : "aspect-7/8 justify-center text-center md:aspect-8/9"
              )}
              key={product.id}
            >
              <div className="relative z-10 max-w-md p-12">
                <h3 className="text-teal-600 text-title-5 md:text-title-4">{product.name}</h3>
                <p className="mb-3 text-balance text-base md:text-lg">{product.description}</p>
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
      <section className="overflow-hidden">
        <div className="container max-w-7xl py-20">
          <header className="grid gap-4 md:grid-cols-2 md:gap-12">
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
        </div>
      </section>
      <section className="rounded-t-4xl bg-muted py-12">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-2 gap-6">
            <h2 className="text-title-2">Designed for Performance. Built for Life.</h2>
            <Badge>BRAND STORY</Badge>
          </div>

          <p className="font-semibold text-xl">
            Qordz is committed to creating reliable, high-quality mobile accessories that elevate everyday life.
          </p>
          <p className="text-xl">
            Our products are engineered with precision, using durable materials, advanced charging technology, and
            modern design ensuring you stay connected wherever life takes you.
          </p>
        </div>
      </section>
    </main>
  );
}
