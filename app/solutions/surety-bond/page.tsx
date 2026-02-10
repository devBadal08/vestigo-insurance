"use client";

import { motion } from "framer-motion";

export default function SuretyBondPage() {
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
          Surety Bond Solutions
        </motion.h1>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT: FEATURED CARD */}
          <div
            className="relative rounded-3xl p-10
                       bg-[#1C2A7D]
                       text-white
                       shadow-[0_25px_60px_rgba(28,42,125,0.35)]"
          >
            <span className="absolute top-0 left-0 h-full w-2 bg-[#E8D534] rounded-l-3xl" />

            <h2 className="text-3xl font-bold mb-6">
              Financial Assurance Built on Trust
            </h2>

            <p className="text-[17px] leading-relaxed mb-6 text-white/90">
              Surety bonds serve as a critical financial instrument that
              guarantees contractual performance, regulatory compliance, and
              financial obligations across infrastructure, construction, and
              commercial engagements.
            </p>

            <p className="text-[17px] leading-relaxed text-white/90">
              We assist contractors, developers, and businesses in structuring
              surety bond solutions that strengthen credibility, support project
              execution, and meet statutory and contractual requirements with
              confidence.
            </p>
          </div>

          {/* RIGHT: SUPPORTING POINTS */}
          <div className="space-y-8">
            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Contract Performance Bonds
              </h3>
              <p className="text-slate-600">
                Assurance that contractual obligations are fulfilled as agreed,
                protecting project owners against delays, defaults, or
                non-performance by contractors.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Advance Payment & Financial Guarantee Bonds
              </h3>
              <p className="text-slate-600">
                Protection for advance payments and financial commitments,
                ensuring funds are utilised strictly for intended project
                purposes and contractual milestones.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Statutory & Regulatory Bonds
              </h3>
              <p className="text-slate-600">
                Bonds structured to meet statutory, judicial, and regulatory
                requirements, supporting compliance while minimising capital
                blockage and balance sheet strain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
