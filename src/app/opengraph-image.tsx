import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lewis Select — Private Concierge Medicine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F2744",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          color: "#F5F1EA",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 12,
            color: "#B8955A",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Private Concierge Medicine
        </div>
        <div style={{ fontSize: 120, fontWeight: 300, lineHeight: 1.1 }}>
          Lewis <span style={{ fontStyle: "italic", color: "#D4B47A" }}>Select</span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 22,
            color: "rgba(245,241,234,0.55)",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          A doctor who knows you. A practice that respects your time.
        </div>
      </div>
    ),
    { ...size },
  );
}
