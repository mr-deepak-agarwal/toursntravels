import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

// Generated social-share card (1200x630). Replace by dropping an opengraph-image.jpg into /app if
// you prefer a designed photo card.
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0B1F3A 0%, #12395f 60%, #2F9C89 100%)",
          color: "#FBF3E6",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#7ad3c1" }}>Goa</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 20, lineHeight: 1.1 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 34, marginTop: 28, opacity: 0.85 }}>Taxi · Self Drive · Sightseeing · Holiday Packages</div>
      </div>
    ),
    size
  );
}
