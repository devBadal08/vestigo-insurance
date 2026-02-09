"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ShieldAlert,
  Database,
  Clock,
  Scale,
  FileWarning,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ITTechIndustryPage() {
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
            Navigating Risk in India’s IT & Technology Sector
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
            className="max-w-4xl text-[17px] leading-[1.85] text-slate-600"
          >
            India’s IT and technology sector is a global powerhouse, contributing
            significantly to GDP and employing millions. Rapid digital
            transformation has increased exposure to cyber threats, operational
            vulnerabilities, and regulatory complexity. Robust insurance
            solutions are essential for sustainable growth and resilience.
          </motion.p>

        </div>
      </section>

      {/* ================= KEY RISKS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1C2A7D] mb-12"
        >
          Key Risks & Hazards Facing Indian Tech Companies
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              title: "Cyber Attacks",
              desc:
                "Ransomware, phishing, malware, and advanced persistent threats pose severe operational, financial, and reputational risks.",
              icon: ShieldAlert,
            },
            {
              title: "Data Breach",
              desc:
                "Unauthorized access, data leaks, and privacy violations can trigger regulatory penalties and client litigation.",
              icon: Database,
            },
            {
              title: "System Downtime",
              desc:
                "Outages of critical systems, cloud services, or data centres disrupt operations and client delivery commitments.",
              icon: Clock,
            },
            {
              title: "Professional Liability",
              desc:
                "Errors, omissions, or service failures can result in contractual disputes and claims from clients.",
              icon: FileWarning,
            },
            {
              title: "Regulatory Exposure",
              desc:
                "Compliance with evolving Indian and global data protection laws requires constant oversight and risk management.",
              icon: Scale,
            },
          ].map((item) => {
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
                {/* ICON */}
                <div
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
                             w-14 h-14 rounded-full
                             bg-[#1C2A7D]
                             ring-4 ring-[#E8D534]
                             flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-white stroke-[1.8]" />
                </div>

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

      {/* ================= INSURANCE FRAMEWORK ================= */}
      <section className="bg-[#F7F8FC] py-24">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1C2A7D] mb-12"
          >
            Comprehensive Insurance Protection Framework
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="
                grid grid-cols-1 sm:grid-cols-2 gap-8
                lg:flex lg:flex-wrap lg:justify-center
            "
            >
            {[
                {
                title: "Cyber Risk Insurance",
                desc:
                    "Protection against data breaches, cyber attacks, recovery costs, legal fees, and reputational damage.",
                },
                {
                title: "Professional Indemnity",
                desc:
                    "Covers claims arising from professional errors, omissions, or negligence in services rendered. Essential for IT firms providing advisory or software development services.",
                },
                {
                title: "Crime & Fidelity",
                desc:
                    "Guards against financial losses due to employee fraud, theft, or other dishonest acts. Protects company assets from internal and external criminal activities.",
                },
                {
                title: "Property & Business Interruption",
                desc:
                    "Coverage for physical offices, data centres, critical equipment, and revenue loss following property damage or operational disruption events.",
                },
                {
                title: "Employee-Related Covers",
                desc:
                    "Group health insurance, personal accident coverage, workmen's compensation, and statutory protection for your workforce across locations.",
                },
            ].map((item) => (
                <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                    y: -10,
                    rotateX: 6,
                    scale: 1.03,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                }}
                className="
                    bg-white border border-[#1C2A7D]/10
                    rounded-2xl px-7 py-7
                    shadow-[0_12px_30px_rgba(28,42,125,0.14)]
                    hover:shadow-[0_28px_60px_rgba(28,42,125,0.28)]
                    transition-transform
                    [transform-style:preserve-3d]
                    w-full sm:w-auto
                    lg:w-[360px]
                "
                >
                <h3 className="font-semibold text-[#1C2A7D] mb-2 text-lg">
                    {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                </p>
                </motion.div>
            ))}
            </motion.div>

          {/* NOTE */}
          <div className="mt-12 bg-[#E8D534]/20 border-l-4 border-[#E8D534]
                          px-6 py-5 text-[#1C2A7D] font-medium">
            Protecting your technology business requires more than standard policies 
            — it demands specialist insurance solutions designed for the digital age 
            and India&apos;s unique regulatory landscape.
          </div>

        </div>
      </section>

    </main>
  );
}
