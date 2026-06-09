"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import AboutStory from "@/components/sections/AboutStory";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TeamGrid from "@/components/sections/TeamGrid";
import StatsBar from "@/components/sections/StatsBar";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

export default function AboutUsPage() {
  return (
    <PageWrapper className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-forest-green/60 hover:text-brand-forest-green uppercase tracking-wider transition-colors font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Brand Story Block */}
      <AboutStory />

      {/* Numerical Stats Bar */}
      <StatsBar />

      {/* Production Process Timeline */}
      <ProcessTimeline />

      {/* Founders Team Grid */}
      <TeamGrid />

      {/* Support / Partners */}
      <section className="py-16 text-center font-sans border-t border-brand-forest-green/10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-forest-green/50">
          Kemitraan & Dukungan
        </span>
        <h2 className="font-serif text-2xl text-brand-forest-green font-normal mt-2 mb-10">
          Didukung Oleh
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Sponsor 1: Universitas Brawijaya */}
          <div className="px-8 py-5 border border-brand-forest-green/15 rounded-brand-lg bg-white flex flex-col items-center justify-center gap-1.5 min-w-[240px] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-700 text-xs">
              UB
            </div>
            <h4 className="font-serif text-sm font-bold text-brand-forest-green leading-snug">
              Universitas Brawijaya
            </h4>
            <span className="text-[9px] font-bold uppercase tracking-wider text-brand-forest-green/50">
              Malang, Indonesia
            </span>
          </div>

          {/* Sponsor 2: PMW */}
          <div className="px-8 py-5 border border-brand-gold/25 rounded-brand-lg bg-white flex flex-col items-center justify-center gap-1.5 min-w-[240px] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center font-bold text-amber-700 text-xs">
              PMW
            </div>
            <h4 className="font-serif text-sm font-bold text-brand-forest-green leading-snug">
              Program Mahasiswa Wirausaha
            </h4>
            <span className="text-[9px] font-bold uppercase tracking-wider text-brand-gold">
              Pendanaan Hibah UB
            </span>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Bubble */}
      <WhatsAppFloat />
    </PageWrapper>
  );
}
