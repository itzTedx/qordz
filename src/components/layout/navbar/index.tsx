"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { IconSearch } from "@/assets/icons";
import { AnimateIcon } from "@/assets/icons/icon";
import { Logo } from "@/assets/logo";

import { cn } from "@/lib/utils";

import { DesktopNavbar } from "./desktop";
import { StoreDropdown } from "./store-dropdown";

const SCROLL_THRESHOLD = 720;

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (animationFrameId) return;
      animationFrameId = window.requestAnimationFrame(() => {
        const shouldBeScrolled = window.scrollY > SCROLL_THRESHOLD;
        setIsScrolled((prev) => {
          if (prev === shouldBeScrolled) return prev;
          return shouldBeScrolled;
        });
        animationFrameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-999 flex w-full items-center justify-center transition-all duration-700",
        isScrolled
          ? "border-b bg-[radial-gradient(transparent_1px,#fff)] bg-card/80 bg-size-[4px_4px]"
          : "bg-linear-to-b from-teal-500 to-transparent"
      )}
    >
      <div className="container relative z-999 flex max-w-7xl items-center justify-between py-3">
        <nav aria-label="Primary" className="flex items-center gap-12">
          <Link aria-label="Go to home" href="/" title="Go to home">
            <Logo className="text-teal-900 transition-all duration-300" isMono={!isScrolled} />
          </Link>
          <DesktopNavbar
            itemClassName={cn(
              "transition-colors duration-200",
              isScrolled ? "text-stone-700 hover:text-teal-600" : "text-teal-900 hover:text-card"
            )}
          />
        </nav>
        <nav
          aria-label="Secondary"
          className={cn(
            "flex items-center gap-1 rounded-full border p-1 backdrop-blur-lg transition-colors duration-300",
            isScrolled ? "bg-background text-stone-600" : "bg-teal-600/50 text-teal-900"
          )}
        >
          <ul className="flex items-center gap-1" role="list">
            <li>
              <AnimateIcon animateOnHover>
                <Button
                  aria-label="Open search"
                  className="border-transparent bg-transparent"
                  size="icon"
                  variant="ghost"
                >
                  <IconSearch aria-hidden="true" />
                </Button>
              </AnimateIcon>
            </li>
            <li>
              <Button className="rounded-full border-transparent bg-transparent" type="button" variant="ghost">
                About us
              </Button>
            </li>
            <li>
              <StoreDropdown />
            </li>
          </ul>
        </nav>
      </div>

      <div className="gradient-blur">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </header>
  );
};
