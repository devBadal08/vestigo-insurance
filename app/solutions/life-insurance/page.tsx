"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LifeInsurancePage() {
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
          Life Insurance
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
              Thoughtful Life Protection
            </h2>

            <p className="text-[17px] leading-relaxed mb-6 text-white/90">
              Life insurance is more than a policy. It is a promise of stability,
              income protection, and long-term security for your dependents in
              the event of unforeseen circumstances.
            </p>

            <p className="text-[17px] leading-relaxed text-white/90">
              We help individuals and families structure life cover that aligns
              with financial goals, liabilities, and future aspirations, while
              ensuring clarity, affordability, and certainty.
            </p>
          </div>

          {/* RIGHT: SUPPORTING POINTS */}
          <div className="space-y-8">
            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Term Life Insurance
              </h3>
              <p className="text-slate-600">
                Pure protection plans designed to secure income replacement and
                family needs over critical financial periods.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Savings & Investment Plans
              </h3>
              <p className="text-slate-600">
                Long-term solutions combining protection with disciplined wealth
                creation and future planning.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Retirement & Legacy Planning
              </h3>
              <p className="text-slate-600">
                Structured cover to support retirement income and ensure a
                smooth transfer of wealth across generations.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
