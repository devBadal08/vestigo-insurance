"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Cpu,
  Cog,
  Hotel,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Ship,
  Package,
  Factory,
  FlaskConical,
  Leaf,
  Recycle,
  Shirt,
  Building2,
  Trees,
} from "lucide-react";


const industries = [
  { name: "Automotive", slug: "automotive", icon: Car },
  { name: "IT & Tech", slug: "it-tech", icon: Cpu },
  { name: "Engineering", slug: "engineering", icon: Cog },
  { name: "Hospitality", slug: "hospitality", icon: Hotel },
  { name: "BFSI", slug: "bfsi", icon: Landmark },
  { name: "E-Commerce", slug: "e-commerce", icon: ShoppingCart },
  { name: "Hospital & Education", slug: "hospital-education", icon: GraduationCap },
  { name: "Shipping", slug: "shipping", icon: Ship },
  { name: "Packaging", slug: "packaging", icon: Package },
  { name: "Paper Mills", slug: "paper-mills", icon: Factory },
  { name: "Chemical & Pharmacy", slug: "chemical-pharmacy", icon: FlaskConical },
  { name: "Green Energy", slug: "green-energy", icon: Leaf },
  { name: "Plastic", slug: "plastic", icon: Recycle },
  { name: "Textile", slug: "textile", icon: Shirt },
  { name: "SME & MSME", slug: "sme-msme", icon: Building2 },
  { name: "Wood & Laminates", slug: "wood-laminates", icon: Trees },
];


export default function IndustriesPage() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C2A7D]/6 via-white to-[#E8D534]/12" />
      </div>

      {/* ================= HERO IMAGE ================= */}
      <section className="relative pt-[90px]">
        <div className="relative w-full aspect-[16/9] lg:aspect-[16/7]">
          <Image
            src="/industry2.jpeg"
            alt="Industries served by Vestigo"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1C2A7D]/20" />
        </div>
      </section>

      {/* ================= INTRO CARD ================= */}
      <section className="relative -mt-6 sm:-mt-10 lg:-mt-12 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="bg-white rounded-3xl shadow-xl
                       px-8 py-10 sm:px-12 sm:py-14
                       max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C2A7D] mb-6">
              Industries We Serve
            </h1>

            <div className="w-20 h-[3px] bg-[#E8D534] mb-6 rounded-full" />

            <p className="text-[17px] sm:text-[18px] leading-[1.85] text-slate-700">
              Protection designed for every industry. Our advisory-led approach
              aligns insurance programs with real operational, regulatory, and
              financial risks across diverse sectors.
            </p>
          </div>
        </div>
      </section>

        {/* ================= INDUSTRIES GRID ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-28 pt-20">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
            hidden: {},
            visible: {
                transition: { staggerChildren: 0.08 },
            },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
            {industries.map((industry) => (
            <motion.div
                key={industry.slug}
                variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
                }}
                transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // premium easing
                }}
            >
                <Link href={`/industries/${industry.slug}`} className="block h-full">
                    <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="relative group bg-white rounded-2xl
                                border border-[#1C2A7D]/10
                                shadow-[0_10px_30px_rgba(28,42,125,0.12)]
                                hover:shadow-[0_20px_45px_rgba(28,42,125,0.22)]
                                transition-all
                                pt-14 pb-8 px-6
                                text-center"
                    >
                        {/* ICON BADGE */}
                        {(() => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                            whileHover={{ scale: 1.12, rotate: 4 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute -top-7 left-1/2 -translate-x-1/2
                                        w-14 h-14 rounded-full
                                        bg-[#1C2A7D]
                                        ring-4 ring-[#E8D534]/70
                                        flex items-center justify-center
                                        text-white"
                            >
                            <Icon className="w-6 h-6 stroke-[1.8]" />
                            </motion.div>
                        );
                        })()}

                        {/* TITLE */}
                        <p className="mt-4 text-lg font-semibold text-[#1C2A7D]">
                        {industry.name}
                        </p>
                    </motion.div>
                </Link>
            </motion.div>
            ))}
        </motion.div>
        </section>

    </section>
  );
}
