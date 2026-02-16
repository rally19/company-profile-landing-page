import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CorpData - Enterprise Insights",
  description: "Transparency and data accessibility for the modern enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-black text-white antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
