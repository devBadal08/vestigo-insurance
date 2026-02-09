'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { src: "/p1.jpeg", alt: "Infra Market" },
  { src: "/p2.jpeg", alt: "Shiva" },
  { src: "/p3.jpeg", alt: "Nitco Limited" },
  { src: "/p4.png", alt: "Satishbel" },
  { src: "/p5.png", alt: "Jayant Agro Organics" },
  { src: "/p6.jpeg", alt: "Airolam" },
  { src: "/p7.png", alt: "Royal Castor Products" },
  { src: "/p8.png", alt: "Shalimar Paints" },
  { src: "/p9.png", alt: "Apicore" },
  { src: "/p10.jpeg", alt: "Finecure Pharmaceuticals" },
  { src: "/p11.png", alt: "Chemco" },
];

export default function OurPartnersPage() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* ===== TOP TEXT ===== */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="text-lg md:text-xl text-[#1C2A7D] leading-relaxed">
            At Vestigo, we pride ourselves on forging strong, lasting partnerships with our clients. Our collaborative approach and unwavering 
            commitment to excellence have earned the trust of a diverse portfolio of industry leaders, enabling them to navigate complex 
            challenges with confidence.
          </p>
        </div>

        {/* ===== LOGO MARQUEE ===== */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center
                  min-w-[180px] h-[100px]
                  bg-white
                  rounded-xl
                  border border-slate-200
                  shadow-sm
                  px-6
                "
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={160}
                  height={70}
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>

          {/* Soft fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
        </div>

        {/* ===== BOTTOM TEXT ===== */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <p className="text-lg text-[#1C2A7D] leading-relaxed">
            Our proven track record and deep expertise ensure that clients receive unparalleled service and strategic guidance, empowering 
            them to achieve their objectives and sustain growth. We are dedicated to delivering bespoke solutions that align with the unique 
            needs of each organization we serve.
          </p>
        </div>

      </div>
    </section>
  );
}
