import { WaterMark } from "@/assets/logo";

import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section className="container max-w-7xl py-12 md:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-teal-950 p-9 shadow-2xl sm:p-12 md:p-20">
        <div className="relative z-10 max-w-sm">
          <h3 className="text-teal-400 text-title-3 md:mb-2 md:text-title-2">Where to Buy</h3>
          <p className="mb-4 font-medium text-stone-200/60 md:mb-6 md:text-lg">
            Qordz products are available online and at leading retail stores across the region.
          </p>
          <Button>Find out where to buy</Button>
        </div>
        <WaterMark className="absolute top-16 right-0 hidden sm:block md:scale-150" />
      </div>
    </section>
  );
};
