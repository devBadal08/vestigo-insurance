import Image from "next/image";

export default function CommercialInsurancePage() {
  return (
    <main className="bg-white">

      {/* ================= HEADER ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Commercial Insurance
        </h1>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-xl overflow-hidden">
            <Image
              src="/commercial-insurance.jpeg"
              alt="Commercial insurance advisory"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 text-slate-700 text-[17px] leading-relaxed">
            <p>
              Protect your business assets, operations, and people with
              comprehensive commercial coverage designed for today’s complex
              risk landscape. We understand that your enterprise faces unique
              challenges—from property damage and liability claims to business
              interruption and cyber threats.
            </p>

            <p>
              Our commercial insurance specialists work directly with leading
              underwriters to secure competitive terms whilst ensuring
              comprehensive protection. We analyse your specific exposures,
              negotiate favourable policy conditions, and provide ongoing risk
              management support to minimise vulnerabilities.
            </p>
          </div>

        </div>
      </section>

      {/* ================= COVERAGE CARDS ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-[#F5F1EE] rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-black mb-2">
              Property & Liability
            </h3>
            <p className="text-slate-600">
              Comprehensive asset protection
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#F5F1EE] rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-black mb-2">
              Business Interruption
            </h3>
            <p className="text-slate-600">
              Revenue continuity coverage
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#F5F1EE] rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-black mb-2">
              Cyber Risk
            </h3>
            <p className="text-slate-600">
              Digital threat protection
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
