import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-12">
        {/* Brand Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br
                          from-[#1C2A7D]/5
                          via-white
                          to-[#E8D534]/10" />

          {/* Yellow glow */}
          <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px]
                          bg-[#E8D534]/20 rounded-full blur-[120px]" />

          {/* Blue glow */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px]
                          bg-[#1C2A7D]/15 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6
                pt-10 sm:pt-14 lg:pt-20
                pb-20 sm:pb-24 lg:pb-28 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* MOBILE IMAGE (TOP), DESKTOP RIGHT */}
          <div className="relative w-full h-[300px] sm:h-[380px]
                          order-1 lg:order-2">
            <Image
              src="/hero image.jpeg"
              alt="Insurance advisory professionals"
              fill
              className="object-contain opacity-95"
              priority
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-extrabold tracking-tight leading-[1.1]
                          text-[#1C2A7D]
                          text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
              <span className="block">Strategic Risk</span>
              <span className="block text-[#E8D534]">Advisory for Growth</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl
                          font-medium text-slate-600
                          max-w-xl mx-auto lg:mx-0">
              Licensed insurance advisory delivering clarity, compliance,
              and confidence for forward-thinking businesses.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4
                            justify-center lg:justify-start">
              ...
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION SECTION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C2A7D] mb-6">
              Empowering Businesses Through Strategic Risk Advisory
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Vestigo Insurance Advisors empowers businesses with expert risk consulting,
              comprehensive inspections, and policy audits. Since 2025, we’ve delivered
              tailored, cost-effective solutions to optimize coverage, ensure compliance,
              and unlock business resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueCard
              icon={<HandshakeIcon />}
              title="Personalized Partnerships"
              description="Bespoke strategies aligned with your unique business objectives."
            />

            <ValueCard
              icon={<ChartIcon />}
              title="Measurable Results"
              description="Tangible value and clear ROI through optimized insurance coverage."
            />

            <ValueCard
              icon={<ShieldIcon />}
              title="Proactive Protection"
              description="Forward-thinking risk management that transforms threats into opportunities."
            />
          </div>
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
    <div className="bg-[#F8FAFC] rounded-2xl p-10 text-center
                    border border-slate-200
                    shadow-sm hover:shadow-lg transition">
      <div className="flex justify-center mb-6">
        <div className="w-14 h-14 flex items-center justify-center
                        rounded-full bg-[#1C2A7D] text-[#E8D534]">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-bold text-[#1C2A7D] mb-2">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ================= ICONS ================= */

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 11l-4 4-4-4" />
      <path d="M12 15l-3 3a2 2 0 01-3-3l3-3" />
      <path d="M12 15l3 3a2 2 0 003-3l-3-3" />
      <path d="M2 12l5-5a4 4 0 015 0l2 2a4 4 0 005 0l3-3" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
    </svg>
  );
}
