import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section className="container max-w-7xl py-12 md:py-20">
      <div className="rounded-3xl bg-teal-950 p-12 text-center shadow-2xl md:p-20">
        <div className="mx-auto max-w-sm">
          <h3 className="text-teal-400 text-title-2 md:mb-2">Where to Buy</h3>
          <p className="mb-4 font-medium text-lg text-stone-200/60 md:mb-6">
            Qordz products are available online and at leading retail stores across the region.
          </p>
          <Button>Find out where to buy</Button>
        </div>
      </div>
    </section>
  );
};
