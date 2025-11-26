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
import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@/components/ui/description-list";
import { Separator } from "@/components/ui/separator";

import { WaterMark } from "@/assets/logo";

import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/modules/products/components/product-card";

import { ImagesCarousel } from "./components/images-carousel";
import { OverviewTabs } from "./components/overview-tabs";

const FEATURE_TILE_CLASSES = [
  "flex flex-col items-center justify-center gap-2 p-6",
  "aspect-square rounded-xl bg-card",
  "text-center text-lg font-medium leading-snug text-stone-600",
].join(" ");

export default async function ProductPage({ params }: PageProps<"/[category]/[slug]">) {
  const { category, slug } = await params;

  return (
    <main aria-labelledby="product-title" className="container max-w-7xl space-y-4 px-4 pt-20 sm:px-6">
      <Breadcrumb aria-label="Breadcrumb">
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

      <section aria-labelledby="product-title" className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-9">
        <ImagesCarousel />
        <div className="space-y-6 lg:col-span-1">
          <div className="space-y-1.5">
            <h1 className="text-teal-600 text-title-5 md:text-title-4 lg:text-4xl lg:leading-snug" id="product-title">
              Qordz AirTune Lite Wireless Headphone
            </h1>
            <p className="text-base text-stone-600">Everyday comfort, everyday music.</p>
            <div className="flex flex-wrap items-center gap-3">
              <p
                aria-label="Current price seventy nine dollars and ninety nine cents"
                className="font-display text-stone-800 text-title-4"
              >
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
          <Accordion
            aria-label="Product details"
            className="w-full"
            defaultValue={["key-features", "specifications"]}
            type="multiple"
          >
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

      <OverviewTabs>
        <section aria-labelledby="overview-heading" id="overview">
          <h2
            className="mb-4 text-center text-teal-800 text-title-5 md:text-title-4 lg:text-title-3"
            id="overview-heading"
          >
            Product Overview
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-6 sm:gap-3 lg:grid-cols-10">
            <div className="relative col-span-full overflow-hidden rounded-lg sm:col-span-6 lg:col-span-4">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 90vw"
                src="/images/products/overview/overview-1.jpg"
              />
            </div>
            <div className="relative col-span-full aspect-7/6 overflow-hidden rounded-lg sm:col-span-3">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 30vw, 90vw"
                src="/images/products/overview/overview-2.jpg"
              />
            </div>
            <div className="relative col-span-full aspect-7/6 overflow-hidden rounded-lg sm:col-span-3">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 30vw, 90vw"
                src="/images/products/overview/overview-3.jpg"
              />
            </div>
            <div className="relative col-span-full aspect-7/6 overflow-hidden rounded-lg sm:col-span-3">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 30vw, 90vw"
                src="/images/products/overview/overview-4.jpg"
              />
            </div>
            <div className="relative col-span-full overflow-hidden rounded-lg sm:col-span-6 lg:col-span-4">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 90vw"
                src="/images/products/overview/overview-5.jpg"
              />
            </div>
            <div className="relative col-span-full aspect-7/6 overflow-hidden rounded-lg sm:col-span-3">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 30vw, 90vw"
                src="/images/products/overview/overview-6.jpg"
              />
            </div>
          </div>

          <article className="mt-12 lg:mt-20">
            <h3 className="text-teal-800 text-title-3 md:text-title-2 lg:text-title-1">
              <span className="text-stone-700 text-title-4 sm:text-title-3">Everyday comfort,</span>
              <br />
              Everyday music.
            </h3>
            <p className="text-xl sm:text-2xl">
              Experience pure wireless freedom with Qordz AirTune Lite, the perfect companion for music lovers,
              multitaskers, and everyday commuters. Designed for comfort and engineered for clarity, these earbuds blend
              premium sound performance with an ultra-lightweight build making them ideal for all-day wear.
              <br />
              Whether you're taking calls, listening to playlists, or navigating your day, AirTune Lite delivers
              consistent audio quality, quick touch controls, and long-lasting playtime.
            </p>
          </article>

          <ul className="container mt-12 grid max-w-6xl grid-cols-2 gap-4 lg:mt-20 lg:grid-cols-5">
            <li className={FEATURE_TILE_CLASSES}>
              <Image alt="Smart Touch Controls" height={72} src="/icons/touch.svg" width={72} />
              <p>Smart Touch Controls</p>
            </li>
            <li className={FEATURE_TILE_CLASSES}>
              <Image alt="20-Hour Total Playtime" height={72} src="/icons/battery-charging.svg" width={72} />
              <p>20-Hour Total Playtime</p>
            </li>
            <li className={FEATURE_TILE_CLASSES}>
              <Image alt="IPX4 Water-Resistant" height={72} src="/icons/umbrella.svg" width={72} />
              <p>IPX4 Water-Resistant</p>
            </li>
            <li className={FEATURE_TILE_CLASSES}>
              <Image alt="USB-C Fast Charging" height={72} src="/icons/usb-connected.svg" width={72} />
              <p>USB-C Fast Charging</p>
            </li>
            <li className={FEATURE_TILE_CLASSES}>
              <Image alt="Bluetooth 5.3 Connectivity" height={72} src="/icons/bluetooth.svg" width={72} />
              <p>Bluetooth 5.3 Connectivity</p>
            </li>
          </ul>

          <div className="mt-12 grid grid-cols-1 items-center justify-center gap-12 lg:mt-20 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                alt="Qordz AirTune Lite"
                className="z-5 object-contain"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                src="/images/products/overview/buds-teardown.png"
              />
              <WaterMark aria-hidden="true" className="-translate-1/2 absolute top-1/2 left-1/2 opacity-10" />
            </div>

            <div>
              <h3 className="text-teal-900 text-title-4 md:text-title-3">Sound You Can Feel</h3>
              <p className="text-stone-600 text-xl sm:text-2xl md:text-3xl">
                Experience crisp highs, warm mids, and clean bass engineered for clarity across all music genres and
                everyday media.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="specifications-heading" id="specifications">
          <h2
            className="my-6 text-center text-teal-800 text-title-5 md:text-title-4 lg:text-title-3"
            id="specifications-heading"
          >
            Specifications
          </h2>
          <DescriptionList>
            <DescriptionTerm>Audio</DescriptionTerm>
            <DescriptionDetails>
              <ul>
                <li>
                  <strong>Driver Unit:</strong> 10 mm Dynamic Driver
                </li>

                <li>
                  <strong>Frequency Response Range:</strong> 20 Hz – 20 kHz
                </li>

                <li>
                  <strong>Audio Codec:</strong> SBC, AAC
                </li>

                <li>
                  <strong>Sound Profile:</strong> Balanced tuning with enhanced clarity
                </li>

                <li>
                  <strong>Call Technology:</strong> Noise-reduction microphone with voice enhancement
                </li>
              </ul>
            </DescriptionDetails>

            <DescriptionTerm>Connectivity</DescriptionTerm>
            <DescriptionDetails>
              <ul>
                <li>
                  <strong>Connection Mode:</strong> Bluetooth
                </li>
                <li>
                  <strong>Bluetooth Version:</strong> V5.3
                </li>
                <li>
                  <strong>Wireless Range:</strong> Up to 10 meters
                </li>
                <li>
                  <strong>Auto Reconnect:</strong> Yes
                </li>
                <li>
                  <strong>Low Latency Mode:</strong> ~65 ms for gaming & videos
                </li>
                <li>
                  <strong>Pairing:</strong> One-step pairing with instant reconnection
                </li>
              </ul>
            </DescriptionDetails>

            <DescriptionTerm>Battery</DescriptionTerm>
            <DescriptionDetails>
              <ul>
                <li>
                  <strong>Battery Capacity:</strong> 40 mAh (per earbud), 300 mAh (charging case)
                </li>
                <li>
                  <strong>Playback Time:</strong> Approx. 5 hours (at 50% volume)
                </li>
                <li>
                  <strong>Playback with Charging Case:</strong> Up to 20 hours
                </li>
                <li>
                  <strong>Charging Port:</strong> USB-C
                </li>
                <li>
                  <strong>Charging Time:</strong> ~1.5 hours (earbuds + case)
                </li>
                <li>
                  <strong>Standby Time:</strong> ~80 hours
                </li>
              </ul>
            </DescriptionDetails>

            <DescriptionTerm>General</DescriptionTerm>
            <DescriptionDetails>
              <ul>
                <li>
                  <strong>Water Resistance:</strong> IPX4 (sweat & splash resistant)
                </li>
                <li>
                  <strong>App Support:</strong> No (works plug-and-play)
                </li>
                <li>
                  <strong>Product Materials:</strong> ABS + PC
                </li>
                <li>
                  <strong>Ear Tip Material:</strong> Soft Silicone
                </li>
                <li>
                  <strong>Weight:</strong>
                  <ul className="ml-4 list-inside list-disc">
                    <li>Earbuds: 3.5 g each</li>
                    <li>Charging Case: 28 g</li>
                    <li>Total: Approx. 35 g</li>
                  </ul>
                </li>
                <li>
                  <strong>Colors:</strong> Black / White
                </li>
              </ul>
            </DescriptionDetails>
          </DescriptionList>
        </section>
      </OverviewTabs>

      <section aria-labelledby="more-from-heading" className="mt-20">
        <header className="mb-6 text-center">
          <h2 className="text-teal-800 text-title-3" id="more-from-heading">
            More from Inspire
          </h2>
          <p className="text-lg text-stone-500">Expand the way to hear, feel, and enjoy.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative flex aspect-square flex-col items-center overflow-hidden rounded-xl p-9 text-center md:aspect-4/3">
            <div className="relative z-10">
              <h3 className="text-teal-600 text-title-4">Qordz Charging Cables</h3>
              <p className="mb-4">Ultra-strong, fast-charging cables for every device.</p>
              <Button variant="ghost">Shop Now</Button>
            </div>
            <Image
              alt="Qordz Charging Cables"
              className="object-cover"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              src="/images/featured/charging-cables.webp"
            />
          </div>
          <div className="relative flex aspect-square flex-col items-center overflow-hidden rounded-xl p-9 text-center md:aspect-4/3">
            <div className="relative z-10">
              <h3 className="text-teal-600 text-title-4">Qordz TWS Earbuds</h3>
              <p className="mb-4">Engineered for low-latency streaming and crystal clear calls.</p>
              <Button variant="ghost">Shop Now</Button>
            </div>
            <Image
              alt="Qordz TWS Earbuds"
              className="object-cover"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              src="/images/featured/tws-earbuds.webp"
            />
          </div>
        </div>
      </section>
      <section aria-labelledby="related-heading" className="mt-20">
        <header className="mb-6 text-center">
          <h3 className="text-teal-600 text-title-4" id="related-heading">
            You May Also Like
          </h3>
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
