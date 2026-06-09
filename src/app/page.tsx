"use client";

import React from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import HeroSection from "@/components/sections/HeroSection";
import ProductHighlight from "@/components/sections/ProductHighlight";
import AboutStory from "@/components/sections/AboutStory";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import CTABanner from "@/components/sections/CTABanner";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Product Highlight Showcase */}
      <ProductHighlight />

      {/* Brand Origin Story */}
      <AboutStory />

      {/* Production Process Timeline */}
      <ProcessTimeline />

      {/* Customer Testimonial Slider */}
      <TestimonialCarousel />

      {/* Global Call to Action Banner */}
      <CTABanner />

      {/* Floating WhatsApp Contact Bubble */}
      <WhatsAppFloat />
    </PageWrapper>
  );
}
