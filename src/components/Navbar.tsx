"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Leaf, ChevronDown, Menu, X, MessageCircle, Droplets, Sparkles, Sprout, Package } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Nav Link Item Structure
interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Cara Pesan", href: "/tentang#proses" },
];

const MEGA_CATEGORIES = [
  {
    name: "Aromaterapi",
    tagline: "Essential oil & lilin rileksasi murni.",
    href: "/produk?category=Aromaterapi",
    icon: <Droplets className="w-5 h-5 text-teal-600" />,
    color: "bg-teal-50 border-teal-100",
  },
  {
    name: "Kosmetik",
    tagline: "Serum & lotion hidrasi aktif.",
    href: "/produk?category=Kosmetik",
    icon: <Sparkles className="w-5 h-5 text-rose-600" />,
    color: "bg-rose-50 border-rose-100",
  },
  {
    name: "Sabun Mandi",
    tagline: "Sabun herbal batang & cair alami.",
    href: "/produk?category=Sabun+Mandi",
    icon: <Package className="w-5 h-5 text-amber-600" />,
    color: "bg-amber-50 border-amber-100",
  },
];

// Staggered Mobile Menu Animation
const drawerVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Scroll listener to toggle background style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const whatsappNumber = "6281234567890";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    "Halo Sentra Agronilam, saya ingin berkonsultasi mengenai produk olahan nilam."
  )}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-agronilam-cream/95 backdrop-blur-md shadow-md border-b border-agronilam-green/5 py-4"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="p-1.5 bg-agronilam-green/10 rounded-lg group-hover:bg-agronilam-green/20 transition-colors">
              <Leaf className="w-5 h-5 text-agronilam-green" />
            </div>
            <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-agronilam-green">
              Sentra Agronilam
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-agronilam-green/80">
            <Link
              href="/"
              className={`hover:text-agronilam-gold transition-colors relative py-1 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-agronilam-gold hover:after:w-full after:transition-all ${
                pathname === "/" ? "text-agronilam-gold after:w-full" : ""
              }`}
            >
              Beranda
            </Link>

            {/* Produk Menu item with Mega-Dropdown */}
            <div
              className="relative py-1 group cursor-pointer"
              onMouseEnter={() => setIsMegaOpen(true)}
              onMouseLeave={() => setIsMegaOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-agronilam-gold transition-colors">
                <span>Produk</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMegaOpen ? "rotate-180 text-agronilam-gold" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMegaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[32px] left-1/2 -translate-x-1/2 w-[620px] bg-white border border-agronilam-green/10 rounded-2xl shadow-xl p-5 grid grid-cols-3 gap-4 z-50"
                  >
                    {MEGA_CATEGORIES.map((cat, idx) => (
                      <Link
                        key={idx}
                        href={cat.href}
                        className="flex flex-col gap-2.5 p-3.5 rounded-xl border border-transparent hover:border-agronilam-gold/20 hover:bg-agronilam-cream/30 transition-all group/item"
                      >
                        <div className={`p-2 rounded-lg w-fit border ${cat.color} group-hover/item:scale-105 transition-transform`}>
                          {cat.icon}
                        </div>
                        <div>
                          <h4 className="font-serif text-sm font-bold text-agronilam-green group-hover/item:text-agronilam-gold transition-colors">
                            {cat.name}
                          </h4>
                          <p className="text-[11px] text-agronilam-green/70 leading-normal mt-1">
                            {cat.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.slice(1).map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={`hover:text-agronilam-gold transition-colors relative py-1 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-agronilam-gold hover:after:w-full after:transition-all ${
                  pathname === link.href ? "text-agronilam-gold after:w-full" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="mailto:sentraagronilam@gmail.com"
              className="hover:text-agronilam-gold transition-colors relative py-1 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-agronilam-gold hover:after:w-full after:transition-all"
            >
              Kontak
            </Link>
          </div>

          {/* Right Action CTA Button */}
          <div className="flex items-center gap-3">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-full shadow-md transition-colors z-50 cursor-pointer"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">Pesan Sekarang</span>
              <span className="sm:hidden">Pesan</span>
            </motion.a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-agronilam-green hover:bg-agronilam-green/5 rounded-lg md:hidden z-50 focus:outline-none"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop shadow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            {/* Drawer Container */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 w-80 bg-agronilam-cream z-40 p-6 pt-24 shadow-2xl flex flex-col justify-between md:hidden border-l border-agronilam-green/10"
            >
              {/* Links list */}
              <div className="flex flex-col gap-6 font-sans">
                <motion.div variants={mobileLinkVariants}>
                  <Link href="/" className="text-lg font-bold hover:text-agronilam-gold transition-colors block">
                    Beranda
                  </Link>
                </motion.div>

                {/* Mobile Products Categories sub-list */}
                <motion.div variants={mobileLinkVariants} className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-agronilam-gold">
                    Kategori Produk
                  </span>
                  <div className="pl-4 flex flex-col gap-3 mt-1 border-l border-agronilam-gold/20">
                    {MEGA_CATEGORIES.map((cat, idx) => (
                      <Link
                        key={idx}
                        href={cat.href}
                        className="text-sm font-semibold hover:text-agronilam-gold transition-colors flex items-center gap-2"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {NAV_LINKS.slice(1).map((link, idx) => (
                  <motion.div key={idx} variants={mobileLinkVariants}>
                    <Link href={link.href} className="text-lg font-bold hover:text-agronilam-gold transition-colors block">
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={mobileLinkVariants}>
                  <Link href="mailto:sentraagronilam@gmail.com" className="text-lg font-bold hover:text-agronilam-gold transition-colors block">
                    Kontak
                  </Link>
                </motion.div>
              </div>

              {/* Bottom Info inside Drawer */}
              <div className="border-t border-agronilam-green/10 pt-6 flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <Sprout className="w-4 h-4 text-agronilam-gold" />
                  <span className="text-xs font-bold text-agronilam-green">Fakultas Pertanian UB</span>
                </div>
                <p className="text-[10px] text-agronilam-green/60 leading-normal">
                  Inovasi produk wirausaha minyak nilam Lhokseumawe dibudidaya di Malang.
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
