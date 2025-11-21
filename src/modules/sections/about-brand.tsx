import { Badge } from "@/components/ui/badge";

export const AboutBrand = () => {
  return (
    <section className="rounded-t-4xl bg-muted pt-12">
      <div className="container max-w-7xl pb-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-9">
          <h2 className="text-title-4 md:text-title-3 lg:text-title-2">Designed for Performance. Built for Life.</h2>
          <Badge className="h-fit bg-background text-stone-300 md:justify-self-end">BRAND STORY</Badge>

          <article>
            <p className="font-semibold text-xl">
              Qordz is committed to creating reliable, high-quality mobile accessories that elevate everyday life.
            </p>
            <p className="text-xl">
              Our products are engineered with precision, using durable materials, advanced charging technology, and
              modern design ensuring you stay connected wherever life takes you.
            </p>
          </article>
        </div>
      </div>
      <div className="rounded-t-4xl bg-foreground pt-12">
        <div className="container grid max-w-7xl gap-9 pb-12 md:grid-cols-2">
          <article>
            <Badge variant="ghost">Quality Assurance</Badge>
            <h3 className="mt-3 text-teal-400 text-title-4 md:text-title-3">Quality You Can Depend On</h3>

            <p className="mt-6 font-semibold text-lg text-stone-200 sm:mt-12 md:mt-16 md:text-xl">
              Every Qordz product goes through rigorous testing to ensure durability, efficiency, and safety.
            </p>

            <ul className="mt-6 list-inside list-disc space-y-3 px-3 font-semibold text-lg text-stone-400 md:text-xl">
              <li>Certified safe charging protocols</li>
              <li>Reinforced materials for extended lifespan</li>
              <li>Lab-tested performance standards</li>
              <li>Designed with sustainability in mind</li>
            </ul>
          </article>
        </div>
        <div className="rounded-t-4xl bg-background pt-9" />
      </div>
    </section>
  );
};
