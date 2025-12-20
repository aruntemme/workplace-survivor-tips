import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const challengeFrom = searchParams.get("from") || "Someone";

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
          background: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #fce7f3 100%)",
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
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "32px",
            padding: "48px 64px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            maxWidth: "1000px",
          }}
        >
          {/* Challenge emoji */}
          <div
            style={{
              fontSize: 80,
              marginBottom: 24,
            }}
          >
            🎯
          </div>

          {/* Challenge text */}
          <div
            style={{
              fontSize: 28,
              color: "#6b7280",
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {"You've been challenged!"}
          </div>

          {/* Challenger result */}
          <div
            style={{
              fontSize: 48,
              fontWeight: "bold",
              color: "#1f2937",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            {`A "${challengeFrom}" thinks you should take this quiz`}
          </div>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 32px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
              borderRadius: "9999px",
              fontSize: 24,
              color: "white",
              fontWeight: 600,
            }}
          >
            Find out where you stand →
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
