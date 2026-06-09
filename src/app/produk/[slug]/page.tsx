"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import ProductDetailSection from "@/components/sections/ProductDetail";
import { PageWrapper } from "@/components/layout/PageWrapper";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductSlugPage({ params }: PageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <PageWrapper className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 pb-24 md:pb-12">
      <div className="mb-6">
        <Link
          href="/produk"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-forest-green/60 hover:text-brand-forest-green uppercase tracking-wider transition-colors font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Katalog
        </Link>
      </div>

      <ProductDetailSection product={product} />

      <WhatsAppFloat />
    </PageWrapper>
  );
}
