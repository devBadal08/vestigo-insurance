import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* ===== BACKGROUND ILLUSTRATION ===== */}
      <div className="absolute inset-0">
        <Image
          src="/who-we-are-bg.png" // add illustration here
          alt="Vestigo team discussion illustration"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1C2A7D]">
            Who We Are
          </h1>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            Vestigo Insurance Brokers Pvt. Ltd. is an independent insurance
            brokerage and advisory firm built to help organisations navigate
            risk with clarity, foresight, and confidence. We bring together
            sharp, forward-looking minds and disciplined advisory practices to
            address the realities of modern business risk.
          </p>
        </div>

        {/* ===== HIGHLIGHT SECTIONS ===== */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Our Foundation */}
          <div className="rounded-2xl bg-[#1C2A7D]/5 p-8 border border-[#1C2A7D]/10">
            <h3 className="text-xl font-semibold text-[#1C2A7D] mb-4">
              Our Foundation
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Grounded in enduring insurance principles whilst embracing how risk evolves and protection must adapt alongside it.
            </p>
          </div>

          {/* Our Distinction */}
          <div className="rounded-2xl bg-white p-8 shadow-md border border-slate-100">
            <h3 className="text-xl font-semibold text-[#1C2A7D] mb-4">
              Our Distinction
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Progressive thinking combined with professional rigour—engaging proactively to support clients through changing risk landscapes
            </p>
          </div>
        </div>

        {/* ===== EXTENDED CONTENT ===== */}
        <div className="mt-14 max-w-4xl space-y-6 text-slate-700 leading-relaxed">
          <p>
            Today’s business environment is shaped by interconnected
            risks—regulatory shifts, operational complexity, cyber exposure,
            climate variability, and business continuity challenges. At
            Vestigo, we focus on anticipating emerging risk patterns and
            aligning insurance solutions that remain relevant over time.
          </p>

          <p>
            Our role extends beyond policy placement. We operate as a strategic
            risk advisory partner, investing deeply in understanding business
            operations, exposure points, and growth priorities. This enables us
            to structure insurance programs that are policy-accurate and
            prepared to perform when it matters most.
          </p>

          <p>
            Our advisory philosophy is firmly client-first and policy-centric.
            We act solely in the insured’s interest—bringing transparency,
            accountability, and precision across the insurance lifecycle.
          </p>

          <p className="font-semibold text-[#1C2A7D]">
            Vestigo stands for assurance shaped by insight, protection guided by
            foresight, and advisory designed for the future.
          </p>
        </div>
      </div>
    </section>
  );
}
