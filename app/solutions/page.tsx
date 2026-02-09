import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "Risk Assessment",
    desc: "Identify, evaluate, and mitigate operational and strategic risks proactively.",
    icon: "🛡️",
    href: "/solutions/audits&riskassessment",
  },
  {
    title: "Claims Management",
    desc: "End-to-end claims advocacy to ensure fair, timely, and accurate settlements.",
    icon: "🤝",
    href: "/solutions/claimsmanagement",
  },
  {
    title: "Commercial Insurance",
    desc: "Comprehensive coverage solutions designed for modern businesses.",
    icon: "🏢",
    href: "/solutions/commercialinsurance",
  },
  {
    title: "Employee Benefits",
    desc: "Health and benefit programs that protect people and support growth.",
    icon: "👥",
    href: "/solutions/employeebenifits",
  },
  {
    title: "Life Insurance",
    desc: "Long-term financial security for individuals and business leadership.",
    icon: "❤️",
    href: "/solutions/lifeinsurance",
  },
  {
    title: "Green Energy Insurance",
    desc: "Specialised risk protection for renewable and sustainable energy projects.",
    icon: "🌱",
    href: "/solutions/greenXinsurance",
  },
  {
    title: "Surety Bond",
    desc: "Risk transfer solutions that strengthen financial credibility.",
    icon: "📄",
    href: "/solutions/suretybond&creditinsurance",
  },
  {
    title: "Ability Suite",
    desc: "Advanced, structured insurance programs built for complex needs.",
    icon: "💎",
    href: "/solutions/abilitysuite",
  },
];

export default function SolutionsPage() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C2A7D]/6 via-white to-[#E8D534]/12" />
      </div>

        {/* ================= HERO IMAGE ================= */}
        <section className="relative pt-[90px]">

        <div className="relative w-full aspect-[16/9] lg:aspect-[16/7]">

            <Image
            src="/solution2.jpeg"
            alt="Vestigo insurance solutions"
            fill
            priority
            className="object-cover object-center"
            />

            {/* Optional subtle brand overlay (very light) */}
            <div className="absolute inset-0 bg-[#1C2A7D]/20" />

        </div>

        </section>

        {/* ================= INTRO CARD ================= */}
        <section className="relative -mt-6 sm:-mt-10 lg:-mt-12 z-10">
        <div className="max-w-7xl mx-auto px-6">

            <div
            className="bg-white rounded-3xl shadow-xl
                        px-8 py-10 sm:px-12 sm:py-14
                        max-w-4xl"
            >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C2A7D] mb-6">
                Our Insurance Solutions
            </h1>

            <div className="w-20 h-[3px] bg-[#E8D534] mb-6 rounded-full" />

            <p className="text-[17px] sm:text-[18px]
                            leading-[1.85] text-slate-700">
                Comprehensive protection tailored to your unique needs. From commercial
                enterprises to individual life cover, we deliver integrated risk,
                insurance, and claims expertise to safeguard what matters most.
            </p>
            </div>

        </div>
        </section>

      {/* ================= SOLUTIONS GRID ================= */}
      <div
        id="solutions"
        className="max-w-7xl mx-auto px-6 pb-28"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {solutions.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white rounded-2xl border border-slate-200
                         shadow-sm hover:shadow-lg transition
                         p-6 flex flex-col"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl mb-5
                           bg-[#E8D534]/20
                           flex items-center justify-center
                           text-[#1C2A7D] text-2xl"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#1C2A7D] mb-3 group-hover:underline">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-[1.7] text-slate-600">
                {item.desc}
              </p>

              {/* CTA */}
              <span className="mt-auto pt-4 text-sm font-semibold text-[#1C2A7D]">
                Learn more →
              </span>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
