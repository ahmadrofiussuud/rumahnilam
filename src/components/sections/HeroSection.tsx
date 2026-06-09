"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sprout, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const whatsappNumber = "6289527227754";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    "Permisi kak ingin tanya lebih lanjut tentang Rumah Produksi Nilam Aceh"
  )}`;

  return (
    <section className="relative bg-brand-cream overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      
      {/* Decorative Botanical Leaf SVG Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="absolute right-0 top-0 h-[600px] w-[600px] text-brand-forest-green" fill="currentColor" viewBox="0 0 100 100">
          <path d="M70,10 C50,20 40,40 30,60 C20,70 10,80 0,90 C15,95 30,90 45,80 C60,65 75,40 80,20 Z" />
        </svg>
        <svg className="absolute left-0 bottom-0 h-[400px] w-[400px] text-brand-forest-green" fill="currentColor" viewBox="0 0 100 100">
          <path d="M30,90 C45,80 55,60 65,40 C75,30 85,20 100,10 C85,5 70,10 55,20 C40,35 25,60 20,80 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 z-10 w-full pt-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6 text-left"
        >
          {/* Floating University Support Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-gold/30 bg-white/60 text-brand-gold text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm font-sans">
            <Sprout className="w-4 h-4" />
            <span>Didukung Brawijaya Startup Action 2026</span>
          </motion.div>

          {/* Heading in Playfair Display serif */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-forest-green"
          >
            Inovasi Minyak Nilam Alami Untuk Kesejahteraan Anda
          </motion.h1>

          {/* Subheading in Inter font */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm md:text-base lg:text-lg text-brand-forest-green/80 max-w-xl leading-relaxed"
          >
            Rumah Produksi Nilam menghadirkan rangkaian aromaterapi, kosmetik, dan sabun mandi premium dari distilasi minyak nilam varietas unggul Lhokseumawe.
          </motion.p>

          {/* Staggered CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-4">
            <Link href="/produk" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-brand-forest-green text-brand-cream hover:bg-brand-forest-green/95">
                Beli Sekarang
              </Button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-brand-forest-green/25 text-brand-forest-green hover:bg-brand-forest-green/10 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 fill-current text-brand-forest-green" />
                <span>Konsultasi Produk</span>
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-forest-green/40">
        <span className="text-[10px] font-bold uppercase tracking-widest font-sans">Gulir Kebawah</span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
