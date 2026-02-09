"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Factory,
  Truck,
  AlertTriangle,
  ShieldAlert,
  Leaf,
  Lock,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const threats = [
  {
    title: "Production Disruption",
    desc:
      "Fire, machinery breakdown, assembly line failures, and equipment malfunctions can halt operations, leading to significant financial losses and reputational damage.",
    icon: Factory,
  },
  {
    title: "Supply Chain Vulnerability",
    desc:
      "Component shortages, logistics delays, and over-reliance on single vendors expose businesses to significant risks, impacting production schedules and market delivery.",
    icon: Truck,
  },
  {
    title: "Product Liability",
    desc:
      "Defects in vehicles or engineered components, unexpected safety failures, and product recall costs pose major financial and legal challenges.",
    icon: AlertTriangle,
  },
  {
    title: "Cyber & Technology",
    desc:
      "The increasing connectivity of vehicles and manufacturing systems introduces new vulnerabilities, including data breaches, intellectual property theft, and operational cyberattacks.",
    icon: ShieldAlert,
  },
  {
    title: "Environmental Compliance",
    desc:
      "Evolving emissions regulations, complex waste management challenges, and potential pollution liabilities demand strict adherence and robust risk management.",
    icon: Leaf,
  },
  {
    title: "Intellectual Property",
    desc:
      "Protecting innovative designs, manufacturing processes, and proprietary technologies from theft, patent infringement, and trade secret breaches is paramount.",
    icon: Lock,
  },
];


export default function AutomotiveIndustryPage() {
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
            className="text-4xl md:text-5xl font-extrabold
                       tracking-tight text-[#1C2A7D]"
          >
            Automotive Industry
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="origin-left w-24 h-[3px] bg-[#E8D534] mt-5 mb-6 rounded-full"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-medium text-[#1C2A7D]/80"
          >
            Driving Into an Electric Future
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-4xl text-[17px] leading-[1.85] text-slate-600"
          >
            The automobile and engineering sectors are undergoing unprecedented
            transformation, fuelled by the rapid rise of electric vehicles,
            autonomous driving technology, and Industry 4.0 manufacturing.
            Global supply chains are being re-engineered while sustainability
            mandates reshape design, production, and distribution.
          </motion.p>

        </div>
      </section>

      {/* ================= KEY THREATS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1C2A7D] mb-12"
        >
          Key Threats
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {threats.map((item) => {
            const Icon = item.icon;

            return (
                <motion.div
                key={item.title}
                variants={fadeUp}
                className="relative bg-[#F9FAFD]
                            border border-[#1C2A7D]/10
                            rounded-2xl pl-16 pr-6 py-6
                            hover:border-[#E8D534]
                            hover:shadow-[0_20px_40px_rgba(28,42,125,0.12)]
                            transition"
                >
                {/* ICON BADGE */}
                <div
                    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
                            w-14 h-14 rounded-full
                            bg-[#1C2A7D]
                            ring-4 ring-[#E8D534]
                            flex items-center justify-center"
                >
                    <Icon className="w-6 h-6 text-white stroke-[1.8]" />
                </div>

                {/* CONTENT */}
                <h3 className="text-lg font-semibold text-[#1C2A7D] mb-2">
                    {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                </p>
                </motion.div>
            );
            })}
        </motion.div>
      </section>

      {/* ================= COMPREHENSIVE PROTECTION ================= */}
      <section className="bg-[#F7F8FC] py-24">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1C2A7D] mb-12"
          >
            Comprehensive Protection
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              "Property & Business Interruption",
              "Product Liability & Recall",
              "Professional Indemnity",
              "Cyber Insurance",
              "Marine & Transit",
            ].map((cover) => (
              <motion.div
                key={cover}
                variants={fadeUp}
                className="bg-white
                           border border-[#1C2A7D]/10
                           rounded-xl px-6 py-6
                           font-semibold text-[#1C2A7D]
                           flex items-center gap-3
                           hover:border-[#E8D534]
                           transition"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8D534]" />
                {cover}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </main>
  );
}
