import Image from "next/image";

export default function AboutUsPage() {
  return (
    <section className="relative overflow-hidden">

      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br
                        from-[#1C2A7D]/6
                        via-white
                        to-[#E8D534]/12" />

        <div className="absolute top-[25%] left-[-10%]
                        w-[520px] h-[520px]
                        bg-[#1C2A7D]/18
                        rounded-full blur-[150px]" />

        <div className="absolute bottom-[-20%] right-[-10%]
                        w-[520px] h-[520px]
                        bg-[#E8D534]/25
                        rounded-full blur-[150px]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-[70px]">

        <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px]">

          {/* Background Image */}
          <Image
            src="/about us.jpeg"
            alt="Vestigo leadership advisory meeting"
            fill
            priority
            className="object-cover object-top"
          />

          {/* Dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r
                          from-[#1C2A7D]/80
                          via-[#1C2A7D]/40
                          to-transparent" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-6 pb-14 sm:pb-16">

              <h1 className="text-3xl sm:text-4xl md:text-5xl
                            font-extrabold text-white">
                About Vestigo
              </h1>

              <div className="w-20 h-[3px] bg-[#E8D534] mt-4 mb-5 rounded-full" />

              <p className="max-w-xl text-lg sm:text-xl
                            text-white/90 leading-relaxed">
                Advisory shaped by insight.
                <span className="font-semibold text-[#E8D534]">
                  {" "}Protection guided by foresight.
                </span>
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* LEFT CONTENT */}
          <div
            className="lg:col-span-2
                      bg-white/70 backdrop-blur
                      rounded-2xl
                      border border-slate-200/70
                      p-10
                      space-y-7
                      text-[#2A2F45]
                      text-[17px]
                      leading-[1.85]"
          >

            <p className="text-[18px] font-medium text-[#1C2A7D]">
              Vestigo Insurance Brokers Pvt. Ltd. is an independent insurance brokerage
              and advisory firm built to help organizations navigate risk with clarity,
              foresight, and confidence.
            </p>

            <p>
              Grounded in the enduring principles of insurance, Vestigo brings together
              sharp, forward-looking minds and disciplined advisory practices to address
              the realities of modern business risk.
            </p>

            <p>
              Today’s business environment is shaped by interconnected risks—regulatory
              shifts, operational complexity, cyber exposure, climate variability, and
              business continuity challenges.
            </p>

            <p>
              Our role extends beyond policy placement. We operate as a
              <span className="font-semibold text-[#1C2A7D]">
                {" "}strategic risk advisory partner
              </span>,
              investing deeply in understanding business operations, exposure points,
              and growth priorities. This enables us to structure insurance programs
              that are thoughtfully designed, policy-accurate, and prepared to perform
              when it matters most.
            </p>

            <p>
              Our advisory philosophy is firmly
              <span className="font-semibold text-[#1C2A7D]">
                {" "}client-first and policy-centric
              </span>.
              We act solely in the insured’s interest—bringing transparency,
              accountability, and precision across the insurance lifecycle, from risk
              assessment and coverage structuring to claims advisory and loss mitigation.
            </p>

            {/* Highlighted brand statement */}
            <div className="relative pl-6 mt-6">
              <span className="absolute left-0 top-0 h-full w-[3px] bg-[#E8D534] rounded-full" />
              <p className="font-semibold text-[#1C2A7D] text-[18px]">
                Vestigo stands for assurance shaped by insight, protection guided by
                foresight, and advisory designed for the future.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/95 backdrop-blur
                          rounded-2xl
                          border border-slate-200
                          border-t-4 border-t-[#E8D534]
                          shadow-lg p-8 h-fit">
            <h3 className="text-xl font-bold text-[#1C2A7D] mb-5">
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

      {/* ================= PURPOSE / VISION / MISSION ================= */}
      <div className="relative bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C2A7D] mb-4">
              Our Vision & Mission
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              At Vestigo Insurance Advisors, our purpose is clear to empower your business
              with strategic risk management and unwavering support, securing a
              prosperous future.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* MISSION */}
            <div className="bg-[#F8FAFC]
                            border border-slate-200
                            rounded-2xl p-10
                            shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-[#1C2A7D] mb-6">
                Our Mission: Safeguarding Your Future Growth
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                To transform the insurance experience of organizations by delivering
                intelligent, tech-driven solutions backed by expert advisory—ensuring
                every business is boldly protected, confidently growing, and always assured.
              </p>

              <p className="text-slate-700 leading-relaxed">
                We provide <span className="font-semibold text-[#1C2A7D]">actionable insights</span> that
                empower organizations to proactively mitigate risks, transforming potential
                challenges into opportunities for sustained growth and profitability.
              </p>
            </div>

            {/* VISION */}
            <div className="bg-[#F8FAFC]
                            border border-slate-200
                            rounded-2xl p-10
                            shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-[#1C2A7D] mb-6">
                Our Vision: Pioneering India’s Risk Advisory Landscape
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                To be the trusted leader in Business Insurance, delivering cutting-edge,
                innovative, and tech-powered solutions that enable organizations to scale
                with certainty, security, and confidence.
              </p>

              <p className="text-slate-700 leading-relaxed">
                We are committed to setting new industry benchmarks through continuous
                innovation, deep expertise, and an unwavering commitment to our clients’
                success and long-term resilience.
              </p>
            </div>

          </div>

          {/* ACCENT LINE */}
          <div className="flex justify-center mt-14">
            <div className="w-24 h-1 rounded-full bg-[#E8D534]" />
          </div>

        </div>
      </div>

    </section>
  );
}
