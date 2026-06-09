"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { PRODUCTS } from "@/lib/data/products";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

export default function KontakPage() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "6289527227754";
    const text = `Permisi kak ingin tanya lebih lanjut tentang Rumah Produksi Nilam Aceh\n\nNama saya: ${name}\nTertarik pada: ${product || "Konsultasi Umum"}\nPesan: ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <PageWrapper className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-forest-green/60 hover:text-brand-forest-green uppercase tracking-wider transition-colors font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-sans">
              Hubungi Kami
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-forest-green">
              Mari Berdiskusi Dengan Tim Kami
            </h1>
            <p className="font-sans text-sm md:text-base text-brand-forest-green/75 leading-relaxed">
              Punya pertanyaan mengenai khasiat minyak nilam, peluang kemitraan, atau ingin memesan dalam jumlah besar? Silakan hubungi kami.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-brand-cream border border-brand-gold/20 rounded-brand-lg text-brand-gold shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="font-sans">
                <h4 className="font-bold text-sm text-brand-forest-green">Alamat Kantor</h4>
                <p className="text-xs sm:text-sm text-brand-forest-green/70 mt-1 leading-relaxed">
                  Gedung FP Brawijaya, Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-brand-cream border border-brand-gold/20 rounded-brand-lg text-brand-gold shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="font-sans">
                <h4 className="font-bold text-sm text-brand-forest-green">Surel Resmi</h4>
                <p className="text-xs sm:text-sm text-brand-forest-green/70 mt-1">
                  sentraagronilam@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-brand-cream border border-brand-gold/20 rounded-brand-lg text-brand-gold shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="font-sans">
                <h4 className="font-bold text-sm text-brand-forest-green">Jam Operasional</h4>
                <p className="text-xs sm:text-sm text-brand-forest-green/70 mt-1">
                  Senin - Sabtu | 08.00 - 17.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Order/Consultation Form */}
        <div className="lg:col-span-7">
          <Card className="border-brand-forest-green/5 shadow-md bg-white rounded-brand-xl p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-serif text-2xl text-brand-forest-green">
                Formulir Pemesanan & Konsultasi
              </CardTitle>
              <CardDescription className="font-sans text-xs sm:text-sm text-brand-forest-green/70 mt-1">
                Isi data di bawah ini untuk memulai obrolan WhatsApp otomatis dengan tim administrasi kami.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6 font-sans text-brand-forest-green">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-brand-forest-green/70">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 border border-brand-forest-green/10 rounded-brand-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-brand-cream/10"
                  />
                </div>

                {/* Product Select dropdown */}
                <div className="space-y-2">
                  <label htmlFor="product" className="text-xs font-bold uppercase tracking-wider text-brand-forest-green/70">
                    Produk yang Diminati (Opsional)
                  </label>
                  <select
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full px-4 py-3 border border-brand-forest-green/10 rounded-brand-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-white cursor-pointer"
                  >
                    <option value="">-- Pilih Produk --</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Kemitraan">Kemitraan Keagenan / Reseller</option>
                    <option value="Lainnya">Lainnya / Konsultasi Umum</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-brand-forest-green/70">
                    Isi Pesan / Keterangan
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan detail pesanan atau pertanyaan Anda di sini..."
                    className="w-full px-4 py-3 border border-brand-forest-green/10 rounded-brand-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-brand-cream/10 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white border-transparent">
                  <MessageCircle className="w-5 h-5 fill-current text-white" />
                  <span>Kirim via WhatsApp</span>
                </Button>

              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating WhatsApp contact */}
      <WhatsAppFloat />
    </PageWrapper>
  );
}
