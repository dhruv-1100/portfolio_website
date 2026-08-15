import { ImageResponse } from "next/og";
import { AVAILABILITY } from "@/lib/site";

export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

/**
 * Generated at build time so the social card lives in source rather than as a
 * committed binary. Uses the runtime's built-in fonts — no network fetch and
 * no font blobs in the repo.
 */
export function GET() {
  const accent = "#6fa8ff";
  const bg = "#08090b";
  const ink = "#f4f5f3";
  const dim = "#8b8f98";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "76px 80px",
          background: bg,
          color: ink,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -300,
            left: 200,
            width: 900,
            height: 700,
            background:
              "radial-gradient(ellipse at center, rgba(111,168,255,0.14) 0%, rgba(111,168,255,0) 62%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -340,
            left: -180,
            width: 760,
            height: 760,
            borderRadius: 380,
            background:
              "radial-gradient(circle, rgba(110,130,255,0.12) 0%, rgba(110,130,255,0) 64%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 34,
            color: accent,
            fontSize: 19,
            letterSpacing: 3,
          }}
        >
          <div
            style={{ width: 9, height: 9, borderRadius: 5, background: accent }}
          />
          {AVAILABILITY}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: -3.4,
            lineHeight: 1.02,
            marginBottom: 34,
          }}
        >
          <span>I build software</span>
          <span>
            <span style={{ color: dim }}>systems that</span> hold up
          </span>
          <span style={{ color: dim }}>in production.</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 64, height: 2, background: accent }} />
          <div style={{ display: "flex", color: dim, fontSize: 21, letterSpacing: 1.4 }}>
            DHRUV PATEL · MS CS @ STONY BROOK · SWE @ AARON TECHNOLOGIES
          </div>
        </div>
      </div>
    ),
    size
  );
}
