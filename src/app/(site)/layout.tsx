import { ViewTransition } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="scroll-progress" aria-hidden />
      <Navbar />
      <ViewTransition enter="page" exit="page" default="none">
        <main className="flex-1">{children}</main>
      </ViewTransition>
      <Footer />
    </div>
  );
}
