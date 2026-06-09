"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { Card, CardContent } from "@/components/ui/Card";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((curr) => (curr === 0 ? TESTIMONIALS.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrent((curr) => (curr === TESTIMONIALS.length - 1 ? 0 : curr + 1));
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="bg-brand-cream/45 py-20 text-brand-forest-green">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Testimoni Pelanggan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Apa Kata Mereka Tentang Kami?
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full mt-2" />
        </div>

        <div className="relative min-h-[320px] md:min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              <Card className="border-brand-gold/15 bg-white shadow-md rounded-brand-xl p-8 relative overflow-hidden">
                <Quote className="absolute right-6 top-6 w-20 h-20 text-brand-gold/5 pointer-events-none" />
                <CardContent className="flex flex-col md:flex-row gap-6 items-center p-0">
                  
                  {/* Avatar Initial Circle */}
                  <div className="w-20 h-20 rounded-full bg-brand-forest-green/10 flex items-center justify-center font-bold text-2xl text-brand-forest-green shrink-0 shadow-inner">
                    {testimonial.name[0]}
                  </div>

                  <div className="space-y-3 flex-grow text-center md:text-left">
                    <div className="flex gap-1 justify-center md:justify-start">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <p className="text-sm md:text-base italic font-serif leading-relaxed text-brand-forest-green/90">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-brand-forest-green">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-brand-forest-green/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12">
            <button
              onClick={prev}
              className="p-2.5 rounded-full bg-white hover:bg-brand-cream border border-brand-forest-green/15 text-brand-forest-green shadow-sm hover:scale-105 active:scale-95 transition-all focus:outline-none"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12">
            <button
              onClick={next}
              className="p-2.5 rounded-full bg-white hover:bg-brand-cream border border-brand-forest-green/15 text-brand-forest-green shadow-sm hover:scale-105 active:scale-95 transition-all focus:outline-none"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicators Dots */}
        <div className="flex gap-1.5 justify-center mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                current === idx ? "bg-brand-gold w-6" : "bg-brand-forest-green/20"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
