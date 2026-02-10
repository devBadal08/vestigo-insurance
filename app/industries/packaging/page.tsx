"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Package,
  Factory,
  ShieldCheck,
  Truck,
  AlertTriangle,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PackagingPage() {
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
            Packaging Industry Insurance Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl font-semibold text-[#1C2A7D]"
          >
            Protecting Production, Compliance, and Supply Chains
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
            The packaging industry operates at the intersection of
            manufacturing, logistics, regulatory compliance, and brand
            responsibility. Rapid innovation, sustainability demands, and global
            supply chains expose packaging businesses to complex operational and
            liability risks.
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
          Packaging Industry Risks
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
              title: "Fire & Machinery Breakdown",
              desc: "High-speed machinery, electrical faults, and combustible materials increasing fire and breakdown exposure.",
            },
            {
              title: "Product Contamination & Recall",
              desc: "Defective or contaminated packaging impacting food, pharma, and consumer goods supply chains.",
            },
            {
              title: "Business Interruption",
              desc: "Production shutdowns, supply delays, power outages, and equipment failure affecting delivery commitments.",
            },
            {
              title: "Regulatory & Compliance Risk",
              desc: "Environmental norms, food-grade standards, and sustainability compliance requirements.",
            },
            {
              title: "Supply Chain & Transit Exposure",
              desc: "Damage or loss of raw materials and finished packaging during storage and transportation.",
            },
            {
              title: "Third-Party Liability",
              desc: "Claims arising from packaging failure causing damage to client products or brand reputation.",
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
            Packaging Industry Protection
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
                title: "Packaging Plant & Asset Insurance",
                desc: "Coverage for packaging lines, automated filling systems, warehouses, and finished goods storage facilities against fire, explosion, and physical damage.",
                icon: Factory,
              },
              {
                title: "Product Contamination & Recall Liability",
                desc: "Protection against contamination, labeling errors, seal failures, and recall-related losses impacting food, pharma, and consumer packaging.",
                icon: AlertTriangle,
              },
              {
                title: "Machinery Breakdown & Production Loss",
                desc: "Covers breakdown of high-speed packaging machines, conveyors, and robotics, including loss of income due to production stoppage.",
                icon: ShieldCheck,
              },
              {
                title: "Logistics & Supply Chain Transit Insurance",
                desc: "Insurance for packaging materials and finished products during inland and export transit, including damage, theft, and delay risks.",
                icon: Truck,
              },
              {
                title: "Regulatory & Compliance Liability",
                desc: "Coverage for statutory penalties, hygiene compliance issues, and contractual liability exposure with large FMCG clients.",
                icon: Package,
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
