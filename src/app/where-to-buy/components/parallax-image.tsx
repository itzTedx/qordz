"use client";

import { useRef } from "react";

import Image from "next/image";

import { useScroll, useTransform } from "motion/react";

export const ParallaxImage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ["-75%", "65%"]);

  return (
    <div ref={containerRef}>
      <Image
        alt="Qordz Products"
        className="object-cover brightness-75 md:brightness-100"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 80vw"
        src="/images/qordz-products.webp"
      />
    </div>
  );
};
