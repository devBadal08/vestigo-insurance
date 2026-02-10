"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Briefcase,
  ShieldCheck,
  CreditCard,
  UserCheck,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function SMEMSMEPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-[110px] pb-28 bg-[#F7F8FC]">
        <div className="max-w-6xl mx-auto px-6">

            {/* TITLE */}
            <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#1C2A7D]"
            >
            SME & MSME Insurance
            </motion.h1>

            <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-semibold text-[#1C2A7D]"
            >
            Tailored Protection for Growing Businesses
            </motion.h2>

            {/* Divider */}
            <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-[3px] bg-[#E8D534] mt-6 mb-10 rounded-full"
            />

            {/* CENTER CONTENT CARD */}
            <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="bg-white rounded-3xl p-10
                        shadow-[0_30px_70px_rgba(28,42,125,0.18)]
                        border border-[#1C2A7D]/10
                        text-slate-600 text-[17px] leading-[1.9]
                        max-w-4xl mx-auto"
            >
            <p className="mb-6">
                Small and medium enterprises form the backbone of our economy, yet often
                face disproportionate insurance challenges. We specialise in delivering
                cost-effective, comprehensive coverage that scales with your business
                ambitions.
            </p>

            <p className="mb-6">
                Our SME insurance programmes are specifically designed to address the
                unique vulnerabilities of smaller operations, whether retail,
                professional services, or manufacturing units.
            </p>

            <p>
                We negotiate with insurers who understand the SME sector, securing
                favourable terms, flexible payment structures, and regular policy
                reviews that evolve with your growth.
            </p>
            </motion.div>

            {/* SERVICES CARDS */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
            {[
                {
                    title: "Package Policies",
                    desc:
                    "Bundled coverage combining property, liability, and business interruption at competitive premiums for operational efficiency.",
                    icon: Briefcase,
                },
                {
                    title: "Professional Indemnity",
                    desc:
                    "Protection against claims arising from professional advice, errors, or omissions with tailored cover for service businesses.",
                    icon: ShieldCheck,
                },
                {
                    title: "Trade Credit Insurance",
                    desc:
                    "Safeguard cash flow against customer payment defaults and insolvency risks during volatile economic conditions.",
                    icon: CreditCard,
                },
                {
                    title: "Key Person Cover",
                    desc:
                    "Financial protection if critical team members become unable to work, ensuring continuity during unexpected challenges.",
                    icon: UserCheck,
                },
            ].map((item) => (
                <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-white rounded-2xl p-7
                            border border-[#1C2A7D]/10
                            shadow-[0_16px_40px_rgba(28,42,125,0.16)]
                            hover:shadow-[0_30px_60px_rgba(28,42,125,0.28)]
                            text-center"
                >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#E8D534]/20
                                flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-[#1C2A7D]" />
                </div>

                <h3 className="text-lg font-semibold text-[#1C2A7D] mb-2">
                    {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
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
