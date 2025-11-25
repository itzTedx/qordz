import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { Separator } from "@/components/ui/separator";

import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/modules/products/components/product-card";

import { OverviewTabs } from "./components/overview-tabs";

export default async function ProductPage({ params }: PageProps<"/[category]/[slug]">) {
  const { category, slug } = await params;

  return (
    <main className="container max-w-7xl space-y-4 py-12 sm:py-16 md:py-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${category}`}>Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{slug}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-9">
        <div className="h-fit lg:sticky lg:top-28 lg:col-span-2">
          <div className="relative aspect-6/4 overflow-hidden rounded-xl bg-card">
            <Image alt="Airtune Lite" className="object-contain" fill src="/images/qordz-airtune.webp" />
          </div>
        </div>
        <div className="space-y-6 lg:col-span-1">
          <div className="space-y-1.5">
            <h1 className="text-teal-600 text-title-5 md:text-title-4 lg:text-4xl lg:leading-snug">
              Qordz AirTune Lite Wireless Headphone
            </h1>
            <p className="text-base text-stone-600">Everyday comfort, everyday music.</p>
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-display text-stone-800 text-title-4">
                <Currency /> 79.99
              </p>
              <p className="text-base text-stone-500 line-through">
                <Currency /> 99.00
              </p>
            </div>
          </div>
          <Separator />
          <div className="space-y-1.5">
            <h2 className="text-base text-stone-400">Product Overview</h2>
            <p>
              Lightweight, powerful, and made for all-day listening. AirTune Lite delivers immersive sound with a sleek
              ergonomic fit that disappears into your ears.
            </p>
          </div>

          <Button className="w-full">Shop now</Button>

          <Separator />
          <Accordion className="w-full" defaultValue={["key-features", "specifications"]} type="multiple">
            <AccordionItem value="key-features">
              <AccordionTrigger className="text-base text-stone-400">
                <h3>Key Features</h3>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-inside list-disc space-y-1.5">
                  <li>Lightweight ergonomic design</li>
                  <li>20 hours total playtime</li>
                  <li>Touch controls</li>
                  <li>Noise reduction mic for calls</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="specifications">
              <AccordionTrigger className="text-base text-stone-400">
                <h3>Specifications</h3>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-inside list-disc space-y-1.5">
                  <li>
                    <strong>Bluetooth Version:</strong> 5.3
                  </li>
                  <li>
                    <strong>Playtime:</strong> Up to 20 hours with case
                  </li>
                  <li>
                    <strong>Charging Case:</strong> USB-C fast charge
                  </li>
                  <li>
                    <strong>Control Type:</strong> Multi-function touch sensors
                  </li>
                  <li>
                    <strong>Microphone:</strong> Noise reduction ENC
                  </li>
                  <li>
                    <strong>Fit:</strong> Universal ergonomic design
                  </li>
                  <li>
                    <strong>Colors Available:</strong> White, Black
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="whats-in-the-box">
              <AccordionTrigger className="text-base text-stone-400">
                <h3>What’s in the Box</h3>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-inside list-disc space-y-1.5">
                  <li>1x Pair of Qordz AirTune Lite Earbuds</li>
                  <li>1x Charging Case</li>
                  <li>1x USB-C Cable</li>
                  <li>3x Ear Tip Sizes (S/M/L)</li>
                  <li>User Manual</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <OverviewTabs />

      <section className="mt-20">
        <header className="mb-6 text-center">
          <h2 className="text-teal-800 text-title-3">More from Inspire</h2>
          <p className="text-lg text-stone-500">Expand the way to hear, feel, and enjoy.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative flex aspect-4/3 flex-col items-center overflow-hidden rounded-xl p-6 text-center md:p-9">
            <div className="relative z-10">
              <h3 className="text-teal-600 text-title-4">Qordz Charging Cables</h3>
              <p className="mb-4">Ultra-strong, fast-charging cables for every device.</p>
              <Button variant="ghost">Shop Now</Button>
            </div>
            <Image
              alt="Qordz Charging Cables"
              className="object-cover"
              fill
              src="/images/featured/charging-cables.webp"
            />
          </div>
          <div className="relative flex aspect-4/3 flex-col items-center overflow-hidden rounded-xl p-6 text-center md:p-9">
            <div className="relative z-10">
              <h3 className="text-teal-600 text-title-4">Qordz Charging Cables</h3>
              <p className="mb-4">Ultra-strong, fast-charging cables for every device.</p>
              <Button variant="ghost">Shop Now</Button>
            </div>
            <Image alt="Qordz Charging Cables" className="object-cover" fill src="/images/featured/tws-earbuds.webp" />
          </div>
        </div>
      </section>
      <section className="mt-20">
        <header className="mb-6 text-center">
          <h3 className="text-teal-600 text-title-4">You May Also Like</h3>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.splice(0, 3).map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center">
          <Button asChild className="border-stone-400/50 bg-transparent shadow-none" variant="outline">
            <Link href="/products">View More</Link>
          </Button>
        </div>
      </section>

      <Cta />
    </main>
  );
}
