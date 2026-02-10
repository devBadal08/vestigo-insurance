"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function EducationIndustryPage() {
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
            Education Sector Insurance Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 text-2xl font-semibold text-[#1C2A7D]"
          >
            <span className="bg-[#E8D534]/40 px-2 py-1 rounded">
              Shaping
            </span>{" "}
            Future Generations
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="origin-left w-28 h-[3px] bg-[#E8D534] mt-6 mb-6 rounded-full"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl text-[17px] leading-[1.85] text-slate-600"
          >
            EdTech innovation, hybrid learning models, global student mobility,
            research commercialization, campus expansion, and lifelong learning
            programs are redefining education institutions worldwide.
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
          Educational Institution Risks
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Professional Indemnity",
              desc: "Teaching negligence, educational malpractice, and career counseling errors.",
            },
            {
              title: "Student Safety",
              desc: "Campus injuries, sports accidents, field trip incidents, and bullying claims.",
            },
            {
              title: "Cyber & Data",
              desc: "Student record breaches, LMS failures, and research data theft.",
            },
            {
              title: "Property Damage",
              desc: "Building fires, laboratory accidents, equipment damage, and natural disasters.",
            },
            {
              title: "Employment Practices",
              desc: "Faculty disputes, discrimination claims, and wrongful termination issues.",
            },
            {
              title: "Reputation & Crisis",
              desc: "Enrollment decline, accreditation loss, and institutional crisis events.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="bg-white rounded-2xl px-7 py-7
                         border border-[#1C2A7D]/10
                         shadow-[0_14px_35px_rgba(28,42,125,0.12)]
                         hover:shadow-[0_24px_55px_rgba(28,42,125,0.2)]
                         transition"
            >
              <h3 className="font-semibold text-[#1C2A7D] text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= PROTECTION PORTFOLIO ================= */}
      <section className="bg-[#F7F8FC] py-24">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1C2A7D] mb-14"
          >
            Campus Protection Portfolio
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Professional Indemnity Insurance",
              "General Liability & Student Accident",
              "Cyber & Data Protection",
              "Property & Business Interruption",
              "Directors & Officers Liability",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="bg-white rounded-2xl px-6 py-5
                           border border-[#1C2A7D]/10
                           shadow-[0_12px_30px_rgba(28,42,125,0.12)]
                           hover:shadow-[0_22px_45px_rgba(28,42,125,0.18)]
                           transition"
              >
                <p className="font-medium text-[#1C2A7D]">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </main>
  );
}
