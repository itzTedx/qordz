"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

import { Logo } from "@/assets/logo";

import { cn } from "@/lib/utils";

import { DesktopNavbar } from "./desktop";
import { MobileNavbar } from "./mobile";

export const SCROLL_THRESHOLD = 720;

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const currentProgress = scrollYProgress.get();
      const previousProgress = scrollYProgress.getPrevious();

      // Always show navbar when at the top
      if (currentProgress < 0.05) {
        setVisible(true);
        return;
      }

      // Only check direction if we have a previous value
      if (typeof previousProgress === "number") {
        const direction = currentProgress - previousProgress;
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (animationFrameId) return;
      animationFrameId = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > SCROLL_THRESHOLD;

        // Keep navbar visible when at the top
        if (scrollY < 50) {
          setVisible(true);
        }

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
    <AnimatePresence mode="wait">
      <motion.header
        animate={{
          y: visible ? 0 : -80,
        }}
        className={cn(
          "fixed inset-x-2 top-2 z-999 flex items-center justify-center rounded-md backdrop-blur-xl transition-all duration-700",
          isScrolled
            ? "border-b bg-[radial-gradient(transparent_1px,#fff)] bg-card/90 bg-size-[4px_4px]"
            : "bg-[radial-gradient(transparent_1px,transparent)]"
        )}
        initial={{
          y: 0,
        }}
        transition={{
          duration: 0.1,
        }}
      >
        <div className="container relative z-999 flex max-w-7xl items-center justify-between py-2 md:py-3">
          <nav aria-label="Primary" className="flex items-center gap-9">
            <Link aria-label="Go to home" href="/" title="Go to home">
              <Logo
                className={"h-8 w-auto text-teal-900 transition-all duration-300 sm:h-10"}
                isMono={!isScrolled && pathname === "/"}
              />
            </Link>
            <DesktopNavbar
              itemClassName={cn(
                "transition-colors duration-200",
                isScrolled
                  ? "text-stone-700 hover:text-teal-600"
                  : pathname === "/"
                    ? "text-teal-900 hover:text-card"
                    : "text-stone-700 hover:text-teal-600"
              )}
            />
          </nav>
          <MobileNavbar isScrolled={isScrolled} pathname={pathname} />
        </div>
      </motion.header>
    </AnimatePresence>
  );
};
