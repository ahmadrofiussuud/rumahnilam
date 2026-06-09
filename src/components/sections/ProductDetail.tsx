"use client";

import React, { useState } from "react";
import { Leaf, Droplets, Shield, Sparkles, MapPin, MessageCircle, Star } from "lucide-react";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Card, CardContent } from "@/components/ui/Card";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  const whatsappNumber = "6289527227754";
  const orderMessage = `Permisi kak ingin tanya lebih lanjut tentang Rumah Produksi Nilam Aceh\n\nSaya tertarik dengan produk ${product.name} seharga ${formattedPrice}. Mohon info selengkapnya.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(orderMessage)}`;

  // Mapping benefit icons dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "leaf":
        return <Leaf className="w-5 h-5 text-brand-gold" />;
      case "droplet":
      case "droplets":
        return <Droplets className="w-5 h-5 text-brand-gold" />;
      case "shield":
        return <Shield className="w-5 h-5 text-brand-gold" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-brand-gold" />;
      default:
        return <Leaf className="w-5 h-5 text-brand-gold" />;
    }
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Product Gallery */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Large image with Hover Zoom */}
          <div className="relative aspect-[4/3] rounded-brand-xl overflow-hidden border border-brand-forest-green/10 bg-brand-cream/35 group shadow-sm">
            <div className="absolute top-4 left-4 z-10">
              <Badge variant="secondary" className="uppercase font-sans font-bold shadow-md">
                {product.badge}
              </Badge>
            </div>

            {/* Main Product Image with Zoom on Hover */}
            <img
              src={product.images[activeImageIdx]}
              alt={`${product.name} - View ${activeImageIdx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-4">
            {product.images.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`w-20 aspect-[4/3] rounded-brand-md border-2 overflow-hidden bg-white hover:bg-brand-cream/50 transition-all ${
                  activeImageIdx === idx ? "border-brand-gold shadow-sm scale-95" : "border-brand-forest-green/10"
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <Badge variant="outline" className="font-sans uppercase text-xs tracking-wider">
              {product.category}
            </Badge>
            <h1 className="font-serif text-3xl font-bold leading-tight text-brand-forest-green">
              {product.name}
            </h1>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
              ))}
              <span className="text-xs font-bold text-brand-forest-green/60 ml-2 font-sans">
                4.8 / 5.0 (Static Review)
              </span>
            </div>
          </div>

          <div className="text-2xl font-serif font-extrabold text-brand-gold">
            {formattedPrice}
          </div>

          <p className="text-sm md:text-base leading-relaxed text-brand-forest-green/80 font-sans">
            {product.description}
          </p>

          {/* Manfaat Utama Section */}
          <div className="space-y-4 pt-4 border-t border-brand-forest-green/10">
            <h3 className="font-serif text-lg font-bold text-brand-forest-green">
              Manfaat Utama
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-sans">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-2 items-start text-xs sm:text-sm text-brand-forest-green/85">
                  <div className="p-1 bg-brand-cream rounded-brand-md shrink-0">
                    {getIcon(benefit.icon)}
                  </div>
                  <span className="leading-tight mt-0.5">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Active Ingredients Accordion */}
          <div className="space-y-3 pt-4 border-t border-brand-forest-green/10">
            <h3 className="font-serif text-lg font-bold text-brand-forest-green">
              Bahan Aktif
            </h3>
            <Accordion type="single">
              {product.ingredients.map((ingredient, i) => (
                <AccordionItem
                  key={i}
                  value={`ingr-${i}`}
                  trigger={<span className="text-sm font-semibold">{ingredient.name}</span>}
                >
                  <p className="text-xs sm:text-sm leading-relaxed text-brand-forest-green/75">
                    {ingredient.function}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Usage Steps */}
          <div className="space-y-4 pt-4 border-t border-brand-forest-green/10">
            <h3 className="font-serif text-lg font-bold text-brand-forest-green">
              Cara Penggunaan
            </h3>
            <ol className="space-y-3 font-sans">
              {product.usage.map((step, i) => (
                <li key={i} className="flex gap-3 items-start text-xs sm:text-sm text-brand-forest-green/80">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 text-brand-gold font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 border border-brand-gold/20">
                    {i + 1}
                  </div>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Provenance map pin card */}
          <div className="pt-4 border-t border-brand-forest-green/10">
            <Card className="border-brand-gold/20 bg-brand-cream/20 rounded-brand-lg">
              <CardContent className="flex gap-3 items-center p-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-xs font-sans text-brand-forest-green uppercase tracking-wide">
                    Asal Bahan Baku
                  </h4>
                  <p className="text-xs text-brand-forest-green/80 font-sans mt-0.5 leading-relaxed">
                    {product.provenance}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Purchase button (Desktop view) */}
          <div className="hidden sm:block pt-6">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white border-transparent">
                <MessageCircle className="w-5 h-5 fill-current text-white" />
                <span>Pesan Sekarang via WhatsApp</span>
              </Button>
            </a>
          </div>

        </div>
      </div>

      {/* Sticky Mobile purchase bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-forest-green/10 p-4 flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-[10px] uppercase font-bold text-brand-forest-green/50 font-sans">Harga</span>
          <div className="text-base font-serif font-extrabold text-brand-gold">{formattedPrice}</div>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white border-transparent flex items-center gap-1.5 rounded-full py-2.5 px-5">
            <MessageCircle className="w-4 h-4 fill-current text-white" />
            <span className="text-xs font-bold font-sans">Pesan WhatsApp</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
