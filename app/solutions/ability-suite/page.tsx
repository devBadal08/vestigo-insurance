"use client";

import { motion } from "framer-motion";

export default function AbilitySuitePage() {
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
          Ability Suite
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
              Protecting People, Strengthening Organisations
            </h2>

            <p className="text-[17px] leading-relaxed mb-6 text-white/90">
              The Ability Suite is designed to protect an organisation’s most
              valuable asset—its people. These solutions provide financial
              security and continuity in the event of illness, injury, or loss
              of earning capacity, supporting both employees and employers
              during critical moments.
            </p>

            <p className="text-[17px] leading-relaxed text-white/90">
              We help businesses structure employee benefit and protection
              programs that enhance workforce resilience, promote well-being,
              and align with long-term organisational goals while maintaining
              cost efficiency and clarity.
            </p>
          </div>

          {/* RIGHT: SUPPORTING POINTS */}
          <div className="space-y-8">
            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Group Health & Medical Insurance
              </h3>
              <p className="text-slate-600">
                Comprehensive medical coverage designed to support employee
                health, improve retention, and manage healthcare costs through
                structured group policies.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Group Personal Accident & Disability Cover
              </h3>
              <p className="text-slate-600">
                Financial protection against accidental death, injury, or
                permanent disability, ensuring income security for employees and
                their families.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Employee Life & Income Protection Solutions
              </h3>
              <p className="text-slate-600">
                Structured life and income protection benefits that provide
                financial stability during unforeseen events, reinforcing
                employer responsibility and workforce confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
