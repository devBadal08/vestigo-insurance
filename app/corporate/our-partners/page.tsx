"use client";

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

const claims = [
  {
    title: "Mega Risk Policy: Turbine Breakdown",
    desc: "Successfully processed a turbine breakdown claim of INR 6 Cr under a comprehensive mega risk policy.",
  },
  {
    title: "IAR Policy: Explosion & Business Interruption",
    desc: "Managed an explosion claim with INR 50 Cr material damage and INR 25 Cr business interruption under an Industrial All Risk (IAR) policy.",
  },
  {
    title: "Crime Policy: Payment Related Fraud",
    desc: "Resolved a payment-related fraud claim of INR 3 Cr, providing crucial protection under a Crime Policy.",
  },
  {
    title: "Contractors All Risk: Flood Damage",
    desc: "Handled a road damage claim of INR 1.25 Cr due to severe flooding under a Contractors All Risk (CAR) policy.",
  },
  {
    title: "Marine Insurance: Forwarding Charges",
    desc: "Successfully secured a forwarding charges claim of INR 1 Cr under marine insurance due to a shipping line’s bankruptcy.",
  },
  {
    title: "Product Recall: Contamination Issue",
    desc: "Managed a product recall claim worth INR 3 Cr, triggered by contamination found in a cargo of psyllium husk.",
  },
];

export default function OurPartnersPage() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-[#1C2A7D]">
            Trusted by Leading Organizations Across Industries
          </h1>
        </div>

        {/* ===== TOP TEXT ===== */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="text-lg md:text-xl text-[#1C2A7D] leading-relaxed">
            At Vestigo, we pride ourselves on forging strong, lasting
            partnerships with our clients. Our collaborative approach and
            unwavering commitment to excellence have earned the trust of a
            diverse portfolio of industry leaders, enabling them to navigate
            complex challenges with confidence.
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
            Our proven track record and deep expertise ensure that clients
            receive unparalleled service and strategic guidance, empowering them
            to achieve their objectives and sustain growth. We are dedicated to
            delivering bespoke solutions that align with the unique needs of
            each organization we serve.
          </p>
        </div>
      </div>

      {/* ================= CLAIMS EXPERTISE ================= */}
      <section className="relative bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – CLAIMS CONTENT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-[#1C2A7D]"
            >
              Proven Expertise: Major Claims Managed
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-6 max-w-xl text-slate-600 leading-[1.85]"
            >
              Our partners possess extensive experience in navigating complex
              claim scenarios, ensuring effective resolution and minimal
              disruption for clients across industries.
            </motion.p>

            <div className="mt-12 space-y-6">
              {claims.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="
              bg-[#F9FAFD]
              border border-[#1C2A7D]/10
              rounded-2xl p-6
              hover:shadow-[0_20px_45px_rgba(28,42,125,0.15)]
              transition
            "
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-10 h-10 flex items-center justify-center
                              rounded-full bg-[#E8D534]/20
                              text-[#1C2A7D] font-bold"
                    >
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-[16px] font-semibold text-[#1C2A7D]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT – ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src="/our-partner.jpeg"
              alt="Claims expertise illustration"
              width={520}
              height={520}
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
}
