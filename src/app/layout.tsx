import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mobrauntech.com"),
  title: {
    default: "Mobrauntech — Websites & Custom Software for Small Businesses",
    template: "%s | Mobrauntech",
  },
  description:
    "Mobrauntech builds professional websites and custom software for small businesses. Modern, fast, and built to grow. Starting at $499.",
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
      { url: "/favicon.ico" },
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
