import Image from "next/image";

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

import { OverviewTabs } from "./components/overview-tabs";

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;

  return (
    <main className="container max-w-7xl space-y-4 py-12 sm:py-16 md:py-20">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <section className="grid grid-cols-3 gap-9">
        <div className="sticky top-28 col-span-2 h-fit">
          <div className="relative aspect-6/4 overflow-hidden rounded-xl bg-card">
            <Image alt="Airtune Lite" className="object-contain" fill src="/images/qordz-airtune.webp" />
          </div>
        </div>
        <div className="col-span-1 space-y-6">
          <div className="space-y-1.5">
            <h1 className="text-teal-600 text-title-5 md:text-title-4 lg:text-4xl lg:leading-snug">
              Qordz AirTune Lite Wireless Headphone
            </h1>
            <p className="text-base text-stone-600">Everyday comfort, everyday music.</p>
            <div className="flex items-center gap-3">
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

          <div className="space-y-1.5">
            <h3 className="text-base text-stone-400">Key Features</h3>
            <ul className="list-inside list-disc space-y-1.5">
              <li>Lightweight ergonomic design</li>
              <li>20 hours total playtime</li>
              <li>Touch controls</li>
              <li>Noise reduction mic for calls</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-base text-stone-400">Specifications</h3>
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
          </div>

          <div className="space-y-1.5">
            <h3 className="text-base text-stone-400">What’s in the Box</h3>
            <ul className="list-inside list-disc space-y-1.5">
              <li>1x Pair of Qordz AirTune Lite Earbuds</li>
              <li>1x Charging Case</li>
              <li>1x USB-C Cable</li>
              <li>3x Ear Tip Sizes (S/M/L)</li>
              <li>User Manual</li>
            </ul>
          </div>
          <Separator />
          <div className="p-3">
            <Button className="w-full">Shop now</Button>
          </div>
        </div>
      </section>

      <OverviewTabs />

      <section className="mt-20">
        <h2 className="text-teal-800 text-title-3">More from Inspire</h2>
        <p className="text-lg text-stone-500">Expand the way to hear, feel, and enjoy.</p>
      </section>
    </main>
  );
}
