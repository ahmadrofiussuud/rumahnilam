"use client";

import React from "react";
import { Leaf, Award, Compass, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export default function AboutStory() {
  return (
    <section className="py-20 bg-brand-cream/35 text-brand-forest-green">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-12">
        {/* Brand Origin Story Pull-quote */}
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-sans">
            Kisah & Visi Kami
          </span>
          
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic font-semibold leading-relaxed max-w-4xl mx-auto text-brand-forest-green">
            &ldquo;Berawal dari riset nilam di laboratorium, kini hadir di rumah Anda.&rdquo;
          </blockquote>

          {/* Decorative Leaf Divider SVG */}
          <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-24 bg-brand-gold/30" />
            <Leaf className="w-6 h-6 text-brand-gold" />
            <div className="h-[1px] w-24 bg-brand-gold/30" />
          </div>
        </div>

        {/* Narrative Description */}
        <div className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-brand-forest-green/80 font-sans space-y-4 text-left md:text-center">
          <p>
            Sentra Agronilam lahir sebagai langkah nyata hilirisasi riset wirausaha mahasiswa Fakultas Pertanian Universitas Brawijaya. Didukung penuh oleh program hibah PMW (Program Mahasiswa Wirausaha) UB, kami berkomitmen mengangkat kearifan botani lokal demi kesejahteraan petani nilam di Malang, Jawa Timur.
          </p>
          <p>
            Dengan memadukan ketelitian riset sains dan keandalan budidaya pertanian organik, kami menghadirkan produk aromaterapi, kosmetik, serta sabun mandi berkualitas tinggi. Kami meyakini bahwa perawatan tubuh yang premium sudah selayaknya aman, organik, dan berkelanjutan.
          </p>
        </div>

        {/* 3-Column Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
          <Card className="bg-white border-brand-forest-green/5 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300">
            <CardHeader className="space-y-3">
              <div className="p-3 bg-brand-cream rounded-brand-lg w-fit text-brand-gold">
                <Award className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-bold font-serif">
                Varietas Unggul Lhokseumawe
              </CardTitle>
              <CardDescription className="text-sm font-sans leading-relaxed text-brand-forest-green/75">
                Menggunakan varietas nilam unggulan Lhokseumawe dengan kadar Patchouli Alcohol (PA) tinggi, menghasilkan keharuman woody menenangkan dan tahan lama.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white border-brand-forest-green/5 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300">
            <CardHeader className="space-y-3">
              <div className="p-3 bg-brand-cream rounded-brand-lg w-fit text-brand-gold">
                <Compass className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-bold font-serif">
                Dibudidaya Lokal di Malang
              </CardTitle>
              <CardDescription className="text-sm font-sans leading-relaxed text-brand-forest-green/75">
                Ditanam langsung di wilayah Malang bekerja sama dengan kelompok tani lokal. Menjamin rantai pasok rendah karbon (low carbon footprint).
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white border-brand-forest-green/5 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300">
            <CardHeader className="space-y-3">
              <div className="p-3 bg-brand-cream rounded-brand-lg w-fit text-brand-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-bold font-serif">
                Kemasan Ramah Lingkungan
              </CardTitle>
              <CardDescription className="text-sm font-sans leading-relaxed text-brand-forest-green/75">
                Mengurangi pemakaian plastik sekali pakai dengan mengadopsi kemasan alternatif ramah bumi seperti anyaman pelepah pisang tradisional.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
