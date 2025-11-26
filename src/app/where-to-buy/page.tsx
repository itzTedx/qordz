import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Community } from "@/modules/sections/community";

const TABS = [
  {
    href: "online",
    label: "Online Stores",
  },
  {
    href: "retail-stores",
    label: "Retail Stores",
  },
];

export default function WhereToBuyPage() {
  return (
    <main className="pt-20">
      <header className="relative m-2 flex flex-col justify-center overflow-hidden rounded-2xl bg-muted md:aspect-16/6">
        <div className="container relative z-10 max-w-7xl py-9 sm:py-12 md:py-16">
          <Badge>Retail Partners</Badge>
          <h1 className="mt-3 text-card text-title-3 md:text-title-2 lg:text-title-1">Where to Buy</h1>
          <p className="max-w-md text-base text-card sm:mt-4 sm:text-lg md:text-xl">
            Find QORDZ products at trusted retail partners worldwide, both online and in-store.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:flex-nowrap">
            <Button asChild>
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/">Contact Support</Link>
            </Button>
          </div>
        </div>
        <Image
          alt="Qordz Products"
          className="object-cover brightness-75 md:brightness-100"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
          src="/images/qordz-products.webp"
        />
      </header>

      <nav aria-label="Product detail sections" className="mx-2 rounded-2xl bg-card">
        <div className="container relative z-10 max-w-7xl px-4 py-3">
          <ul className="flex w-fit items-center gap-2 text-nowrap rounded-full bg-muted p-1 max-sm:mx-auto sm:gap-1">
            {TABS.map((item) => (
              <li key={item.href}>
                <Link
                  aria-label={`Jump to ${item.label} section`}
                  className="block rounded-full bg-card px-4 py-2 font-medium text-sm text-stone-700 shadow-sm transition hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  href={`#${item.href}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="container max-w-7xl space-y-10 px-4 py-12 sm:space-y-12 md:space-y-16">
        <div id="online">
          <h2 className="text-title-4">Dubai</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Shop from verified online partners shipping across the UAE.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <li>
              <Link
                className="flex aspect-video items-center justify-center rounded-xl border border-transparent bg-card p-3 shadow-sm transition hover:border-teal-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                href="https://www.amazon.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image alt="Amazon" height={120} src="/images/brands/amazon.svg" width={120} />
                <span className="sr-only">Amazon</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex aspect-video items-center justify-center rounded-xl border border-transparent bg-card p-3 shadow-sm transition hover:border-teal-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                href="https://www.noon.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image alt="Noon" height={120} src="/images/brands/noon.svg" width={120} />
                <span className="sr-only">Noon</span>
              </Link>
            </li>
          </ul>
        </div>
        <div id="retail-stores">
          <h2 className="text-title-4">Abu Dhabi</h2>
          <p className="mt-2 text-muted-foreground text-sm">Find QORDZ shelves inside leading retail experiences.</p>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <li>
              <Link
                className="flex aspect-video items-center justify-center rounded-xl border border-transparent bg-card p-3 shadow-sm transition hover:border-teal-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                href="https://www.amazon.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image alt="Amazon" height={120} src="/images/brands/amazon.svg" width={120} />
                <span className="sr-only">Amazon</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex aspect-video items-center justify-center rounded-xl border border-transparent bg-card p-3 shadow-sm transition hover:border-teal-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                href="https://www.noon.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image alt="Noon" height={120} src="/images/brands/noon.svg" width={120} />
                <span className="sr-only">Noon</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Community />
      <Cta />
    </main>
  );
}
