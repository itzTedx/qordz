import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section className="container max-w-7xl py-20">
      <div className="rounded-3xl bg-teal-950 p-20 text-center shadow-2xl">
        <div className="mx-auto max-w-sm">
          <h3 className="mb-2 text-teal-400 text-title-2">Where to Buy</h3>
          <p className="mb-6 font-medium text-lg text-stone-400">
            Qordz products are available online and at leading retail stores across the region.
          </p>
          <Button>Find out where to buy</Button>
        </div>
      </div>
    </section>
  );
};
