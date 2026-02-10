"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Sparkles, Handshake } from "lucide-react";
import { Playfair_Display } from "next/font/google";

export default function HomePage() {
  return (
    <main>
      {/* ================= ABOUT HERO (INSURANCE STYLE) ================= */}
      <section className="relative pt-[88px]">
        {/* HERO IMAGE */}
        <div
          className="
      relative
      w-full
      sm:h-[520px]
      lg:h-[480px]
      bg-[#F8FAFC]
    "
        >
          <Image
            src="/home1.jpeg"
            alt="Insurance solutions"
            priority
            width={1200}
            height={1600}
            className="
        w-full
        h-auto
        object-contain
        sm:hidden
      "
          />

          <Image
            src="/home1.jpeg"
            alt="Insurance solutions"
            fill
            priority
            className="
        hidden sm:block
        object-cover
        object-[center_65%]
      "
          />
        </div>

        {/* FLOATING CARD */}
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
    bg-white
    rounded-2xl sm:rounded-[28px]
    shadow-[0_35px_80px_rgba(28,42,125,0.30)]
    px-5 py-6 sm:px-10 sm:py-12
    max-w-3xl
    mt-6 sm:-mt-16
  "
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1C2A7D]">
              Vestigo Insurance Advisors
            </h1>

            <div className="w-16 sm:w-20 h-[3px] bg-[#E8D534] mt-4 mb-4 sm:mt-5 sm:mb-6 rounded-full" />

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Simplifying Insurance, Amplifying Trust
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION SECTION ================= */}
      <section className="relative py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div
                className="w-12 h-12 rounded-full
                        bg-[#1C2A7D]/10
                        flex items-center justify-center
                        text-[#1C2A7D]"
              >
                <Sparkles />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1C2A7D]">
              Empowering Businesses Through Strategic Risk Advisory
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Vestigo Insurance Advisors empowers businesses with expert risk
              consulting, comprehensive inspections, and policy audits. Since
              2025, we’ve delivered tailored, cost-effective solutions to
              optimize coverage, ensure compliance, and unlock business
              resilience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Handshake />,
                title: "Personalized Partnerships",
                desc: "Bespoke strategies aligned with your unique business objectives.",
              },
              {
                icon: <TrendingUp />,
                title: "Measurable Results",
                desc: "Tangible value and clear ROI through optimized insurance coverage.",
              },
              {
                icon: <ShieldCheck />,
                title: "Proactive Protection",
                desc: "Forward-thinking risk management that transforms threats into opportunities.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group bg-white rounded-3xl p-10
                     border border-slate-200
                     shadow-sm hover:shadow-[0_30px_80px_rgba(28,42,125,0.25)]
                     transition"
              >
                <div
                  className="w-14 h-14 rounded-xl
                          bg-[#1C2A7D]
                          text-[#E8D534]
                          flex items-center justify-center
                          mb-6
                          group-hover:scale-110 transition"
                >
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-[#1C2A7D] mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PURPOSE / VISION / MISSION ================= */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C2A7D]">
              Our Purpose: Vision & Mission
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Empowering businesses with strategic risk management and
              unwavering support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white p-12 rounded-3xl shadow-sm"
            >
              <span
                className="absolute -top-6 left-6
                     bg-[#E8D534] text-[#1C2A7D]
                     px-4 py-1 rounded-full text-sm font-bold"
              >
                Our Mission
              </span>

              <p className="mt-6 text-slate-600 leading-relaxed">
                To transform the insurance experience by delivering intelligent,
                tech-driven solutions backed by expert advisory…
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1C2A7D] text-white p-12 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-[#E8D534] mb-4">
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed">
                To be India’s most trusted business insurance advisory…
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CORE SOLUTIONS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C2A7D]">
              Our Core Solutions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Unlock your business potential with expert-led risk advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Proactive Risk Consulting",
                desc: "Transform liabilities into strategic advantages with tailored risk solutions.",
              },
              {
                title: "Expert Risk Inspections",
                desc: "Detailed on-site and remote inspections to uncover hidden vulnerabilities.",
              },
              {
                title: "Optimized Policy Audits",
                desc: "Align coverage with evolving business needs and save 10–20% on premiums.",
              },
              {
                title: "Claims Management",
                desc: "Expert advocacy ensuring faster resolution with minimal business disruption.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white rounded-2xl p-8 border
               hover:border-[#E8D534]
               transition"
              >
                <div
                  className="absolute -top-4 -left-4
                    w-10 h-10 rounded-full
                    bg-[#1C2A7D] text-[#E8D534]
                    flex items-center justify-center font-bold"
                >
                  {i + 1}
                </div>

                <h3 className="font-bold text-[#1C2A7D] mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2A7D] text-center mb-16">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "Manufacturing",
              "IT & Technology",
              "Logistics & Marine",
              "BFSI",
              "Energy",
              "Pharmaceuticals",
              "Infrastructure",
              "SMEs & Corporates",
            ].map((industry) => (
              <motion.div
                key={industry}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="px-6 py-3 rounded-full
                 bg-white border
                 font-semibold text-[#1C2A7D]
                 hover:bg-[#1C2A7D]
                 hover:text-[#E8D534]
                 transition"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US? ================= */}
      <section className="bg-[#1C2A7D] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Secure Your Future
          </h2>
          <p className="text-lg mb-10 text-white/90">
            Partner with Vestigo Insurance Advisors to protect your assets,
            empower growth, and ensure long-term stability.
          </p>

          <Link
            href="/contact-us"
            className="inline-block bg-[#E8D534] text-[#1C2A7D]
                 font-bold px-8 py-4 rounded-full"
          >
            Schedule a Risk Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= SUB COMPONENTS ================= */

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="bg-[#F8FAFC] rounded-2xl p-10 text-center
                    border border-slate-200
                    shadow-sm hover:shadow-lg transition"
    >
      <div className="flex justify-center mb-6">
        <div
          className="w-14 h-14 flex items-center justify-center
                        rounded-full bg-[#1C2A7D] text-[#E8D534]"
        >
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-bold text-[#1C2A7D] mb-2">{title}</h3>

      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

/* ================= ICONS ================= */

function HandshakeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M16 11l-4 4-4-4" />
      <path d="M12 15l-3 3a2 2 0 01-3-3l3-3" />
      <path d="M12 15l3 3a2 2 0 003-3l-3-3" />
      <path d="M2 12l5-5a4 4 0 015 0l2 2a4 4 0 005 0l3-3" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
    </svg>
  );
}
