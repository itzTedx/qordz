import { AnimatedGroup } from "@/components/ui/animated-group";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TabsContent } from "@/components/ui/tabs";

import { PRODUCTS } from "@/data/products";
import { slugify } from "@/lib/utils";
import { ProductCard } from "@/modules/products/components/product-card";

import { ProductsTabs } from "./components/products-tabs";

export default function ProductsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container max-w-7xl space-y-8 py-12 sm:py-16 md:py-20">
        <header className="flex flex-col items-center justify-center gap-4 text-center md:pt-12">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-teal-600 text-title-3 md:text-title-2 lg:text-title-1">Best Selling Products</h1>

          <p className="text-balance text-lead text-stone-600">
            Discover our latest innovations crafted to keep you connected without limits.
          </p>
        </header>
      </section>

      {/* Products Grid */}
      <section className="container max-w-7xl space-y-6 pb-12 sm:pb-16 md:pb-20">
        <ProductsTabs>
          <AnimatedTabsContent value="products">
            {PRODUCTS.map((product) => (
              <div className="p-1" key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
          </AnimatedTabsContent>
          <AnimatedTabsContent value="earbuds">
            {PRODUCTS.filter((product) => slugify(product.category) === "earbuds").map((product) => (
              <div className="p-1" key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
          </AnimatedTabsContent>
          <AnimatedTabsContent value="power-bank">
            {PRODUCTS.filter((product) => slugify(product.category) === "power-bank").map((product) => (
              <div className="p-1" key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
          </AnimatedTabsContent>
          <AnimatedTabsContent value="charging-cables">
            {PRODUCTS.filter((product) => slugify(product.category) === "charging-cables").map((product) => (
              <div className="p-1" key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
          </AnimatedTabsContent>
          <AnimatedTabsContent value="adapters">
            {PRODUCTS.filter((product) => slugify(product.category) === "adapters").map((product) => (
              <div className="p-1" key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
          </AnimatedTabsContent>
          <AnimatedTabsContent value="mobile-accessories">
            {PRODUCTS.filter((product) => slugify(product.category) === "mobile-accessories").map((product) => (
              <div className="p-1" key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
          </AnimatedTabsContent>
        </ProductsTabs>
      </section>
    </main>
  );
}

function AnimatedTabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <TabsContent value={value}>
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
        {children}
      </AnimatedGroup>
    </TabsContent>
  );
}
