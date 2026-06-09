"use client";

import React from "react";
import { Sprout, MessageCircle, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.41-.43-.59-.67-.07 1.5-.03 3.01-.03 4.52 0 2.23-.32 4.51-1.63 6.34-1.37 1.94-3.71 3.1-6.11 3.17-2.94.13-5.91-1.39-7.24-4.01-1.46-2.73-1.07-6.28 1.02-8.58 1.77-2.02 4.63-2.83 7.15-2.04v4.11c-1.32-.47-2.89-.16-3.87.84-1.04 1.01-1.2 2.77-.38 3.91.75 1.09 2.15 1.55 3.42 1.15 1.18-.34 1.9-1.44 1.91-2.67.01-3.66.01-7.33.01-11v-.15z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  const whatsappNumber = "6289527227754";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    "Permisi kak ingin tanya lebih lanjut tentang Rumah Produksi Nilam Aceh"
  )}`;

  return (
    <footer className="w-full bg-brand-forest-green text-brand-cream/95 border-t border-brand-gold/20 pt-16 pb-8 z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 border-b border-brand-cream/10 pb-12">
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 bg-brand-cream/10 p-1.5 rounded-brand-md">
                <img
                  src="/images/logo.png"
                  alt="Rumah Produksi Nilam Logo"
                  className="object-contain w-full h-full brightness-0 invert"
                />
              </div>
              <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-brand-cream">
                Rumah Produksi Nilam
              </span>
            </div>
            <p className="text-xs sm:text-sm text-brand-cream/70 leading-relaxed max-w-sm">
              Inovasi produk wirausaha mahasiswa Fakultas Pertanian Universitas Brawijaya. Kami mengolah tanaman nilam Lhokseumawe unggul menjadi produk perawatan natural berkualitas.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.facebook.com/RumahProduksNilamAceh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rumah Produksi Nilam Facebook"
                className="p-2 bg-brand-cream/5 hover:bg-brand-gold/20 hover:text-brand-cream rounded-full transition-all duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/rumahproduksinilamaceh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rumah Produksi Nilam Instagram"
                className="p-2 bg-brand-cream/5 hover:bg-brand-gold/20 hover:text-brand-cream rounded-full transition-all duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Rumah Produksi Nilam TikTok"
                className="p-2 bg-brand-cream/5 hover:bg-brand-gold/20 hover:text-brand-cream rounded-full transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <TikTokIcon />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Rumah Produksi Nilam YouTube"
                className="p-2 bg-brand-cream/5 hover:bg-brand-gold/20 hover:text-brand-cream rounded-full transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <YoutubeIcon />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rumah Produksi Nilam WhatsApp"
                className="p-2 bg-brand-cream/5 hover:bg-brand-gold/20 hover:text-brand-cream rounded-full transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Navigasi Cepat
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-brand-cream/75">
              <Link href="/" className="hover:text-brand-gold transition-colors">Beranda</Link>
              <Link href="/produk" className="hover:text-brand-gold transition-colors">Katalog Produk</Link>
              <Link href="/tentang" className="hover:text-brand-gold transition-colors">Tentang Kami</Link>
              <Link href="/tentang#proses" className="hover:text-brand-gold transition-colors">Cara Pesan</Link>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Kategori Produk
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-brand-cream/75">
              <Link href="/produk?category=Aromaterapi" className="hover:text-brand-gold transition-colors">Aromaterapi</Link>
              <Link href="/produk?category=Kosmetik" className="hover:text-brand-gold transition-colors">Kosmetik</Link>
              <Link href="/produk?category=Sabun+Mandi" className="hover:text-brand-gold transition-colors">Sabun Mandi & Lulur</Link>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-brand-cream/75">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Gedung Fakultas Pertanian, Universitas Brawijaya, Malang, Jawa Timur</span>
              </div>
              <a href={whatsappUrl} className="flex gap-2 items-center hover:text-brand-gold transition-colors">
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                <span>+62 895-2722-7754</span>
              </a>
              <a href="mailto:sentraagronilam@gmail.com" className="flex gap-2 items-center hover:text-brand-gold transition-colors">
                <Mail className="w-4 h-4 text-brand-gold" />
                <span>sentraagronilam@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="w-4 h-4 text-brand-gold" />
            <p className="text-xs text-brand-cream/60 text-center sm:text-left">
              &copy; 2025 Rumah Produksi Nilam. Didukung Brawijaya Startup Action 2026.
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[10px] font-bold tracking-widest uppercase text-emerald-300 backdrop-blur-sm shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Produk 100% Alami</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
