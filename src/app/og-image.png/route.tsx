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
  const mint = "#78ffde";
  const ink = "#eef1f5";
  const muted = "#8f959f";

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
          background: "#0b0d10",
          color: ink,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -240,
            left: -140,
            width: 720,
            height: 720,
            borderRadius: 360,
            background:
              "radial-gradient(circle, rgba(111,168,255,0.18) 0%, rgba(111,168,255,0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -280,
            right: -180,
            width: 760,
            height: 760,
            borderRadius: 380,
            background:
              "radial-gradient(circle, rgba(120,255,222,0.11) 0%, rgba(120,255,222,0) 66%)",
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
            border: "1px solid rgba(120,255,222,0.24)",
            background: "rgba(120,255,222,0.08)",
            color: mint,
            fontSize: 20,
            letterSpacing: 1.6,
          }}
        >
          <div
            style={{ width: 10, height: 10, borderRadius: 5, background: mint }}
          />
          {AVAILABILITY}
        </div>

        <div
          style={{
            fontSize: 62,
            fontWeight: 500,
            letterSpacing: -1.6,
            lineHeight: 1.15,
            maxWidth: 960,
            marginBottom: 28,
          }}
        >
          Dhruv Patel — software engineer working on distributed systems and ML
          infrastructure.
        </div>

        <div
          style={{
            width: 96,
            height: 3,
            borderRadius: 2,
            background: accent,
            marginBottom: 32,
          }}
        />

        <div style={{ display: "flex", gap: 14 }}>
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
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.045)",
                color: muted,
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
