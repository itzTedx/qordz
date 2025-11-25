import { AnimatedGroup } from "@/components/ui/animated-group";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IconChevronDownFill, IconSorting } from "@/assets/icons";

import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { slugify } from "@/lib/utils";
import { ProductCard } from "@/modules/products/components/product-card";

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
        <Tabs defaultValue="all">
          <h2 className="sr-only">Filter by Category</h2>
          {/* Categories Filter */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TabsList>
                <TabsTrigger className="text-label" value="all">
                  All Products
                </TabsTrigger>
                {CATEGORIES.map((category) => (
                  <TabsTrigger className="text-label" key={category.id} value={slugify(category.label)}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <span className="ml-3 text-sm text-stone-500"> {PRODUCTS.length} products</span>
            </div>
            <div className="flex items-center gap-1 rounded-full border bg-muted p-1">
              <div className="flex size-8 items-center justify-center">
                <IconSorting className="size-3.5 text-stone-500" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    aria-label="Sort by"
                    className="rounded-full bg-card text-stone-600 shadow-sm"
                    size="sm"
                    variant="ghost"
                  >
                    Featured <IconChevronDownFill aria-hidden="true" className="text-stone-300" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={12}>
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>

                  <DropdownMenuGroup className="rounded-md bg-card">
                    <DropdownMenuItem>
                      <span>Featured</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Newest</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Oldest</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Price: Low to High</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Price: High to Low</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <AnimatedTabsContent value="all">
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
        </Tabs>
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
