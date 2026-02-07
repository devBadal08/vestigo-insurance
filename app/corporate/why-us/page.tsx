import Image from "next/image";

export default function WhyUsPage() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – ILLUSTRATION */}
          <div className="relative w-full h-[420px] lg:h-[520px]">
            <Image
              src="/why-us-illustration.png" // add image in public folder
              alt="Strategic risk advisory discussion"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C2A7D] mb-6">
              Strategic Risk Advisory Partnership
            </h1>

            <p className="text-slate-700 text-lg leading-relaxed mb-10">
              Our role extends beyond policy placement. We operate as a strategic
              risk advisory partner, investing deeply in understanding your
              business operations, exposure points, and growth priorities.
              This enables us to structure insurance programmes that are
              thoughtfully designed, policy-accurate, and prepared to perform
              when it matters most.
            </p>

            {/* VALUE POINTS */}
            <div className="space-y-6">
              <ValueItem
                title="Risk Assessment"
                description="Comprehensive analysis of your unique exposure landscape"
              />

              <ValueItem
                title="Coverage Structuring"
                description="Precision-engineered insurance programmes aligned to your needs"
              />

              <ValueItem
                title="Claims Advisory"
                description="Expert guidance through the claims process ensuring optimal outcomes"
              />

              <ValueItem
                title="Loss Mitigation"
                description="Proactive strategies to minimise risk and prevent future losses"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENT ================= */

function ValueItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#1C2A7D]/20
                      flex items-center justify-center text-[#1C2A7D] font-bold">
        ▢
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#1C2A7D]">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
