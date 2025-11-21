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
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      className="pointer-events-none absolute top-1/2 right-0"
      initial={{ opacity: 0, filter: "blur(12px)", y: 120 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div ref={containerRef} style={{ y: translateY }}>
        <Image alt="Airtune Lite" height={876} src="/images/qordz-airtune.webp" width={1080} />
      </motion.div>
    </motion.div>
  );
}
