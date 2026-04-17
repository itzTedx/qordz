import { ImageResponse } from "next/og";

import { findProductBySlug } from "@/lib/seo";

export const alt = "Qordz product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductOgImage({ params }: Props) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  const title = product?.name ?? "Qordz";
  const tagline = product?.shortTagline ?? "Premium mobile accessories in UAE";
  const price = product?.price;
  const category = product?.category ?? "Mobile Accessories";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
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

      <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 1040 }}>
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 32, opacity: 0.95 }}>{tagline}</div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 26,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          {price !== undefined ? (
            <>
              <span style={{ fontSize: 28, opacity: 0.8 }}>From</span>
              <span style={{ fontSize: 52, fontWeight: 800 }}>AED {price}</span>
            </>
          ) : (
            <span style={{ fontSize: 28 }}>Shop premium accessories in the UAE</span>
          )}
        </div>
        <div style={{ display: "flex", opacity: 0.9 }}>qordz.com</div>
      </div>
    </div>,
    { ...size }
  );
}
