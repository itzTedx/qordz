"use client";

import { useState } from "react";

import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

import { SOCIAL } from "../constant";

export const SocialChips = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <ul className="flex w-fit items-center gap-0.5 rounded-full bg-stone-200/10 p-1 backdrop-blur-lg">
      {SOCIAL.map(({ Icon, ...social }) => (
        <li
          className="group relative"
          key={social.id}
          onMouseEnter={() => setHovered(social.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <Link className="relative z-10 flex size-8 items-center justify-center" href={social.href}>
            <Icon className="size-5 transition-colors delay-100 duration-300 group-hover:text-teal-700" />
          </Link>
          <AnimatePresence>
            {hovered === social.id && (
              <motion.span
                animate={{
                  opacity: 1,
                  transition: { duration: 0.01, type: "spring", stiffness: 300, damping: 20 },
                }}
                className={cn("absolute inset-0 z-0 block h-full w-full rounded-full bg-stone-100")}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.01 },
                }}
                initial={{ opacity: 0 }}
                layoutId="cardHoverEffect"
              />
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
};
