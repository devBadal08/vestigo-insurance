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

export default function GreenEnergyPage() {
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
            Energizing Sustainable Futures
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl font-semibold text-[#1C2A7D]"
          >
            Clean Energy Transition
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
            Renewable energy integration is accelerating. Grid modernization is
            becoming critical. Energy storage solutions are emerging while
            regulatory pressure and decarbonization commitments are driving
            massive infrastructure investments globally.
          </motion.p>
        </div>
      </section>

      {/* ================= ENERGY SECTOR RISKS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1C2A7D] mb-12"
        >
          Energy Sector Risks
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
              title: "Property Damage & Business Interruption",
              desc: "Power plant fires, equipment failure, natural disasters, grid failures.",
            },
            {
              title: "Environmental Liability",
              desc: "Pollution incidents, contamination, cleanup costs, regulatory fines.",
            },
            {
              title: "Construction All Risk",
              desc: "Renewable project delays, installation damage, weather disruptions.",
            },
            {
              title: "Cyber & Smart Grid",
              desc: "System breaches, SCADA attacks, grid disruptions, data theft.",
            },
            {
              title: "Renewable Energy Risks",
              desc: "Solar panel damage, wind turbine failure, performance guarantees.",
            },
            {
              title: "Regulatory & Compliance",
              desc: "License violations, safety breaches, investigation costs.",
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
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= POWER SECTOR PROTECTION ================= */}
      <section className="bg-[#F7F8FC] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1C2A7D] mb-14"
          >
            Power Sector Protection
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                title: "Property & Business Interruption",
                image: "/energy/e1.jpeg",
              },
              {
                title: "Environmental Liability",
                image: "/energy/e2.jpeg",
              },
              {
                title: "CAR for Renewable Projects",
                image: "/energy/e3.jpeg",
              },
              {
                title: "Cyber & Smart Grid Protection",
                image: "/energy/e4.jpeg",
              },
              {
                title: "Renewable Energy Insurance",
                image: "/energy/e5.jpeg",
              },
              {
                title: "Regulatory Defense",
                image: "/energy/e6.jpeg",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group bg-white rounded-2xl overflow-hidden
                  flex flex-col
                  border border-[#1C2A7D]/10
                  shadow-[0_14px_35px_rgba(28,42,125,0.14)]
                  hover:shadow-[0_28px_60px_rgba(28,42,125,0.25)]
                  transition"
              >
                {/* IMAGE */}
                <div
                  className="w-full min-h-[200px] bg-[#F7F8FC]
                flex items-center justify-center p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
      max-h-[200px]
      w-auto
      object-contain
      transition-transform
      duration-500
      group-hover:scale-[1.03]
    "
                  />
                </div>

                <div className="p-6 mt-auto">
                  <h3 className="text-lg font-semibold text-[#1C2A7D] text-center">
                    {item.title}
                  </h3>
                </div>

                <div className="h-1 w-full bg-[#E8D534]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
