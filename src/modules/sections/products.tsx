import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { ProductCard } from "../products/components/product-card";

export const Products = () => {
  return (
    <section className="overflow-hidden">
      <div className="container max-w-7xl py-8 sm:py-12 md:py-16 lg:py-20">
        <header className="grid gap-3 sm:gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-teal-600 text-title-4 md:text-title-3 lg:text-title-2">Explore Our Products</h2>

          <p className="text-lead-sm text-stone-600 md:text-lead">
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
  );
};
