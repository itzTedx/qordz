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
          <Button className="group" variant="ghost">
            Browse All Products{" "}
            <IconChevronRight className="size-2.5 transition-transform delay-100 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-5 md:gap-4">
        {CATEGORIES.map(({ Icon, ...category }) => (
          <div
            className="group card flex aspect-square flex-col items-center justify-center gap-4 rounded-xl bg-card p-3 shadow-sm transition-[box-shadow_transform] duration-300 hover:bg-teal-400 hover:shadow-lg md:p-4"
            key={category.id}
          >
            <Icon className="size-20 text-stone-700 group-hover:text-teal-900 md:size-24 lg:size-32" />
            <h3 className="text-sm md:text-base">{category.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
