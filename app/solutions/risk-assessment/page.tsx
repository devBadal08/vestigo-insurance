"use client";

import { motion } from "framer-motion";

export default function RiskManagementSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#1C2A7D] mb-16"
        >
          Risk Assessment
        </motion.h1>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* PROACTIVE RISK MANAGEMENT CARD */}
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
              Proactive Risk Management
            </h2>

            <p className="text-[17px] leading-relaxed mb-6 text-white/90">
              Effective insurance begins long before a claim occurs. Our risk
              management consultants conduct thorough exposure analyses,
              identifying vulnerabilities across your operations, supply chain,
              and workforce.
            </p>

            <p className="text-[17px] leading-relaxed text-white/90">
              We develop customised risk mitigation strategies, from safety
              protocol enhancements to contractual risk transfer mechanisms.
              Regular risk assessments ensure your protection evolves with
              emerging threats, regulatory changes, and business expansion.
            </p>
          </motion.div>

          {/* RIGHT SIDE – SUPPORTING POINTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Exposure Analysis
              </h3>
              <p className="text-slate-600">
                Deep evaluation of operational, contractual, and people-related
                risks across your business ecosystem.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Risk Mitigation Strategy
              </h3>
              <p className="text-slate-600">
                Structured solutions designed to reduce loss frequency and
                severity while strengthening policy effectiveness.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Ongoing Risk Review
              </h3>
              <p className="text-slate-600">
                Continuous assessments aligned with regulatory change,
                expansion, and emerging risk trends.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
