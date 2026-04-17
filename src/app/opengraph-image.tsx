import { ImageResponse } from "next/og";

export const alt = "Qordz \u2013 Premium Mobile Accessories in UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "linear-gradient(135deg, #0f766e 0%, #0d9488 55%, #14b8a6 100%)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: 18,
            background: "white",
            color: "#0d9488",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: "-0.05em",
          }}
        >
          Q
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 46, fontWeight: 800, letterSpacing: "-0.03em" }}>Qordz</div>
          <div style={{ fontSize: 22, opacity: 0.9 }}>qordz.com</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 980,
          }}
        >
          Premium mobile accessories, engineered in Dubai.
        </div>
        <div style={{ fontSize: 30, opacity: 0.95, maxWidth: 900 }}>
          TWS earbuds \u2022 Power banks \u2022 Fast-charging cables \u2022 Adapters
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              padding: "10px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.16)",
              border: "1px solid rgba(255,255,255,0.35)",
            }}
          >
            Shipping across UAE & GCC
          </div>
        </div>
        <div style={{ display: "flex", opacity: 0.9 }}>Shop at qordz.com</div>
      </div>
    </div>,
    { ...size }
  );
}
