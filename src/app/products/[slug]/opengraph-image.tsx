import { ImageResponse } from "next/og";

import { findProductBySlug } from "@/lib/seo";

import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Qordz product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

async function loadProductImage(relativePath?: string): Promise<string | null> {
  if (!relativePath) return null;
  try {
    const cleaned = relativePath.startsWith("/") ? relativePath.slice(1) : relativePath;
    const filePath = path.join(process.cwd(), "public", cleaned);
    const buffer = await readFile(filePath);
    const ext = path.extname(cleaned).toLowerCase();
    const mime =
      ext === ".png"
        ? "image/png"
        : ext === ".jpg" || ext === ".jpeg"
          ? "image/jpeg"
          : ext === ".webp"
            ? "image/webp"
            : ext === ".gif"
              ? "image/gif"
              : "image/png";
    return `data:${mime};base64,${buffer.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function ProductOgImage({ params }: Props) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  const title = product?.name ?? "Qordz";
  const tagline = product?.shortTagline ?? "Premium mobile accessories in UAE";
  const price = product?.price;
  const category = product?.category ?? "Mobile Accessories";
  const productImage = await loadProductImage(product?.images?.[0]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 56,
        background: "linear-gradient(135deg, #0f766e 0%, #0d9488 55%, #14b8a6 100%)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "white",
              color: "#0d9488",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-0.05em",
            }}
          >
            Q
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>Qordz</div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "8px 18px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.16)",
            border: "1px solid rgba(255,255,255,0.35)",
            fontSize: 22,
          }}
        >
          {category}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 48,
          marginTop: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            flex: 1,
            maxWidth: 620,
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 28, opacity: 0.95, lineHeight: 1.3 }}>{tagline}</div>

          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 12 }}>
            {price !== undefined ? (
              <>
                <span style={{ fontSize: 26, opacity: 0.8 }}>From</span>
                <span style={{ fontSize: 56, fontWeight: 800 }}>AED {price}</span>
              </>
            ) : (
              <span style={{ fontSize: 28 }}>Shop premium accessories in the UAE</span>
            )}
          </div>
        </div>

        {productImage ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 420,
              height: 420,
              borderRadius: 28,
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
              padding: 24,
            }}
          >
            {/* biome-ignore lint/performance/noImgElement: ImageResponse requires plain img */}
            <img
              alt={title}
              height={372}
              src={productImage}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              width={372}
            />
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 24,
          opacity: 0.9,
          marginTop: 24,
        }}
      >
        <div style={{ display: "flex" }}>Engineered in Dubai · Delivered across the GCC</div>
        <div style={{ display: "flex" }}>qordz.com</div>
      </div>
    </div>,
    { ...size }
  );
}
