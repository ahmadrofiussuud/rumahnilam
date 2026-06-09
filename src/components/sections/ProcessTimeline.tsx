"use client";

import React from "react";
import { Sprout, Sun, Factory, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

const STEPS = [
  {
    number: "01",
    title: "Pembibitan Unggul",
    description: "Pemilihan bibit varietas Lhokseumawe unggulan yang memiliki kadar patchouli alcohol (PA) tinggi di laboratorium Universitas Brawijaya.",
    icon: <Sprout className="w-6 h-6 text-brand-gold" />,
  },
  {
    number: "02",
    title: "Budidaya Lokal",
    description: "Nilam ditanam secara organik dan berkelanjutan oleh petani lokal di Malang dengan siklus masa tanam terkontrol selama kurang lebih 6 bulan.",
    icon: <Sun className="w-6 h-6 text-brand-gold" />,
  },
  {
    number: "03",
    title: "Panen & Ekstraksi",
    description: "Pemanenan daun nilam kering secara selektif diikuti metode penyulingan uap (steam distillation) higienis untuk menjaga kemurnian ekstraksinya.",
    icon: <Factory className="w-6 h-6 text-brand-gold" />,
  },
  {
    number: "04",
    title: "Formulasi Produk",
    description: "Minyak nilam berkualitas tinggi diformulasikan menjadi produk akhir aromaterapi, kosmetik, dan sabun mandi alami yang 100% aman.",
    icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
  },
];

export default function ProcessTimeline() {
  return (
    <section id="proses" className="py-20 bg-brand-cream text-brand-forest-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-sans">
            Proses Produksi Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Dari Laboratorium ke Rumah Anda
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full mt-2" />
          <p className="text-xs sm:text-sm text-brand-forest-green/70 max-w-xl mx-auto font-sans leading-relaxed">
            Menjamin kualitas terbaik di setiap tahap penyediaan produk, mulai dari pembibitan di kampus hingga pengemasan akhir yang ramah lingkungan.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => (
            <Card
              key={idx}
              className="border-brand-forest-green/5 hover:border-brand-gold/30 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative"
            >
              {/* Connector Lines (Desktop Only) */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-6 border-t-2 border-dashed border-brand-gold/30 z-10" />
              )}

              <CardHeader className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-3 bg-brand-cream rounded-brand-lg">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold font-serif text-brand-gold/20">
                    {step.number}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold font-serif">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-sm font-sans leading-relaxed text-brand-forest-green/80">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
