"use client";

import { Route } from "next";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IconChevronDownFill, IconSorting } from "@/assets/icons";

import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { slugify } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

export const ProductsTabs = ({ children }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Tabs
      defaultValue="products"
      onValueChange={(value: string) => {
        console.log(value);
        router.push(value as Route);
      }}
      value={pathname.split("/").pop() || "products"}
    >
      <h2 className="sr-only">Filter by Category</h2>
      {/* Categories Filter */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TabsList>
            <TabsTrigger className="text-label" value="products">
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
      {children}
    </Tabs>
  );
};
