import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { ProductsTabs } from "./components/products-tabs";

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section className="container max-w-7xl space-y-8 pt-20 pb-6 md:py-20">
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
      <section className="container max-w-7xl space-y-6 pb-12 sm:pb-16 md:pb-20">
        <ProductsTabs>{children}</ProductsTabs>
      </section>
    </main>
  );
}
