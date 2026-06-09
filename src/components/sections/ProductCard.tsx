"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const badgeVariant =
    product.category === "Aromaterapi"
      ? "teal"
      : product.category === "Kosmetik"
      ? "rose"
      : "amber";

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <Card className="group flex flex-col justify-between overflow-hidden border border-brand-forest-green/10 bg-white hover:border-brand-gold/30 hover:-translate-y-2 hover:shadow-xl duration-300 rounded-brand-xl">
      <div>
        {/* Card Image Wrapper with 4:3 Aspect Ratio */}
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream/35">
          {/* Top-Left Special Tag */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="secondary" className="flex items-center gap-1 text-[10px] uppercase shadow-sm">
              <Leaf className="w-2.5 h-2.5" />
              <span>{product.badge}</span>
            </Badge>
          </div>

          {/* Product Image */}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <CardHeader className="space-y-2.5">
          <div className="flex justify-between items-center">
            {/* Color-coded category badge */}
            <Badge variant={badgeVariant} className="text-[10px] uppercase tracking-wider font-sans">
              {product.category}
            </Badge>
            <span className="font-sans font-bold text-sm text-brand-forest-green">
              {formattedPrice}
            </span>
          </div>

          <CardTitle className="text-lg font-serif font-bold text-brand-forest-green hover:text-brand-gold transition-colors">
            <Link href={`/produk/${product.slug}`}>
              {product.name}
            </Link>
          </CardTitle>

          <CardDescription className="text-xs font-sans leading-relaxed text-brand-forest-green/70 line-clamp-2">
            {product.description}
          </CardDescription>
        </CardHeader>
      </div>

      <CardFooter className="pt-0">
        <Link href={`/produk/${product.slug}`} className="w-full">
          <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 group-hover:bg-brand-forest-green group-hover:text-brand-cream duration-300">
            <span>Lihat Detail</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
