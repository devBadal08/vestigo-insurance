import Image from "next/image";

export default function AboutUsPage() {
  return (
    <section className="bg-slate-50">
      {/* ===== HERO IMAGE ===== */}
      <div className="relative w-full h-[300px] sm:h-[380px]">
        <Image
          src="/about-hero.jpg" // 👉 place image in public folder
          alt="About Vestigo Insurance Advisors"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A7D]/90 to-[#1C2A7D]/50" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              About Vestigo
            </h1>
            <p className="mt-4 max-w-2xl text-white/90 text-lg">
              Advisory shaped by insight. Protection guided by foresight.
            </p>
          </div>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT – MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-6 text-slate-700 leading-relaxed text-lg">
            <p>
              Vestigo Insurance Brokers Pvt. Ltd. is an independent insurance brokerage
              and advisory firm built to help organizations navigate risk with clarity,
              foresight, and confidence.
            </p>

            <p>
              Grounded in the enduring principles of insurance, Vestigo brings together
              sharp, forward-looking minds and disciplined advisory practices to address
              the realities of modern business risk. Our perspective reflects not just
              how insurance has worked historically, but how risk is evolving and how
              protection must adapt alongside it.
            </p>

            <p>
              Today’s business environment is shaped by interconnected risks—regulatory
              shifts, operational complexity, cyber exposure, climate variability, and
              business continuity challenges. At Vestigo, we focus on anticipating these
              emerging risk patterns and aligning insurance solutions that remain
              relevant, resilient, and responsive over time.
            </p>

            <p>
              Our role extends beyond policy placement. We operate as a strategic risk
              advisory partner, investing deeply in understanding business operations,
              exposure points, and growth priorities. This enables us to structure
              insurance programs that are thoughtfully designed, policy-accurate, and
              prepared to perform when it matters most.
            </p>

            <p>
              Our advisory philosophy is firmly client-first and policy-centric. We act
              solely in the insured’s interest—bringing transparency, accountability,
              and precision across the insurance lifecycle, from risk assessment and
              coverage structuring to claims advisory and loss mitigation.
            </p>

            <p>
              What distinguishes Vestigo is the energy of progressive thinking combined
              with professional rigor. Our team brings fresh perspective, analytical
              depth, and an active approach to problem-solving—allowing us to engage
              proactively rather than reactively.
            </p>

            <p className="font-semibold text-[#1C2A7D]">
              Vestigo stands for assurance shaped by insight, protection guided by
              foresight, and advisory designed for the future.
            </p>
          </div>

          {/* RIGHT – HIGHLIGHT CARD */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
            <h3 className="text-xl font-bold text-[#1C2A7D] mb-4">
              What Defines Vestigo
            </h3>

            <ul className="space-y-4 text-slate-700">
              <li>• Independent & client-first advisory</li>
              <li>• Policy-centric risk solutions</li>
              <li>• Forward-looking risk assessment</li>
              <li>• Precision across the insurance lifecycle</li>
              <li>• Confidence through clarity & discipline</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
