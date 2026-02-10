"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ChemicalPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-[110px] pb-20 bg-[#F7F8FC]">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#1C2A7D]"
          >
            Chemical & Pharmaceutical Insurance Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl font-semibold text-[#1C2A7D]"
          >
            Innovating Life Sciences
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="origin-left w-28 h-[3px] bg-[#E8D534] mt-6 mb-6 rounded-full"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl text-[17px] leading-[1.85] text-slate-600"
          >
            Biopharmaceutical breakthroughs, personalized medicine, green
            chemistry initiatives, regulatory harmonization, contract
            manufacturing growth, and specialty chemical demand are reshaping
            the global life sciences sector.
          </motion.p>

        </div>
      </section>

      {/* ================= RISKS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1C2A7D] mb-12"
        >
          Pharma & Chemical Risks
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              title: "Product Recall",
              desc: "Contamination, efficacy failures, adverse reactions, batch withdrawals.",
            },
            {
              title: "Environmental Liability",
              desc: "Chemical spills, air emissions, groundwater contamination, cleanup costs.",
            },
            {
              title: "Product Liability",
              desc: "Patient injury, side effects, manufacturing defects, labeling errors.",
            },
            {
              title: "Business Interruption",
              desc: "Production stoppages, supply chain disruptions, regulatory shutdowns.",
            },
            {
              title: "Clinical Trial Risks",
              desc: "Participant injury, trial failures, protocol violations, data integrity issues.",
            },
            {
              title: "Cyber & IP Theft",
              desc: "Formula theft, research data breaches, patent infringement risks.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-[#F9FAFD]
                         border border-[#1C2A7D]/10
                         rounded-2xl p-6
                         hover:border-[#E8D534]
                         hover:shadow-[0_20px_40px_rgba(28,42,125,0.12)]
                         transition"
            >
              <h3 className="text-lg font-semibold text-[#1C2A7D] mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="bg-[#F7F8FC] py-28">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1C2A7D] mb-16 text-center"
          >
            Specialized Pharma Coverage
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { value: "$3.2B", label: "Average Recall Cost" },
              { value: "87%", label: "Cyber Target Rate" },
              { value: "$450M", label: "Cleanup Costs" },
              { value: "12-Year", label: "Development" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white rounded-3xl px-8 py-10
                           border border-[#1C2A7D]/10
                           shadow-[0_18px_45px_rgba(28,42,125,0.12)]
                           hover:shadow-[0_28px_65px_rgba(28,42,125,0.2)]
                           transition text-center"
              >
                {/* MODERN ARC */}
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#E8D534"
                      strokeWidth="8"
                      strokeDasharray="210 80"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="absolute top-2 right-5 w-3 h-3 rounded-full bg-[#1C2A7D]" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-extrabold text-[#1C2A7D]">
                      {stat.value}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-medium text-slate-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-16 max-w-5xl mx-auto text-center text-slate-600 leading-relaxed">
            Comprehensive protection including Product Liability, Business
            Interruption, Professional Indemnity, Clinical Trial Insurance,
            Environmental Liability, Cyber Risk, and Regulatory Defense coverage
            across pharmaceutical and chemical operations.
          </p>

        </div>
      </section>

    </main>
  );
}
