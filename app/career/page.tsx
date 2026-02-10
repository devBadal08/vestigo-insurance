"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, TrendingUp, FlaskConical, Handshake } from "lucide-react";
import type { Variants } from "framer-motion";

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

export default function CareerPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative pt-[110px] pb-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-[#1C2A7D] leading-tight"
            >
              Join Our Team: Shape the Future of Insurance Broking
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-[17px] leading-[1.85] text-slate-600 max-w-xl"
            >
              Led by visionary entrepreneurs, we’re redefining insurance broking
              with future-focused risk solutions. Join a dynamic team where
              innovation meets opportunity and your ideas help shape tomorrow’s
              insurance landscape.
            </motion.p>

            {/* FEATURES */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="mt-10 bg-[#F8FAFC] border border-slate-200 rounded-2xl overflow-hidden"
            >
              {[
                {
                  title: "Dynamic Leadership",
                  desc: "Young entrepreneurs driving innovation",
                  icon: Rocket,
                },
                {
                  title: "Career Growth",
                  desc: "Fast-track progression in a growing company",
                  icon: TrendingUp,
                },
                {
                  title: "Cutting-Edge Work",
                  desc: "Tomorrow’s insurance solutions, built today",
                  icon: FlaskConical,
                },
                {
                  title: "Ownership Culture",
                  desc: "Your voice, your impact, your success",
                  icon: Handshake,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className={`flex items-start gap-4 px-6 py-6 bg-white
                    ${index !== 0 ? "border-t border-slate-200" : ""}`}
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-[#E8D534]/20
                                  flex items-center justify-center flex-shrink-0"
                  >
                    <item.icon className="w-5 h-5 text-[#1C2A7D]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1C2A7D]">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              <p className="text-lg font-semibold text-[#1C2A7D] mb-4">
                Ready to make an impact?
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="px-6 py-3 rounded-lg
                                   bg-[#1C2A7D] text-white
                                   font-semibold hover:bg-[#16225f]
                                   transition"
                >
                  Apply Now
                </button>

                <button
                  className="px-6 py-3 rounded-lg
                                   border-2 border-[#1C2A7D]
                                   text-[#1C2A7D] font-semibold
                                   hover:bg-[#1C2A7D] hover:text-white
                                   transition"
                >
                  Explore Our Culture
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/career.png"
                alt="Team collaboration at Vestigo"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
