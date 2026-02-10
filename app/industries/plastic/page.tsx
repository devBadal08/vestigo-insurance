"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Factory,
  ShieldCheck,
  Truck,
  AlertTriangle,
  Recycle,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PlasticIndustryPage() {
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
            Plastic Industry Insurance Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl font-semibold text-[#1C2A7D]"
          >
            Protecting Manufacturing, Compliance, and Continuity
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
            The plastic industry operates across high-temperature processes,
            chemical handling, automated machinery, and evolving environmental
            regulations. From raw polymer processing to finished goods,
            manufacturers face operational, liability, and compliance-driven
            risks that require carefully structured insurance protection.
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
          Plastic Industry Risks
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
              title: "Fire & Heat-Related Hazards",
              desc: "High-temperature molding, extrusion units, flammable materials, and electrical overloads.",
            },
            {
              title: "Machinery Breakdown",
              desc: "Failure of injection molding machines, extruders, compressors, and automation systems.",
            },
            {
              title: "Product Liability",
              desc: "Defective plastic components, packaging failures, contamination, and recall exposure.",
            },
            {
              title: "Environmental & Regulatory Risk",
              desc: "Plastic waste management, pollution liability, recycling mandates, and compliance penalties.",
            },
            {
              title: "Business Interruption",
              desc: "Production downtime due to equipment failure, fire, or supply chain disruption.",
            },
            {
              title: "Workplace Injury & Liability",
              desc: "Employee injuries from machinery, chemicals, and high-speed production lines.",
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
            Plastic Manufacturing Protection
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10"
          >
            {[
              {
                title: "Property & Plant Insurance",
                desc: "Coverage for factories, machinery, molds, warehouses, and utilities.",
                icon: Factory,
              },
              {
                title: "Machinery Breakdown & BI",
                desc: "Protection against mechanical failure and income loss due to downtime.",
                icon: AlertTriangle,
              },
              {
                title: "Product & Recall Liability",
                desc: "Coverage for defective products, third-party claims, and recall costs.",
                icon: ShieldCheck,
              },
              {
                title: "Marine & Transit Insurance",
                desc: "Protection for raw polymers and finished goods during transportation.",
                icon: Truck,
              },
              {
                title: "Environmental & Recycling Liability",
                desc: "Coverage for pollution incidents, waste handling, and regulatory exposure.",
                icon: Recycle,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`
                  bg-white rounded-2xl p-7
                  border border-[#1C2A7D]/10
                  shadow-[0_14px_35px_rgba(28,42,125,0.14)]
                  hover:shadow-[0_28px_55px_rgba(28,42,125,0.22)]
                  transition
                  ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                `}
              >
                <div
                  className="w-12 h-12 mx-auto flex items-center justify-center
                                rounded-xl bg-[#E8D534]/20 mb-4"
                >
                  <item.icon className="w-6 h-6 text-[#1C2A7D]" />
                </div>

                <h3 className="text-lg font-semibold text-[#1C2A7D] mb-2 text-center">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed text-center">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
