import { Badge } from "@/components/ui/badge";

export const AboutBrand = () => {
  return (
    <section className="rounded-t-4xl bg-muted pt-12">
      <div className="container max-w-7xl pb-12">
        <div className="grid grid-cols-2 gap-6">
          <h2 className="text-title-2">Designed for Performance. Built for Life.</h2>
          <Badge className="h-fit justify-self-end bg-background text-stone-300">BRAND STORY</Badge>
        </div>

        <p className="font-semibold text-xl">
          Qordz is committed to creating reliable, high-quality mobile accessories that elevate everyday life.
        </p>
        <p className="text-xl">
          Our products are engineered with precision, using durable materials, advanced charging technology, and modern
          design ensuring you stay connected wherever life takes you.
        </p>
      </div>
      <div className="rounded-t-4xl bg-foreground pt-12">
        <div className="container max-w-7xl pb-12">
          <Badge>QUALITY ASSURANCE</Badge>
          <h3 className="text-teal-400 text-title-3">Quality You Can Depend On</h3>

          <p className="font-semibold text-stone-200 text-xl">
            Every Qordz product goes through rigorous testing to ensure durability, efficiency, and safety.
          </p>

          <ul className="list-inside list-disc px-3 font-semibold text-stone-400 text-xl">
            <li>Certified safe charging protocols</li>
            <li>Reinforced materials for extended lifespan</li>
            <li>Lab-tested performance standards</li>
            <li>Designed with sustainability in mind</li>
          </ul>
        </div>
        <div className="rounded-t-4xl bg-background pt-9" />
      </div>
    </section>
  );
};
