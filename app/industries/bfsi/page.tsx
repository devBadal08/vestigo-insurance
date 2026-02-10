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

export default function BFSIPage() {
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
            Banking, Financial Services & Insurance Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl font-semibold text-[#1C2A7D]"
          >
            Digital Transformation of Finance
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
            Digital banking revolution, fintech disruption, regulatory evolution,
            open banking APIs, blockchain integration, and customer experience
            innovation are reshaping financial services globally.
          </motion.p>

        </div>
      </section>

      {/* ================= THREATS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1C2A7D] mb-12"
        >
          Financial Sector Threats
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
              title: "Cyber & Data Breaches",
              desc: "Ransomware, data theft, system compromises, and regulatory fines.",
            },
            {
              title: "Professional Indemnity",
              desc: "Advisory errors, mis-selling, and compliance failures.",
            },
            {
              title: "Directors & Officers",
              desc: "Management decisions, shareholder disputes, regulatory actions.",
            },
            {
              title: "Crime & Fidelity",
              desc: "Employee fraud, funds transfer fraud, social engineering.",
            },
            {
              title: "Business Interruption",
              desc: "System downtime, branch closures, operational disruptions.",
            },
            {
              title: "Regulatory & Compliance",
              desc: "Penalties, license revocation, and legal proceedings.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-[#F9FAFD] border border-[#1C2A7D]/10
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

      {/* ================= PROTECTION ================= */}
      <section className="bg-[#F7F8FC] py-24">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1C2A7D] mb-14"
          >
            Financial Institution Protection
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Cyber Liability & Data Breach",
              "Professional Indemnity",
              "Directors & Officers Liability",
              "Bankers Blanket Bond",
              "Business Interruption",
            ].map((cover) => (
              <motion.div
                key={cover}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-white rounded-2xl px-7 py-7
                           border border-[#1C2A7D]/10
                           shadow-[0_14px_35px_rgba(28,42,125,0.12)]
                           hover:shadow-[0_24px_55px_rgba(28,42,125,0.2)]
                           transition"
              >
                <h3 className="font-semibold text-[#1C2A7D] text-lg">
                  {cover}
                </h3>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </main>
  );
}
