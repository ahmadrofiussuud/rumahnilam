"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function CTABanner() {
  const whatsappNumber = "6289527227754";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    "Permisi kak ingin tanya lebih lanjut tentang Rumah Produksi Nilam Aceh"
  )}`;

  return (
    <section className="relative overflow-hidden bg-brand-forest-green py-20 text-brand-cream">
      {/* Decorative Background Leaf Patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="absolute -left-16 -top-16 h-96 w-96" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 0C60 30 90 40 100 50C90 60 60 70 50 100C40 70 10 60 0 50C10 40 40 30 50 0Z" />
        </svg>
        <svg className="absolute -right-16 -bottom-16 h-96 w-96" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 0C60 30 90 40 100 50C90 60 60 70 50 100C40 70 10 60 0 50C10 40 40 30 50 0Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Eksklusif & Alami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Rasakan Kebaikan Alami Minyak Nilam Lhokseumawe Terbaik
          </h2>
          <p className="text-sm md:text-base text-brand-cream/80 max-w-2xl mx-auto leading-relaxed">
            Dukung produk lokal karya mahasiswa Universitas Brawijaya yang memadukan riset laboratorium dengan budidaya lokal berkualitas tinggi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/produk">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                <span>Jelajahi Produk</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-brand-cream text-brand-cream hover:bg-brand-cream/15 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 fill-current text-brand-cream" />
                <span>Konsultasi via WhatsApp</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
