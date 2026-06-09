"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/Button";

export default function ProductHighlight() {
  // Select 3 featured products (one of each category)
  const featuredProducts = [
    PRODUCTS.find((p) => p.id === "arom-01"),
    PRODUCTS.find((p) => p.id === "kosm-01"),
    PRODUCTS.find((p) => p.id === "sabn-01"),
  ].filter(Boolean) as typeof PRODUCTS;

  return (
    <section className="py-20 bg-brand-cream/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-sans">
              Koleksi Terbaik Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-forest-green">
              Produk Nilam Pilihan Hari Ini
            </h2>
            <div className="w-12 h-1 bg-brand-gold rounded-full" />
          </div>
          <Link href="/produk">
            <Button variant="outline" className="flex items-center gap-2 font-sans">
              <span>Semua Produk</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
