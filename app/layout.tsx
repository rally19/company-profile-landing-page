import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import companyData from '@/company.json';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: companyData.metadata.title,
  description: companyData.metadata.description,
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
