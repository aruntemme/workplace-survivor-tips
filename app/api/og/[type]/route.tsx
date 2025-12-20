import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { resultContent, allResultTypes } from "@/lib/quiz/results";
import { ResultType } from "@/lib/quiz/types";
import { calculateFrustrationPercentage } from "@/lib/quiz/scoring";

export const runtime = "edge";

// Gradient backgrounds for each result type
const gradientStyles: Record<ResultType, { from: string; to: string }> = {
  "corporate-optimist": { from: "#fef3c7", to: "#fde68a" },
  "professional-survivor": { from: "#e0e7ff", to: "#c7d2fe" },
  "functioning-cynic": { from: "#e0f2fe", to: "#bae6fd" },
  "quiet-quitter": { from: "#dcfce7", to: "#bbf7d0" },
  "escape-artist": { from: "#f3e8ff", to: "#e9d5ff" },
  "professional-pessimist": { from: "#fce7f3", to: "#fbcfe8" },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  const searchParams = request.nextUrl.searchParams;
  const score = parseInt(searchParams.get("score") || "0", 10);

  // Validate result type
  if (!allResultTypes.includes(type as ResultType)) {
    return new Response("Invalid result type", { status: 400 });
  }

  const content = resultContent[type as ResultType];
  const frustrationPercent = calculateFrustrationPercentage(score);
  const gradient = gradientStyles[type as ResultType];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
          padding: "60px",
        }}
      >
        {/* Glass card container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.85)",
            borderRadius: "32px",
            padding: "48px 64px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            maxWidth: "900px",
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: 24,
              color: "#6b7280",
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            My Workplace Diagnosis
          </div>

          {/* Result title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "#1f2937",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            {content.title}
          </div>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 24px",
              background: content.badgeColor,
              borderRadius: "9999px",
              fontSize: 20,
              color: "white",
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.5)",
              }}
            />
            Level: {content.badgeLevel}
          </div>

          {/* Frustration bar */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 16,
                color: "#6b7280",
                marginBottom: 8,
              }}
            >
              Workplace Frustration Level
            </div>
            <div
              style={{
                width: "80%",
                height: 16,
                background: "#e5e7eb",
                borderRadius: 9999,
                overflow: "hidden",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: `${frustrationPercent}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #4ade80 0%, #facc15 50%, #ef4444 100%)",
                  borderRadius: 9999,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "#374151",
                marginTop: 12,
              }}
            >
              {frustrationPercent}%
            </div>
          </div>

          {/* Site URL */}
          <div
            style={{
              fontSize: 20,
              color: "#9ca3af",
              marginTop: 32,
            }}
          >
            doilovemyjob.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
