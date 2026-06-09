"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BotanicalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Radial Gradient overlay for soft focal lighting */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#F5EFE0_90%)]"
        style={{ mixBlendMode: "multiply" }}
      />

      {/* Repeating Botanical SVG Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.06] sm:opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="patchouli-leaves-pattern"
              x="0"
              y="0"
              width="180"
              height="180"
              patternUnits="userSpaceOnUse"
            >
              {/* Branch 1 */}
              <path
                d="M 20,160 C 40,130 60,80 30,30"
                fill="none"
                stroke="#2D4A1E"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Leaf 1-A */}
              <path
                d="M 38,110 C 18,105 8,85 18,75 C 28,65 38,85 38,110 Z"
                fill="#2D4A1E"
                fillOpacity="0.1"
                stroke="#2D4A1E"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              {/* Leaf 1-B */}
              <path
                d="M 45,75 C 65,70 75,50 65,40 C 55,30 45,50 45,75 Z"
                fill="#2D4A1E"
                fillOpacity="0.1"
                stroke="#2D4A1E"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />

              {/* Branch 2 (Offset and mirrored) */}
              <path
                d="M 110,180 C 115,130 140,90 160,50"
                fill="none"
                stroke="#2D4A1E"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Leaf 2-A */}
              <path
                d="M 125,135 C 105,125 100,105 112,95 C 124,85 130,110 125,135 Z"
                fill="#2D4A1E"
                fillOpacity="0.1"
                stroke="#2D4A1E"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              {/* Leaf 2-B */}
              <path
                d="M 145,85 C 165,85 175,65 165,55 C 155,45 145,65 145,85 Z"
                fill="#2D4A1E"
                fillOpacity="0.1"
                stroke="#2D4A1E"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              
              {/* Tiny details */}
              <circle cx="90" cy="120" r="1.5" fill="#2D4A1E" />
              <circle cx="150" cy="150" r="1" fill="#2D4A1E" />
              <circle cx="50" cy="20" r="1" fill="#2D4A1E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#patchouli-leaves-pattern)" />
        </svg>
      </div>

      {/* Large Premium Floating Leaf Elements (For Depth) */}
      
      {/* Top Left Leaf */}
      <motion.div
        className="absolute -top-16 -left-16 w-64 h-64 md:w-96 md:h-96 text-agronilam-green opacity-[0.07] sm:opacity-[0.09]"
        animate={{
          x: [0, 15, -5, 0],
          y: [0, -10, 12, 0],
          rotate: [0, 4, -3, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform -rotate-12">
          <path
            d="M10,90 C30,70 50,30 90,10"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          {/* Main Leaf Body */}
          <path
            d="M90,10 C70,30 65,55 75,75 C60,65 30,55 10,90 C25,60 35,30 25,15 C45,25 70,20 90,10 Z"
            fill="currentColor"
            fillOpacity="0.05"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          {/* Veins */}
          <path d="M70,30 Q50,42 42,46" stroke="currentColor" strokeWidth="0.5" />
          <path d="M70,30 Q80,42 85,46" stroke="currentColor" strokeWidth="0.5" />
          <path d="M52,48 Q35,58 26,62" stroke="currentColor" strokeWidth="0.5" />
          <path d="M52,48 Q62,58 70,64" stroke="currentColor" strokeWidth="0.5" />
          <path d="M38,62 Q25,72 18,76" stroke="currentColor" strokeWidth="0.5" />
          <path d="M38,62 Q45,72 52,78" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Bottom Right Leaf */}
      <motion.div
        className="absolute -bottom-24 -right-24 w-80 h-80 md:w-[480px] md:h-[480px] text-agronilam-green opacity-[0.08] sm:opacity-[0.1]"
        animate={{
          x: [0, -20, 10, 0],
          y: [0, 15, -15, 0],
          rotate: [0, -5, 3, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform rotate-[135deg]">
          <path
            d="M10,90 C30,70 50,30 90,10"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          {/* Main Leaf Body */}
          <path
            d="M90,10 C70,30 65,55 75,75 C60,65 30,55 10,90 C25,60 35,30 25,15 C45,25 70,20 90,10 Z"
            fill="currentColor"
            fillOpacity="0.05"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          {/* Veins */}
          <path d="M70,30 Q50,42 42,46" stroke="currentColor" strokeWidth="0.5" />
          <path d="M70,30 Q80,42 85,46" stroke="currentColor" strokeWidth="0.5" />
          <path d="M52,48 Q35,58 26,62" stroke="currentColor" strokeWidth="0.5" />
          <path d="M52,48 Q62,58 70,64" stroke="currentColor" strokeWidth="0.5" />
          <path d="M38,62 Q25,72 18,76" stroke="currentColor" strokeWidth="0.5" />
          <path d="M38,62 Q45,72 52,78" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Subtle floating gold particle dusts to feel magical and premium */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-agronilam-gold/20"
            style={{
              width: Math.random() * 4 + 3 + "px",
              height: Math.random() * 4 + 3 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
