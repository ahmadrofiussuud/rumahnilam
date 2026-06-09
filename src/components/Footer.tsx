"use client";

import React from "react";
import { Leaf, Sprout, MessageCircle, Mail, MapPin } from "lucide-react";
import Link from "next/link";

// Custom Instagram icon SVG
const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Custom TikTok icon path
const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.41-.43-.59-.67-.07 1.5-.03 3.01-.03 4.52 0 2.23-.32 4.51-1.63 6.34-1.37 1.94-3.71 3.1-6.11 3.17-2.94.13-5.91-1.39-7.24-4.01-1.46-2.73-1.07-6.28 1.02-8.58 1.77-2.02 4.63-2.83 7.15-2.04v4.11c-1.32-.47-2.89-.16-3.87.84-1.04 1.01-1.2 2.77-.38 3.91.75 1.09 2.15 1.55 3.42 1.15 1.18-.34 1.9-1.44 1.91-2.67.01-3.66.01-7.33.01-11v-.15z" />
  </svg>
);

export default function Footer() {
  const whatsappNumber = "6281234567890";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    "Halo Sentra Agronilam, saya ingin berkonsultasi mengenai produk olahan nilam."
  )}`;

  return (
    <footer className="w-full bg-agronilam-green text-agronilam-cream/90 border-t border-agronilam-gold/20 pt-16 pb-8 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top 4-Column Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 border-b border-agronilam-cream/10 pb-12">
          
          {/* Column 1: Logo & Brand Description */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-agronilam-cream/10 rounded-lg">
                <Leaf className="w-5 h-5 text-agronilam-gold" />
              </div>
              <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-agronilam-cream">
                Sentra Agronilam
              </span>
            </div>
            <p className="text-xs sm:text-sm text-agronilam-cream/70 leading-relaxed font-sans max-w-sm">
              Inovasi produk wirausaha mahasiswa Fakultas Pertanian Universitas Brawijaya. Kami mengolah tanaman nilam Lhokseumawe unggul menjadi produk perawatan natural berkualitas.
            </p>
            {/* Social media icons links */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sentra Agronilam Instagram"
                className="p-2 bg-agronilam-cream/5 hover:bg-agronilam-gold/20 hover:text-agronilam-cream rounded-full transition-all duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sentra Agronilam TikTok"
                className="p-2 bg-agronilam-cream/5 hover:bg-agronilam-gold/20 hover:text-agronilam-cream rounded-full transition-all duration-300"
              >
                <TikTokIcon />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sentra Agronilam WhatsApp"
                className="p-2 bg-agronilam-cream/5 hover:bg-agronilam-gold/20 hover:text-agronilam-cream rounded-full transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-agronilam-gold font-sans">
              Navigasi Cepat
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-agronilam-cream/75">
              <Link href="/" className="hover:text-agronilam-gold transition-colors">Beranda</Link>
              <Link href="/produk" className="hover:text-agronilam-gold transition-colors">Katalog Produk</Link>
              <Link href="/tentang" className="hover:text-agronilam-gold transition-colors">Tentang Kami</Link>
              <Link href="/tentang#proses" className="hover:text-agronilam-gold transition-colors">Cara Pesan</Link>
            </div>
          </div>

          {/* Column 3: Category Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-agronilam-gold font-sans">
              Kategori Produk
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-agronilam-cream/75">
              <Link href="/produk?category=Aromaterapi" className="hover:text-agronilam-gold transition-colors">Aromaterapi</Link>
              <Link href="/produk?category=Kosmetik" className="hover:text-agronilam-gold transition-colors">Kosmetik</Link>
              <Link href="/produk?category=Sabun+Mandi" className="hover:text-agronilam-gold transition-colors">Sabun Mandi & Lulur</Link>
            </div>
          </div>

          {/* Column 4: Contact details */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-agronilam-gold font-sans">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-agronilam-cream/75 font-sans">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-agronilam-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Gedung Fakultas Pertanian, Universitas Brawijaya, Malang, Jawa Timur</span>
              </div>
              <a href={whatsappUrl} className="flex gap-2 items-center hover:text-agronilam-gold transition-colors">
                <MessageCircle className="w-4 h-4 text-agronilam-gold" />
                <span>+62 812-3456-7890</span>
              </a>
              <a href="mailto:sentraagronilam@gmail.com" className="flex gap-2 items-center hover:text-agronilam-gold transition-colors">
                <Mail className="w-4 h-4 text-agronilam-gold" />
                <span>sentraagronilam@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="w-4 h-4 text-agronilam-gold" />
            <p className="text-xs text-agronilam-cream/60 text-center sm:text-left">
              &copy; 2025 Sentra Agronilam. Didukung PMW Universitas Brawijaya.
            </p>
          </div>

          {/* Green Glassmorphic Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[10px] font-bold tracking-widest uppercase text-emerald-300 backdrop-blur-sm shadow-sm font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Produk 100% Alami</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
