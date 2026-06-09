"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/lib/animations";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

function StatItem({ value, suffix, label, description }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const countVal = useCountUp(isInView ? value : 0, 2);

  return (
    <div ref={ref} className="text-center space-y-2 p-4 font-sans">
      <div className="font-serif text-4xl md:text-5xl font-extrabold text-brand-gold">
        {countVal}
        {suffix}
      </div>
      <div className="font-bold text-xs md:text-sm text-brand-forest-green tracking-wide uppercase">
        {label}
      </div>
      <p className="text-xs text-brand-forest-green/70 max-w-[200px] mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-brand-cream border-y border-brand-forest-green/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            value={95}
            suffix="%"
            label="Pasar Dunia"
            description="Indonesia memasok mayoritas kebutuhan minyak nilam dunia."
          />
          <StatItem
            value={1057}
            suffix=" Ton"
            label="Volume Ekspor"
            description="Ekspor minyak nilam Indonesia ke mancanegara setiap tahun."
          />
          <StatItem
            value={6}
            suffix=" Bulan"
            label="Siklus Panen"
            description="Masa tanam nilam Lhokseumawe hingga siap dipanen di Malang."
          />
          <StatItem
            value={100}
            suffix="%"
            label="Kandungan Alami"
            description="Bebas paraben, alkohol, pewarna buatan, dan silikon kimia."
          />
        </div>
      </div>
    </section>
  );
}
