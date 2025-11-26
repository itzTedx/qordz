import Link from "next/link";

import { CreditCard, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { IconChevronDownFill } from "@/assets/icons";
import { IconClose, IconMenu } from "@/assets/icons/menu";
import { WaterMark } from "@/assets/logo";

import { useIsMobile } from "@/hooks/use-is-mobile";

import { NAV_LINKS, SOCIAL } from "../constant";

export const StoreDropdown = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button aria-label="Browse store" className="rounded-full bg-card shadow-sm" size="icon-sm" variant="ghost">
            <IconMenu />
            <span className="sr-only">Browse store</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-hidden">
          <SheetClose asChild>
            <Button className="mt-2 mr-2 ml-auto" size="icon-sm" variant="ghost">
              <IconClose />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
          <SheetHeader className="sr-only">
            <SheetTitle>
              <span className="sr-only">Qordz</span>
            </SheetTitle>
            <SheetDescription className="sr-only">
              Qordz products are available online and at leading retail stores across the region.
            </SheetDescription>
          </SheetHeader>
          <nav className="flex h-full flex-col justify-between gap-6 px-6 py-24">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    className="font-semibold text-lg uppercase transition-colors duration-300 hover:text-teal-400"
                    href={link.href}
                  >
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {SOCIAL.map((social) => (
                <li key={social.id}>
                  <Link
                    className="font-medium uppercase transition-colors duration-300 hover:text-teal-400"
                    href={social.href}
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="font-medium uppercase transition-colors duration-300 hover:text-teal-400"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <WaterMark className="-bottom-1/3 -translate-y-1/3 absolute left-1/2" />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <DropdownMenu>
      <Button
        aria-label="Browse store"
        className="rounded-full bg-card shadow-sm md:hidden"
        size="icon-sm"
        variant="ghost"
      >
        <IconMenu />
        <span className="sr-only">Browse store</span>
      </Button>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Browse store"
          className="hidden rounded-full bg-card shadow-sm md:inline-flex"
          size="sm"
          variant="ghost"
        >
          Store <IconChevronDownFill aria-hidden="true" className="text-stone-300" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48" sideOffset={8}>
        <DropdownMenuLabel>Online Store</DropdownMenuLabel>

        <DropdownMenuGroup className="rounded-md bg-card">
          <DropdownMenuItem>
            <User aria-hidden="true" />
            <span>Noon</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCard aria-hidden="true" />
            <span>Amazon</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuLabel>Retailers</DropdownMenuLabel>

        <DropdownMenuGroup className="rounded-md bg-card">
          <DropdownMenuItem>
            <User aria-hidden="true" />
            <span>Dubai</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCard aria-hidden="true" />
            <span>Abu Dhabi</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard aria-hidden="true" />
            <span>Sharjah</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
