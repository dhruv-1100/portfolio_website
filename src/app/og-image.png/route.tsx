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
  const accent = "#00ffc2";
  const ink = "#f0e6d3";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#0c0c0c",
          color: ink,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -180,
            width: 640,
            height: 640,
            borderRadius: 320,
            background:
              "radial-gradient(circle, rgba(0,255,194,0.16) 0%, rgba(0,255,194,0) 68%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            gap: 12,
            marginBottom: 36,
            padding: "10px 22px",
            borderRadius: 9999,
            border: "1px solid rgba(0,255,194,0.26)",
            background: "rgba(0,255,194,0.10)",
            color: accent,
            fontSize: 20,
            letterSpacing: 1.6,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              background: accent,
            }}
          />
          {AVAILABILITY}
        </div>

        <div
          style={{
            fontSize: 104,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          DHRUV PATEL
        </div>

        <div
          style={{
            width: 96,
            height: 4,
            borderRadius: 2,
            background: accent,
            marginBottom: 32,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 30,
            lineHeight: 1.45,
            color: "rgba(240,230,211,0.70)",
            maxWidth: 900,
            marginBottom: 46,
          }}
        >
          Software engineer building at the intersection of distributed systems,
          applied machine learning, and high-performance computing.
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {[
            "MS CS @ Stony Brook",
            "SWE @ Aaron Technologies",
            "APS GEC 2025",
          ].map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                padding: "12px 24px",
                borderRadius: 9999,
                border: "1px solid rgba(255,240,220,0.12)",
                background: "rgba(255,240,220,0.05)",
                color: "rgba(240,230,211,0.85)",
                fontSize: 20,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
