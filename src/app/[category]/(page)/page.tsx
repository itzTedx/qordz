import { AnimatedGroup } from "@/components/ui/animated-group";
import { TabsContent } from "@/components/ui/tabs";

import { PRODUCTS } from "@/data/products";
import { slugify } from "@/lib/utils";
import { ProductCard } from "@/modules/products/components/product-card";

export default function ProductsPage() {
  return (
    <>
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
    </>
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
