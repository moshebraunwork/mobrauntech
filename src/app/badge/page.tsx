import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embed Badge — Built by Mobrauntech",
};

// Minimal layout — no nav/footer — suitable for iframe embedding
export default function BadgePage() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: "8px",
          background: "transparent",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <a
          href="https://mobrauntech.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "5px 10px",
            borderRadius: "8px",
            border: "1px solid rgba(0,0,0,0.12)",
            background: "#fff",
            color: "#111",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontSize: "14px" }}>⚡</span>
          Built by Mobrauntech
        </a>
      </body>
    </html>
  );
}
