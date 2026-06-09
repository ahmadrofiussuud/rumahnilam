"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  initialCategory?: string;
}

export default function ProductGrid({ products, initialCategory = "All" }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = ["All", "Aromaterapi", "Kosmetik", "Sabun Mandi"];

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.benefits.some(b => b.text.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between font-sans">
        
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-forest-green/50" />
          <input
            type="text"
            placeholder="Cari produk (contoh: 'gatal', 'serum')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-brand-forest-green/10 bg-white rounded-brand-md text-sm text-brand-forest-green placeholder-brand-forest-green/45 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-brand-md transition-all duration-300 focus:outline-none ${
                selectedCategory === cat
                  ? "bg-brand-forest-green text-brand-cream shadow-md"
                  : "bg-white hover:bg-brand-cream border border-brand-forest-green/10 text-brand-forest-green"
              }`}
            >
              {cat === "All" ? "Semua" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 space-y-3 font-sans">
          <p className="text-brand-forest-green/60 text-lg">
            Tidak ada produk yang sesuai dengan filter Anda.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-brand-gold font-semibold underline hover:text-brand-gold-light"
          >
            Atur Ulang Pencarian
          </button>
        </div>
      )}
    </div>
  );
}
