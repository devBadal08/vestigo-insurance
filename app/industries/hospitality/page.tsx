"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Hotel,
  Users,
  ShieldAlert,
  PauseCircle,
  CreditCard,
  UserCog,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HospitalityPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative pt-[110px] pb-24 bg-[#F7F8FC]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#1C2A7D]"
          >
            <span className="bg-[#E8D534]/40 px-2 rounded">Hospitality</span> &
            Tourism Insurance Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl font-medium text-[#1C2A7D]"
          >
            Redefining Guest Experiences
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
            transition={{ delay: 0.2 }}
            className="max-w-4xl text-[17px] leading-[1.85] text-slate-600"
          >
            Post-pandemic recovery surge, experiential travel boom, boutique
            hospitality growth, technology-enabled service, sustainability
            focus, and wellness tourism are transforming the hospitality
            landscape.
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
          className="text-3xl font-bold text-[#1C2A7D] mb-14"
        >
          Hospitality Sector Risks
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
        >
          {[
            {
              title: "Property Damage",
              desc: "Fire, natural disasters, equipment breakdown, renovation risks",
              icon: Hotel,
            },
            {
              title: "Guest Liability",
              desc: "Slip and fall, food poisoning, injury claims, medical emergencies",
              icon: Users,
            },
            {
              title: "Business Interruption",
              desc: "Seasonal disruptions, reputation damage, event cancellations",
              icon: PauseCircle,
            },
            {
              title: "Cyber & Data",
              desc: "Guest data breaches, booking failures, payment fraud",
              icon: ShieldAlert,
            },
            {
              title: "Liquor Liability",
              desc: "Over-service incidents, intoxication-related claims",
              icon: CreditCard,
            },
            {
              title: "Employee Practices",
              desc: "Staff injuries, disputes, workplace safety risks",
              icon: UserCog,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="relative bg-[#F9FAFD] rounded-2xl pl-16 pr-6 py-6
                           border border-[#1C2A7D]/10
                           shadow-[0_14px_40px_rgba(28,42,125,0.12)]
                           hover:shadow-[0_24px_60px_rgba(28,42,125,0.22)]"
              >
                {/* ICON */}
                <div
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
                             w-14 h-14 rounded-full bg-[#1C2A7D]
                             ring-4 ring-[#E8D534]
                             flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-white stroke-[1.8]" />
                </div>

                <h3 className="text-lg font-semibold text-[#1C2A7D] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ================= COVERAGE ================= */}
      <section className="bg-[#F7F8FC] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1C2A7D] mb-16 text-center"
          >
            Complete Hospitality Coverage
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                title: "Property & Business Interruption",
                image: "/hospitality/h1.jpeg",
              },
              {
                title: "General & Product Liability",
                image: "/hospitality/h2.jpeg",
              },
              {
                title: "Cyber & Data Protection",
                image: "/hospitality/h3.jpeg",
              },
              {
                title: "Liquor Liability",
                image: "/hospitality/h4.jpeg",
              },
              {
                title: "Workers Compensation",
                image: "/hospitality/h5.jpeg",
              },
              {
                title: "Equipment Breakdown",
                image: "/hospitality/h6.jpeg",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group bg-white rounded-3xl overflow-hidden
                            border border-[#1C2A7D]/10
                            shadow-[0_18px_45px_rgba(28,42,125,0.14)]
                            hover:shadow-[0_30px_70px_rgba(28,42,125,0.25)]
                            transition"
              >
                {/* IMAGE */}
                <div className="relative w-full bg-[#F7F8FC] flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
      w-full
      h-auto
      object-contain
      transition-transform
      duration-500
      group-hover:scale-[1.03]
    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-7 text-center">
                  <h3 className="font-semibold text-[#1C2A7D] text-lg">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
