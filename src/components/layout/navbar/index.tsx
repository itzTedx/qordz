import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IconChevronDownFill, IconSearch } from "@/assets/icons";
import { AnimateIcon } from "@/assets/icons/icon";
import { Logo } from "@/assets/logo";

import { DesktopNavbar } from "./desktop";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-999 bg-teal-500">
      <div className="container flex items-center justify-between py-3">
        <nav className="flex items-center gap-4">
          <Link aria-label="Go to home" href="/" title="Go to home">
            <Logo className="text-teal-900" isMono />
          </Link>
          <DesktopNavbar />
        </nav>
        <menu className="flex items-center gap-1 rounded-full border bg-teal-600/50 p-1">
          <li>
            <AnimateIcon animateOnHover>
              <Button size="icon" variant="ghost">
                <IconSearch className="text-teal-900" />
              </Button>
            </AnimateIcon>
          </li>
          <li className="text-teal-900">
            <Button className="rounded-full" variant="ghost">
              About us
            </Button>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full bg-card shadow-sm" variant="ghost">
                  Store <IconChevronDownFill className="text-stone-300" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Online Store</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>Status Bar</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </menu>
      </div>
    </header>
  );
};
