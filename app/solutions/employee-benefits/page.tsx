"use client";

import { motion } from "framer-motion";

export default function EmployeeBenefitsPage() {
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
          Employee Benefits
        </motion.h1>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl">
          Attract and retain top talent with comprehensive coverage
        </p>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT: FEATURED CARD */}
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
              Strengthen Your Workforce Value Proposition
            </h2>

            <p className="text-[17px] leading-relaxed mb-6 text-white/90">
              Our tailored employee benefits packages are designed to support
              your workforce’s well-being and financial security, fostering a
              loyal and productive team.
            </p>

            <p className="text-[17px] leading-relaxed text-white/90">
              From health to accident cover, we provide solutions that clearly
              demonstrate your commitment to employees while aligning with
              organisational goals and regulatory requirements.
            </p>
          </motion.div>

          {/* RIGHT: BENEFIT LIST */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Group Health Insurance
              </h3>
              <p className="text-slate-600">
                Comprehensive medical coverage ensures employees have access
                to quality healthcare, enhancing well-being and reducing
                absenteeism.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Group Life Insurance
              </h3>
              <p className="text-slate-600">
                Essential financial protection for employees’ families in
                unforeseen circumstances, providing peace of mind and security.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Gratuity Insurance
              </h3>
              <p className="text-slate-600">
                Safeguards end-of-service benefits, ensuring financial stability
                for employees while meeting employer obligations.
              </p>
            </div>

            <div className="border-l-4 border-[#E8D534] pl-6">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
                Group Personal Accident
              </h3>
              <p className="text-slate-600">
                24/7 accident coverage protecting your workforce against
                unexpected events and reinforcing a secure working environment.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
