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

export default function EngineeringPage() {
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
            Building Tomorrow’s Infrastructure
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl font-semibold text-[#1C2A7D]"
          >
            <span className="bg-[#E8D534]/40 px-2 py-1 rounded">
              Engineering
            </span>{" "}
            the Future
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
            Mega infrastructure boom - highways, bridges, tunnels, metro rail networks, hydroelectric plants, smart cities, green buildings, PropTech revolution, and sustainable construction practices transforming how we build nations.
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
            Construction & Infrastructure Risks
        </motion.h2>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
            {[
            {
                title: "Contractor’s All Risk",
                desc:
                "Structural collapse, equipment damage, third-party injury, and construction defects.",
                image: "/engineering/contractor-risk.jpg",
            },
            {
                title: "Professional Indemnity",
                desc:
                "Design errors, engineering failures, specification mistakes, and project management negligence.",
                image: "/engineering/professional-indemnity.jpg",
            },
            {
                title: "Delay in Start-Up",
                desc:
                "Weather disruptions, contractor default, supply chain failures, and permit delays.",
                image: "/engineering/delay-startup.jpg",
            },
            {
                title: "Structural Warranty",
                desc:
                "Post-completion defects, foundation failures, envelope issues, and latent defects.",
                image: "/engineering/structural-warranty.jpg",
            },
            {
                title: "Environmental Liability",
                desc:
                "Soil contamination, hazardous materials, pollution incidents, and remediation costs.",
                image: "/engineering/environmental-liability.jpg",
            },
            {
                title: "Surety Bonds",
                desc:
                "Performance bonds, payment bonds, bid bonds, and contract completion guarantees.",
                image: "/engineering/surety-bonds.jpg",
            },
            ].map((item) => (
            <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-white rounded-2xl overflow-hidden
                        border border-[#1C2A7D]/10
                        shadow-[0_12px_35px_rgba(28,42,125,0.15)]
                        hover:shadow-[0_28px_60px_rgba(28,42,125,0.3)]
                        transition"
            >
                {/* IMAGE */}
                <div className="relative h-44 w-full">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1C2A7D]/10" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1C2A7D] mb-3">
                    {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                </p>
                </div>

                {/* ACCENT BAR */}
                <div className="h-1 w-full bg-[#E8D534]" />
            </motion.div>
            ))}
        </motion.div>
        </section>

        {/* ================= METRICS (Modern Cards) ================= */}
        <section className="bg-[#F7F8FC] py-28">
        <div className="max-w-7xl mx-auto px-6">

            <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1C2A7D] mb-16 text-center"
            >
            Comprehensive Infrastructure Protection
            </motion.h2>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10"
            >
            {[
                {
                value: "$12B",
                label: "Average Project Value",
                desc: "Mega infrastructure and long-duration construction programs",
                },
                {
                value: "156 Days",
                label: "Delay Risk – DSU Critical",
                desc: "Projects exposed to weather, approvals, and contractor risks",
                },
                {
                value: "99.8%",
                label: "Completion Rate",
                desc: "Achieved with structured surety bond programs",
                },
                {
                value: "$890M",
                label: "Defect Claims Covered",
                desc: "Post-completion structural and warranty claims",
                },
            ].map((item) => (
                <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white rounded-3xl px-8 py-10
                            border border-[#1C2A7D]/10
                            shadow-[0_18px_45px_rgba(28,42,125,0.12)]
                            hover:shadow-[0_28px_65px_rgba(28,42,125,0.2)]
                            transition"
                >
                {/* CIRCLE */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                    {/* arc */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                        cx="50"
                        cy="50"
                        r="44"
                        fill="none"
                        stroke="#E8D534"
                        strokeWidth="6"
                        strokeDasharray="210 80"
                        strokeLinecap="round"
                    />
                    </svg>

                    {/* dot */}
                    <div className="absolute top-2 right-3 w-3 h-3 rounded-full bg-[#1C2A7D]" />

                    {/* value */}
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <span className="text-[20px] leading-tight font-extrabold text-[#1C2A7D]">
                            {item.value}
                        </span>
                    </div>
                </div>

                {/* TEXT */}
                <h3 className="text-sm font-semibold text-[#1C2A7D] text-center mb-2">
                    {item.label}
                </h3>

                <p className="text-sm text-slate-600 text-center leading-relaxed">
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
