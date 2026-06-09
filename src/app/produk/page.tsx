"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/data/products";
import ProductGrid from "@/components/sections/ProductGrid";
import { PageWrapper } from "@/components/layout/PageWrapper";

function CatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10 text-center sm:text-left">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-forest-green/60 hover:text-brand-forest-green mb-3 uppercase tracking-wider transition-colors font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Kembali ke Beranda
        </Link>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-brand-forest-green font-bold tracking-tight">
          Koleksi Produk Nilam Kami
        </h1>
        <p className="font-sans text-sm sm:text-base text-brand-forest-green/75 max-w-2xl mt-2 leading-relaxed">
          Setiap produk diformulasikan menggunakan minyak nilam murni varietas Lhokseumawe yang dibudidayakan di Malang secara presisi melalui bimbingan akademis Universitas Brawijaya.
        </p>
      </div>

      <ProductGrid products={PRODUCTS} initialCategory={categoryParam} />
    </div>
  );
}

export default function Catalog() {
  return (
    <PageWrapper>
      <Suspense
        fallback={
          <div className="min-h-[50vh] flex items-center justify-center text-brand-forest-green pt-24 font-sans">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-gold"></div>
              <p className="text-sm font-semibold uppercase tracking-wider opacity-70">
                Memuat Katalog...
              </p>
            </div>
          </div>
        }
      >
        <CatalogContent />
      </Suspense>
    </PageWrapper>
  );
}
