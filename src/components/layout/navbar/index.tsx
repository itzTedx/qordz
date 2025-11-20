"use client";

import { useEffect, useState } from "react";

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

import { IconChevronDownFill, IconSearch } from "@/assets/icons";
import { AnimateIcon } from "@/assets/icons/icon";
import { Logo } from "@/assets/logo";

import { cn } from "@/lib/utils";

import { DesktopNavbar } from "./desktop";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const threshold = 720;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "fixed top-0 z-999 flex w-full items-center justify-center transition-all duration-700",
        isScrolled &&
          "border-b bg-[radial-gradient(transparent_1px,#fff)] bg-card/80 bg-size-[4px_4px] backdrop-blur-xl"
      )}
    >
      <div className="container flex items-center justify-between py-3">
        <nav className="flex items-center gap-12">
          <Link aria-label="Go to home" href="/" title="Go to home">
            <Logo className="text-teal-900 transition-all duration-300" isMono={!isScrolled} />
          </Link>
          <DesktopNavbar
            className={cn(
              "transition-colors duration-200",
              isScrolled ? "text-stone-700 hover:text-teal-600" : "text-teal-900 hover:text-card"
            )}
          />
        </nav>
        <menu
          className={cn(
            "flex items-center gap-1 rounded-full border p-1 transition-colors duration-300",
            isScrolled ? "bg-background text-stone-600" : "bg-teal-600/50 text-teal-900"
          )}
        >
          <li>
            <AnimateIcon animateOnHover>
              <Button size="icon" variant="ghost">
                <IconSearch />
              </Button>
            </AnimateIcon>
          </li>
          <li>
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
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Online Store</DropdownMenuLabel>

                <DropdownMenuGroup className="rounded-md bg-card">
                  <DropdownMenuItem>
                    <User />
                    <span>Profile</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <CreditCard />
                    <span>Billing</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuLabel>Retailers</DropdownMenuLabel>

                <DropdownMenuGroup className="rounded-md bg-card">
                  <DropdownMenuItem>
                    <User />
                    <span>Dubai</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <CreditCard />
                    <span>Abu Dhabi</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </menu>
      </div>
    </header>
  );
};
