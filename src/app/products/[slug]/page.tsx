import { Fragment } from "react";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Cta } from "@/components/layout/cta";
import { JsonLd } from "@/components/seo/json-ld";
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

import { PRODUCTS } from "@/data/products";
import { breadcrumbJsonLd, buildMetadata, findProductBySlug, productJsonLd } from "@/lib/seo";
import { slugify } from "@/lib/utils";
import { ProductCard } from "@/modules/products/components/product-card";

import { ImagesCarousel } from "./components/images-carousel";
import { OverviewTabs } from "./components/overview-tabs";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: slugify(product.name) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) return {};

  const tagline = product.shortTagline ?? "";
  const description = `${product.name} in UAE \u2013 ${tagline} ${product.description}`.trim();

  return buildMetadata({
    title: `${product.name} in UAE \u2013 AED ${product.price}`,
    description,
    path: `/products/${slug}`,
    images: product.images?.length ? [product.images[0]] : undefined,
    keywords: [
      product.name,
      `${product.name} UAE`,
      `${product.name} Dubai`,
      `buy ${product.name} online UAE`,
      `${product.category} UAE`,
      `${product.category} Dubai`,
      "Qordz",
      "Qordz UAE",
    ],
    type: "website",
  });
}

const FEATURE_TILE_CLASSES = [
  "flex flex-col items-center justify-center gap-2 p-6",
  "aspect-square rounded-xl bg-card",
  "text-center text-lg font-medium leading-snug text-stone-600",
].join(" ");

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const carouselImages = product.images.map((src) => ({ src, alt: product.name }));

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main aria-labelledby="product-title" className="container max-w-7xl space-y-4 px-4 pt-20 sm:px-6">
      <Breadcrumb aria-label="Breadcrumb">
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
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section aria-labelledby="product-title" className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-9">
        <ImagesCarousel images={carouselImages} />
        <div className="space-y-6 lg:col-span-1">
          <div className="space-y-1.5">
            <h1 className="text-teal-600 text-title-5 md:text-title-4 lg:text-4xl lg:leading-snug" id="product-title">
              {product.name}
            </h1>
            {product.shortTagline && <p className="text-base text-stone-600">{product.shortTagline}</p>}
            <div className="flex flex-wrap items-center gap-3">
              <p aria-label={`Current price ${product.price} AED`} className="font-display text-stone-800 text-title-4">
                <Currency /> {product.price}
              </p>
            </div>
          </div>
          <Separator />
          <div className="space-y-1.5">
            <h2 className="text-base text-stone-400">Product Overview</h2>
            <p>{product.description}</p>
          </div>

          <Button className="w-full">Shop now</Button>

          <Separator />
          <Accordion
            aria-label="Product details"
            className="w-full"
            defaultValue={["key-features", "specifications"]}
            type="multiple"
          >
            {product.features?.length > 0 && (
              <AccordionItem value="key-features">
                <AccordionTrigger className="text-base text-stone-400">
                  <h3>Key Features</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-1.5">
                    {product.features.map((feature) => (
                      <li key={feature.title}>
                        <strong>{feature.title}:</strong> {feature.description}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
            {product.specs?.length > 0 && (
              <AccordionItem value="specifications">
                <AccordionTrigger className="text-base text-stone-400">
                  <h3>Specifications</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-3">
                    {product.specs.map((group) => (
                      <li key={group.group}>
                        <strong>{group.group}</strong>
                        <ul className="ml-5 list-inside list-disc">
                          {group.specs.map((spec) => (
                            <li key={spec.label}>
                              <strong>{spec.label}:</strong> {spec.value}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
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
          <p className="mx-auto max-w-3xl text-center text-lg text-stone-600 sm:text-xl">{product.description}</p>

          {product.features?.length > 0 && (
            <ul className="container mt-12 grid max-w-6xl grid-cols-2 gap-4 lg:mt-20 lg:grid-cols-4">
              {product.features.slice(0, 4).map((feature) => (
                <li className={FEATURE_TILE_CLASSES} key={feature.title}>
                  <p className="font-semibold text-stone-800">{feature.title}</p>
                  <p className="text-sm text-stone-500">{feature.description}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        {product.specs?.length > 0 && (
          <section aria-labelledby="specifications-heading" id="specifications">
            <h2
              className="my-6 text-center text-teal-800 text-title-5 md:text-title-4 lg:text-title-3"
              id="specifications-heading"
            >
              Specifications
            </h2>
            <DescriptionList>
              {product.specs.map((group) => (
                <Fragment key={group.group}>
                  <DescriptionTerm>{group.group}</DescriptionTerm>
                  <DescriptionDetails>
                    <ul>
                      {group.specs.map((spec) => (
                        <li key={spec.label}>
                          <strong>{spec.label}:</strong> {spec.value}
                        </li>
                      ))}
                    </ul>
                  </DescriptionDetails>
                </Fragment>
              ))}
            </DescriptionList>
          </section>
        )}
      </OverviewTabs>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-20">
          <header className="mb-6 text-center">
            <h2 className="text-teal-600 text-title-4" id="related-heading">
              You may also like
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard data={item} key={item.id} />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center">
            <Button asChild className="border-stone-400/50 bg-transparent shadow-none" variant="outline">
              <Link href="/products">View more</Link>
            </Button>
          </div>
        </section>
      )}

      <Cta />

      <JsonLd data={productJsonLd(product)} id={`ld-product-${slug}`} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: product.category, url: `/${slugify(product.category)}` },
          { name: product.name, url: `/products/${slug}` },
        ])}
        id={`ld-breadcrumb-product-${slug}`}
      />
    </main>
  );
}
