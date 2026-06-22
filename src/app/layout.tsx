import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mobrauntech.com"),
  title: {
    default: "Mobrauntech — Websites & Custom Software for Small Businesses",
    template: "%s | Mobrauntech",
  },
  description:
    "Mobrauntech builds professional websites and custom software for small businesses. Modern, fast, and built to grow. Starting at $499 — you only pay when you're happy.",
  openGraph: {
    type: "website",
    siteName: "Mobrauntech",
    title: "Mobrauntech — Websites & Custom Software for Small Businesses",
    description:
      "Professional websites and custom software for small businesses. Starting at $499. You only pay when you're happy.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobrauntech — Websites & Custom Software for Small Businesses",
    description:
      "Professional websites and custom software for small businesses. Starting at $499.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
