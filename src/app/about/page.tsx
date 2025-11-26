import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Metric {
  value: string;
  label: string;
  description: string;
}

interface Value {
  title: string;
  description: string;
  badge: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  detail: string;
}

const METRICS: Metric[] = [
  {
    value: "2.5M+",
    label: "Cables shipped",
    description: "Trusted by everyday creators and pro teams since 2018.",
  },
  {
    value: "42",
    label: "Quality checks",
    description: "Each product batch completes multi-stage lab validation.",
  },
  {
    value: "23",
    label: "Retail partners",
    description: "Stocked across the GCC for fast, local fulfillment.",
  },
];

const VALUES: Value[] = [
  {
    title: "Reliability first",
    description: "We design for the messy, real-world use cases that devices face daily—heat, bends, and travel.",
    badge: "Product DNA",
  },
  {
    title: "Human-centered",
    description: "Feedback loops with power users guide every revision so each release solves a tangible problem.",
    badge: "Design Loop",
  },
  {
    title: "Sustainable thinking",
    description: "Longer-lasting accessories reduce landfill impact, and all packaging is now 98% recyclable.",
    badge: "Impact",
  },
];

const MILESTONES: Milestone[] = [
  {
    year: "2018",
    title: "Qordz launched in Dubai",
    description: "Started with a single braided cable that outlived six OEM chargers.",
    detail: "Set the benchmark for longevity-focused accessories in the region.",
  },
  {
    year: "2020",
    title: "Power accessories expand",
    description: "Introduced GaN-powered adaptors and the first Prime Powerbank line.",
    detail: "Secured dual safety certifications across the GCC & EU.",
  },
  {
    year: "2022",
    title: "Retail footprint grows",
    description: "Partnered with Noon, Amazon, and key lifestyle retailers.",
    detail: "Added localized support teams and next-day fulfillment.",
  },
  {
    year: "2024",
    title: "Wireless and audio arrive",
    description: "Launched AirTune earbuds plus MagSafe-ready accessories.",
    detail: "R&D hub now prototypes with recycled aluminum and bio-resins.",
  },
];

export default function AboutPage() {
  return (
    <main className="space-y-16 pt-10 md:space-y-20">
      <header className="relative overflow-hidden rounded-3xl bg-muted">
        <div className="container relative z-10 grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[minmax(0,3fr)_2fr] md:py-16">
          <div className="space-y-6">
            <Badge>About Qordz</Badge>
            <div>
              <h1 className="text-balance text-title-2 sm:text-title-1">Hardware that keeps up with bold ideas</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Qordz crafts resilient charging ecosystems and wearables for creators, commuters, and crews who cannot
                afford surprise downtime. We obsess over every connector, weave, coil, and chipset so you can focus on
                what is next.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/where-to-buy">Find a retailer</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Talk to partnerships</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {METRICS.map((metric) => (
                <article className="rounded-2xl border border-border bg-background/70 p-4" key={metric.label}>
                  <p className="text-foreground text-title-4">{metric.value}</p>
                  <p className="font-semibold text-muted-foreground text-sm uppercase tracking-wide">{metric.label}</p>
                  <p className="mt-2 text-muted-foreground text-sm">{metric.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-3xl border border-border bg-foreground/5">
            <Image
              alt="Qordz product lineup"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              src="/images/qordz-products.webp"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.25),transparent_55%)]"
            />
          </div>
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.15),transparent_45%)]"
        />
      </header>

      <section className="container max-w-7xl space-y-10">
        <div className="grid gap-4 md:grid-cols-[420px_minmax(0,1fr)]">
          <div>
            <Badge variant="outline">Why we build</Badge>
            <h2 className="mt-3 text-title-4">Engineered for modern movement</h2>
            <p className="mt-3 text-balance text-muted-foreground text-sm">
              Our design sprints combine industrial designers, firmware engineers, and supply experts so every release
              balances tactile experience, speed, and sustainability.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {VALUES.map((value) => (
              <Card className="h-fit border-border/70" key={value.title}>
                <CardContent>
                  <CardHeader>
                    <Badge variant="secondary">{value.badge}</Badge>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{value.description}</CardDescription>
                  </CardHeader>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Separator />
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border bg-card/60 p-6">
            <Badge variant="ghost">Testing Lab</Badge>
            <h3 className="mt-3 text-title-5">Stress-tested for 30,000 bends</h3>
            <p className="mt-3 text-muted-foreground">
              We replicate extreme temperature shifts, rough airport security bins, and daily coil-uncoil cycles to
              guarantee performance well beyond standard certifications.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground text-sm">
              <li>GaN chargers calibrated for multi-device balancing</li>
              <li>Custom copper blends for faster heat dissipation</li>
              <li>Firmware updates shipped over USB-C for select gear</li>
            </ul>
          </article>
          <article className="rounded-3xl border bg-card/60 p-6">
            <Badge variant="ghost">Community programs</Badge>
            <h3 className="mt-3 text-title-5">Built with the field team</h3>
            <p className="mt-3 text-muted-foreground">
              Our pilot community includes filmmakers, delivery crews, and racing teams who pressure-test prototypes in
              real operations before we greenlight production.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground text-sm">
              <li>48-hour feedback windows after firmware pushes</li>
              <li>Local service partners for rapid replacements</li>
              <li>Repair-first approach to limit full product swaps</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mb-0 bg-muted py-12">
        <div className="container max-w-7xl space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge>Milestones</Badge>
              <h2 className="mt-3 text-title-3">From a single cable to full ecosystems</h2>
              <p className="text-muted-foreground">
                Every release compounds on lessons learned in the field, shaping accessories that feel inevitable rather
                than trendy.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/resources/faqs">See how we support users</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <TooltipProvider delayDuration={1000}>
              {MILESTONES.map((milestone) => (
                <Tooltip key={milestone.year}>
                  <TooltipTrigger asChild>
                    <Card className="border-none bg-background">
                      <CardContent>
                        <CardHeader className="space-y-1 px-4">
                          <Badge variant="outline">{milestone.year}</Badge>
                          <CardTitle className="text-title-4">{milestone.title}</CardTitle>
                          <CardDescription>{milestone.description}</CardDescription>
                        </CardHeader>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{milestone.detail}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
