import { ImageResponse } from "next/og";
import { profile } from "@/lib/profile";

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
          gap: 16,
          padding: "90px",
          background: "#F3F6F6",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "#DCEEEB",
            opacity: 0.7,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "#EAF3E9",
            opacity: 0.6,
            display: "flex",
          }}
        />
        <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: "#3E8E82" }}>
          Hola, soy
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#1F2E33" }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 34, fontWeight: 600, color: "#3E8E82" }}>
          {profile.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
