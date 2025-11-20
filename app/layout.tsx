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
    <html lang="en" className="h-full overflow-x-hidden">
      <body className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
        {/* Global layout wrapper */}
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navbar />

          {/* Reserve space for fixed navbar */}
          <main className="flex-1 w-full pt-16 md:pt-20 overflow-x-hidden">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
