import Image from "next/image";

import Shuffle from "@/components/shuffle-text";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";

import { FEATURED_PRODUCTS } from "@/data/products";
import { cn } from "@/lib/utils";

export const FeaturedProducts = () => {
  return (
    <section className="container max-w-7xl space-y-8 py-20">
      <header className="text-center">
        <Shuffle
          className="text-teal-600 text-title-2"
          duration={0.15}
          tag="h2"
          text="Engineered for Better Performance."
          triggerOnce={true}
          triggerOnHover={true}
        />
        {/* <h2 className="text-teal-600 text-title-2">Engineered for Better Performance.</h2> */}

        <p className="text-lead text-stone-600">
          Discover our latest innovations crafted to keep you connected without limits.
        </p>
      </header>

      <AnimatedGroup
        className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4"
        itemClassName="md:nth-[4]:col-span-2 nth-[4]:aspect-video nth-[4]:items-center "
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          },
          item: {
            hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.75,
                type: "spring",
                bounce: 0.3,
              },
            },
          },
        }}
      >
        {FEATURED_PRODUCTS.map((product) => (
          <div
            className={cn(
              "group relative flex overflow-hidden rounded-xl",
              product.isFeatured
                ? "aspect-video items-center md:col-span-2"
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
      </AnimatedGroup>
    </section>
  );
};
