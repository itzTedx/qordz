import Link from "next/link";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { CommandMenu } from "./search";
import { StoreDropdown } from "./store-dropdown";

export const MobileNavbar = ({ isScrolled, pathname }: { isScrolled: boolean; pathname: string }) => {
  return (
    <nav
      aria-label="Secondary"
      className={cn(
        "flex items-center gap-1 rounded-full border p-1 backdrop-blur-lg transition-colors duration-300",
        isScrolled
          ? "bg-background text-stone-600"
          : pathname === "/"
            ? "bg-teal-600/50 text-teal-900"
            : "bg-background text-stone-600"
      )}
    >
      <ul className="flex items-center gap-1" role="list">
        <li>
          <CommandMenu />
        </li>
        <li className="hidden md:block">
          <Button
            asChild
            className="rounded-full border-transparent bg-transparent backdrop-blur-none hover:bg-muted"
            size="sm"
            type="button"
            variant="ghost"
          >
            <Link href="/about">About us</Link>
          </Button>
        </li>
        <li>
          <StoreDropdown />
        </li>
      </ul>
    </nav>
  );
};
