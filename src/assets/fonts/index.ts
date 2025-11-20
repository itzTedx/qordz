import { Chivo_Mono } from "next/font/google";
import localFont from "next/font/local";

export const acidGrotesk = localFont({
  variable: "--font-display",
  display: "swap",
  preload: true,
  src: [
    { path: "./acid-grotesk/FFF-AcidGrotesk-Medium.otf", weight: "500" },
    { path: "./acid-grotesk/FFF-AcidGrotesk-Regular.otf", weight: "400" },
    { path: "./acid-grotesk/FFF-AcidGrotesk-Normal.otf", weight: "300" },
  ],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "SF Pro Text",
    "SF Pro Display",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

export const sfPro = localFont({
  variable: "--font-sans",
  display: "swap",
  preload: true,
  src: "./sf-pro/SF-Pro.ttf",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "SF Pro Text",
    "SF Pro Display",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

export const mono = Chivo_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "500",
  fallback: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
});
