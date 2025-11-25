import { Route } from "next";
import Image from "next/image";
import Link from "next/link";

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
import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@/components/ui/description-list";
import { Separator } from "@/components/ui/separator";

import { TABS } from "./data/constants";

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
      <nav>
        <ul className="mx-auto flex w-fit items-center gap-1 rounded-full border border-stone-500/10 bg-muted p-1">
          {TABS.map((tab) => (
            <li key={tab.href}>
              <Link
                className="flex h-10 items-center justify-center rounded-full bg-card px-6 font-medium text-base text-stone-600 shadow-sm"
                href={tab.href as Route}
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section id="overview">
        <h2 className="my-6 text-center text-teal-800 text-title-5 md:text-title-4 lg:text-title-3">
          Product Overview
        </h2>

        <div className="grid grid-cols-10 gap-2 *:relative *:overflow-hidden *:rounded-lg">
          <div className="col-span-4">
            <Image
              alt="Qordz AirTune Lite"
              className="object-cover"
              fill
              src="/images/products/overview/overview-1.jpg"
            />
          </div>
          <div className="col-span-3 aspect-7/6">
            <Image
              alt="Qordz AirTune Lite"
              className="object-cover"
              fill
              src="/images/products/overview/overview-2.jpg"
            />
          </div>
          <div className="col-span-3 aspect-7/6">
            <Image
              alt="Qordz AirTune Lite"
              className="object-cover"
              fill
              src="/images/products/overview/overview-3.jpg"
            />
          </div>
          <div className="col-span-3 aspect-7/6">
            <Image
              alt="Qordz AirTune Lite"
              className="object-cover"
              fill
              src="/images/products/overview/overview-4.jpg"
            />
          </div>
          <div className="col-span-4">
            <Image
              alt="Qordz AirTune Lite"
              className="object-cover"
              fill
              src="/images/products/overview/overview-5.jpg"
            />
          </div>
          <div className="col-span-3 aspect-7/6">
            <Image
              alt="Qordz AirTune Lite"
              className="object-cover"
              fill
              src="/images/products/overview/overview-6.jpg"
            />
          </div>
        </div>
      </section>
      <section id={TABS[1].href}>
        <h2 className="my-6 text-center text-teal-800 text-title-5 md:text-title-4 lg:text-title-3">Specifications</h2>
        <DescriptionList>
          <DescriptionTerm>Audio</DescriptionTerm>

          <DescriptionDetails>
            <ul>
              <li>Driver Unit: 10 mm Dynamic Driver</li>

              <li>Frequency Response Range: 20 Hz – 20 kHz</li>

              <li>Audio Codec: SBC, AAC</li>

              <li>Sound Profile: Balanced tuning with enhanced clarity</li>

              <li>Call Technology: Noise-reduction microphone with voice enhancement</li>
            </ul>
          </DescriptionDetails>

          <DescriptionTerm>Invoice Date</DescriptionTerm>
          <DescriptionDetails>September 21, 2024</DescriptionDetails>
        </DescriptionList>
      </section>
    </main>
  );
}
