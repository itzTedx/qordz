import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";

import { IconChevronRight } from "@/assets/icons";

import { CATEGORIES } from "@/data/categories";

export const Categories = () => {
  return (
    <section className="container max-w-7xl space-y-8 py-12 sm:py-16 md:py-20">
      <header className="grid gap-3 sm:gap-6 md:grid-cols-2 md:gap-12">
        <h2 className="text-teal-600 text-title-3 md:text-title-2">Explore Our Product Range</h2>
        <div className="space-y-3">
          <p className="text-balance text-lead text-stone-600">
            From fast-charging cables to powerful TWS audio - everything designed for performance.
          </p>
          <Button asChild className="group" variant="ghost">
            <Link href="/products">
              Browse All Products{" "}
              <IconChevronRight className="size-2.5 transition-transform delay-100 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </header>

      <AnimatedGroup
        className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-5 md:gap-4"
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
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
        {CATEGORIES.map(({ Image, ...category }) => (
          <div
            className="group card flex aspect-square flex-col items-center justify-center gap-4 rounded-xl bg-card p-3 shadow-sm transition-[box-shadow_transform] duration-300 hover:bg-teal-400 hover:shadow-lg md:p-4"
            key={category.id}
          >
            <Image className="size-20 text-stone-700 group-hover:text-teal-900 md:size-24 lg:size-32" />
            <h3 className="text-sm md:text-base">{category.label}</h3>
          </div>
        ))}
      </AnimatedGroup>
    </section>
  );
};
