import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TabsContent } from "@/components/ui/tabs";

import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { breadcrumbJsonLd, buildMetadata, categoryBySlug, itemListJsonLd, productsForCategory } from "@/lib/seo";
import { ProductCard } from "@/modules/products/components/product-card";

const CATEGORY_COPY: Record<string, { title: string; description: string; heading: string; keywords: string[] }> = {
  products: {
    title: "All Qordz Products in UAE \u2013 Earbuds, Power Banks & Cables",
    description:
      "Browse the full Qordz catalog in the UAE: TWS earbuds, power banks, fast-charging cables, wall adapters, and mobile accessories. Free delivery across Dubai and GCC.",
    heading: "All products",
    keywords: ["mobile accessories UAE", "Qordz products", "shop Qordz online UAE"],
  },
  earbuds: {
    title: "Wireless Earbuds UAE \u2013 Qordz TWS & ANC Earbuds",
    description:
      "Shop Qordz wireless earbuds in the UAE. Bluetooth 5.3, ANC, long battery life, and crystal-clear calls. Free delivery across Dubai, Abu Dhabi and the GCC.",
    heading: "Wireless earbuds",
    keywords: ["wireless earbuds UAE", "TWS earbuds Dubai", "ANC earbuds UAE", "Bluetooth earbuds Dubai"],
  },
  "power-bank": {
    title: "Power Banks in UAE \u2013 Qordz PD Fast-Charging Power Banks",
    description:
      "Compact, high-capacity Qordz power banks in the UAE. PD/QC fast charging, USB-C, and travel-safe design. Delivery across Dubai, Abu Dhabi and the GCC.",
    heading: "Power banks",
    keywords: ["power bank UAE", "power bank Dubai", "10000mAh power bank UAE", "fast charging power bank Dubai"],
  },
  "charging-cables": {
    title: "Fast-Charging Cables UAE \u2013 USB-C & Lightning by Qordz",
    description:
      "Durable, MFi and USB-IF certified fast-charging cables by Qordz. USB-C to USB-C and USB-C to Lightning for every device. Shipped across UAE and GCC.",
    heading: "Charging cables",
    keywords: ["charging cable UAE", "USB-C cable Dubai", "Lightning cable UAE", "fast charging cable Dubai"],
  },
  adapters: {
    title: "Wall Adapters & Chargers UAE \u2013 Qordz PD GaN Chargers",
    description:
      "Qordz PD GaN wall adapters in the UAE. 30W and up, USB-C and USB-A, travel-ready. Reliable fast charging for phones, tablets and laptops across the GCC.",
    heading: "Wall adapters",
    keywords: ["wall adapter UAE", "GaN charger Dubai", "30W charger UAE", "USB-C charger UAE"],
  },
  "mobile-accessories": {
    title: "Mobile Accessories UAE \u2013 Practical Gear by Qordz",
    description:
      "Shop Qordz mobile accessories in the UAE: stands, holders, hubs, and everyday add-ons. Delivery across Dubai, Abu Dhabi, and the GCC.",
    heading: "Mobile accessories",
    keywords: ["mobile accessories UAE", "phone accessories Dubai", "mobile add-ons UAE"],
  },
};

type PageProps = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return [{ category: "products" }, ...CATEGORIES.map((c) => ({ category: c.value }))];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const copy = CATEGORY_COPY[category];
  if (!copy) return {};
  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: `/${category}`,
    keywords: copy.keywords,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  if (!(category in CATEGORY_COPY)) {
    notFound();
  }

  const productsForThisView = category === "products" ? PRODUCTS : productsForCategory(category);

  const categoryInfo = categoryBySlug(category);
  const categoryLabel = categoryInfo?.label ?? "All products";

  const breadcrumbs =
    category === "products"
      ? [
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
        ]
      : [
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: categoryLabel, url: `/${category}` },
        ];

  return (
    <>
      <TabsContent value={category}>
        <AnimatedGroup
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.75,
                  type: "spring",
                  bounce: 0.3,
                },
              },
            },
          }}
        >
          {productsForThisView.map((product) => (
            <div className="p-1" key={product.id}>
              <ProductCard data={product} />
            </div>
          ))}
        </AnimatedGroup>
      </TabsContent>

      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} id={`ld-breadcrumb-${category}`} />
      <JsonLd
        data={itemListJsonLd(
          productsForThisView,
          category === "products" ? "All Qordz products" : `Qordz ${categoryLabel}`
        )}
        id={`ld-itemlist-${category}`}
      />
    </>
  );
}
