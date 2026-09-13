import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3E8E82",
          borderRadius: "50%",
          color: "#F3F6F6",
          fontSize: 15,
          fontWeight: 700,
        }}
      >
        MI
      </div>
    ),
    { ...size }
  );
}
