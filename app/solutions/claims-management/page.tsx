"use client";

import { motion } from "framer-motion";

export default function ClaimsManagementPage() {
  return (
    <main className="bg-white">

      {/* ================= PAGE HEADER ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#1C2A7D]"
        >
          Claims Management
        </motion.h1>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT: FEATURED CLAIMS CARD */}
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
              Expert Claims Advocacy
            </h2>

            <p className="text-[17px] leading-relaxed mb-6 text-white/90">
              When incidents occur, our claims specialists act as your dedicated
              advocates. We manage the entire claims lifecycle, from initial
              notification to documentation, negotiation, and settlement.
            </p>

            <p className="text-[17px] leading-relaxed text-white/90">
              Our team understands insurer processes and settlement benchmarks,
              ensuring claims move efficiently while maximising recoveries. We
              challenge unfair denials, manage complex claims, and protect your
              commercial interests at every stage.
            </p>
          </motion.div>

          {/* RIGHT: SUPPORTING POINTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                End-to-End Claims Handling
              </h3>
              <p className="text-slate-600">
                Complete oversight from first notice of loss through final
                settlement and recovery.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Insurer Negotiation
              </h3>
              <p className="text-slate-600">
                Strategic engagement with insurers, adjusters, and third
                parties to secure fair outcomes.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Complex & Disputed Claims
              </h3>
              <p className="text-slate-600">
                Proven expertise in multi-party, high-value, and contested
                claims scenarios.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
