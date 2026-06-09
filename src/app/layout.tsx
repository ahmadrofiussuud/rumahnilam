import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rumah Produksi Nilam | Premium Patchouli-derived Natural Products",
  description: "Produk aromaterapi, kosmetik, dan sabun alami berbasis minyak nilam varietas Lhokseumawe — dibudidaya dan diolah di Malang. Didukung oleh Brawijaya Startup Action 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-brand-cream text-brand-forest-green`}
      >
        <div className="flex flex-col min-h-screen justify-between">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
