import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <section className="bg-white text-slate-700">

      {/* ================= HERO ================= */}
        <section className="relative bg-white pt-[110px] pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT: IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[420px]
                            rounded-3xl overflow-hidden shadow-xl">
            <Image
                src="/who we are.jpeg"
                alt="Vestigo leadership advisory meeting"
                fill
                priority
                className="object-cover"
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-[#1C2A7D]/10" />
            </div>

            {/* RIGHT: INTRO CONTENT */}
            <div className="bg-white border border-slate-200 shadow-xl
                            rounded-2xl px-10 py-12">

            <h1 className="text-4xl md:text-5xl font-extrabold
                            tracking-tight text-[#1C2A7D]">
                Who We Are
            </h1>

            <div className="w-20 h-[3px] bg-[#E8D534] mt-4 mb-6 rounded-full" />

            <p className="text-lg leading-[1.8] text-slate-600">
                Independent advisory shaped by insight.
                <span className="block mt-2 font-semibold text-[#1C2A7D]">
                Protection guided by foresight.
                </span>
            </p>
            </div>

        </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6">

            {/* Intro Highlight */}
            <div className="text-center mb-16">
            <p className="text-[20px] leading-[1.9]
                            font-medium
                            text-[#1C2A7D]">
                Vestigo Insurance Brokers Pvt. Ltd. is an independent insurance
                brokerage and advisory firm built to help organisations navigate
                risk with clarity, foresight, and confidence.
            </p>

            <div className="mx-auto mt-6 w-24 h-[3px] bg-[#E8D534] rounded-full" />
            </div>

            {/* Main Editorial Content */}
            <div className="space-y-12 text-[18px] leading-[1.9] text-slate-700">

            <p className="text-center max-w-4xl mx-auto">
                Today’s business environment is shaped by interconnected risks —
                regulatory shifts, operational complexity, cyber exposure, climate
                variability, and business continuity challenges.
            </p>

            <p className="text-center max-w-4xl mx-auto">
                Our role extends beyond policy placement. We operate as a
                <span className="font-semibold text-[#1C2A7D]">
                {" "}strategic risk advisory partner
                </span>,
                investing deeply in understanding business operations, exposure
                points, and growth priorities.
            </p>

            <p className="text-center max-w-4xl mx-auto">
                Our advisory philosophy is firmly
                <span className="font-semibold text-[#1C2A7D]">
                {" "}client-first and policy-centric
                </span>.
                We act solely in the insured’s interest — bringing transparency,
                accountability, and precision across the insurance lifecycle.
            </p>

            {/* Signature Statement */}
            <div className="relative mt-20 max-w-3xl mx-auto text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2
                                w-12 h-12 rounded-full
                                bg-[#E8D534]/20" />

                <p className="relative text-[19px]
                            font-semibold
                            text-[#1C2A7D]
                            leading-[1.7]">
                Vestigo stands for assurance shaped by insight, protection guided by
                foresight, and advisory designed for the future.
                </p>
            </div>

            </div>
        </div>
        </section>
    </section>
  );
}
