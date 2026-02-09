"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CommercialInsurancePage() {
  return (
    <main className="bg-white">

      {/* ================= HEADER ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#1C2A7D]"
        >
          Commercial Insurance
        </motion.h1>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT: FEATURED CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-10
                       bg-[#1C2A7D]
                       text-white
                       shadow-[0_25px_60px_rgba(28,42,125,0.35)]"
          >
            {/* Accent strip */}
            <span className="absolute top-0 left-0 h-full w-2 bg-[#E8D534] rounded-l-3xl" />

            <h2 className="text-3xl font-bold mb-6">
              Tailored Commercial Protection
            </h2>

            <p className="text-[17px] leading-relaxed mb-6 text-white/90">
              Protect your business assets, operations, and people with
              commercial insurance solutions designed for today’s complex risk
              environment. From property damage and liability exposure to cyber
              threats and business interruption, we ensure nothing critical is
              overlooked.
            </p>

            <p className="text-[17px] leading-relaxed text-white/90">
              Our specialists work directly with leading underwriters to secure
              competitive terms while maintaining comprehensive protection. We
              analyse exposures, negotiate policy conditions, and support your
              risk strategy as your business evolves.
            </p>
          </motion.div>

          {/* RIGHT: IMAGE + SUPPORTING POINTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/commercial-insurance.jpeg"
                alt="Commercial insurance advisory"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* SUPPORT POINTS */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#E8D534] pl-6">
                <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                  Property & Liability
                </h3>
                <p className="text-slate-600">
                  Comprehensive protection for physical assets and third-party
                  liabilities.
                </p>
              </div>

              <div className="border-l-4 border-[#E8D534] pl-6">
                <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                  Business Interruption
                </h3>
                <p className="text-slate-600">
                  Revenue continuity coverage to protect cash flow during
                  unexpected disruptions.
                </p>
              </div>

              <div className="border-l-4 border-[#E8D534] pl-6">
                <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                  Cyber Risk
                </h3>
                <p className="text-slate-600">
                  Protection against data breaches, cyber extortion, and digital
                  operational threats.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
