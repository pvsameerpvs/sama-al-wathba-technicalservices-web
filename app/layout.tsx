import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Sama Al Wathba Technical Services L.L.C",
  description:
    "Interior fit-out, technical services, and facility management company based in Dubai, UAE.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1 pt-">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
