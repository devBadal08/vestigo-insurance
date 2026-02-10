"use client";

import { motion } from "framer-motion";

export default function GreenEnergyInsurancePage() {
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
          Green Energy Insurance
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
              Resilient Protection for Sustainable Assets
            </h2>

            <p className="text-[17px] leading-relaxed mb-6 text-white/90">
              Renewable energy projects operate in capital-intensive,
              technology-driven, and environmentally exposed environments. Green
              energy insurance is designed to protect asset performance, revenue
              stability, and long-term investment viability.
            </p>

            <p className="text-[17px] leading-relaxed text-white/90">
              We support developers, operators, and investors with insurance
              programs aligned to project structures, regulatory requirements,
              and financing expectations—ensuring confidence across the entire
              project lifecycle.
            </p>
          </div>

          {/* RIGHT: SUPPORTING POINTS */}
          <div className="space-y-8">
            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Construction & Development Cover
              </h3>
              <p className="text-slate-600">
                Protection during project construction, installation, and
                commissioning phases, covering physical damage, transit risks,
                and delay-related financial exposure.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Operational Asset & Revenue Protection
              </h3>
              <p className="text-slate-600">
                Comprehensive cover for operating renewable assets, safeguarding
                against machinery breakdown, natural catastrophe exposure, and
                business interruption impacting power generation and cash flows.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Environmental & Liability Risk Solutions
              </h3>
              <p className="text-slate-600">
                Structured liability and environmental insurance addressing
                third-party exposure, pollution risks, regulatory compliance,
                and operational responsibilities inherent to clean energy
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
