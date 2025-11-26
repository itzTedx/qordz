"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxImage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ["-75%", "65%"]);

  return (
    <motion.div
      animate={{ filter: "blur(0px)", scale: 1 }}
      className="pointer-events-none absolute inset-0"
      initial={{ filter: "blur(12px)", scale: 1.05 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div className="relative h-full min-h-[420px] w-full" ref={containerRef} style={{ y: translateY }}>
        <Image
          alt="Qordz Products"
          className="object-cover brightness-75 md:brightness-100"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
          src="/images/qordz-products.webp"
        />
        <div className="absolute inset-0 bg-linear-to-t from-teal-950/70 via-transparent to-transparent md:from-transparent" />
      </motion.div>
    </motion.div>
  );
}
