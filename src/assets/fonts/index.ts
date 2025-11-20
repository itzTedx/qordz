import { Chivo_Mono } from "next/font/google";
import localFont from "next/font/local";

export const sfPro = localFont({
  variable: "--font-display",
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
