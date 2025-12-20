import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
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
          background: "linear-gradient(135deg, #fef3c7 0%, #e0e7ff 50%, #f3e8ff 100%)",
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
          {/* Logo emoji */}
          <div
            style={{
              fontSize: 80,
              marginBottom: 24,
            }}
          >
            🤔
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 56,
              fontWeight: "bold",
              color: "#1f2937",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Do I Love My Job?
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              color: "#6b7280",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            5 questions. 2 minutes. The truth.
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
            Take the Quiz →
          </div>

          {/* Site URL */}
          <div
            style={{
              fontSize: 20,
              color: "#9ca3af",
              marginTop: 32,
            }}
          >
            doilovemyjob.com
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
