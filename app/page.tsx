import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-28 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <h1
                className="font-extrabold tracking-tight leading-[1.1]
                          text-[#1C2A7D]
                          text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
              >
                <span className="block whitespace-nowrap">
                  Vestigo Insurance
                </span>
                <span className="block font-semibold">
                  Advisor
                </span>
              </h1>

              <p
                className="mt-5 sm:mt-6
                          text-base sm:text-lg md:text-xl
                          font-medium
                          text-slate-600
                          max-w-xl
                          mx-auto lg:mx-0"
              >
                Simplifying Insurance, Amplifying Trust
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row
                gap-4 justify-center lg:justify-start">

                <Link
                  href="/contact"
                  className="bg-[#1C2A7D] text-white px-8 py-4
                            rounded-full text-sm font-semibold
                            shadow-[0_10px_30px_rgba(28,42,125,0.25)]
                            hover:bg-[#2F6BFF] transition"
                >
                  Get Expert Advice
                </Link>

                <Link
                  href="/solutions"
                  className="px-8 py-4 rounded-full text-sm font-semibold
                            border border-slate-300
                            text-slate-700
                            hover:border-[#1C2A7D]
                            hover:text-[#1C2A7D]
                            transition"
                >
                  View Solutions
                </Link>

              </div>
            </div>

          </div>
        </div>

        {/* RIGHT BACKGROUND IMAGE */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
          <Image
            src="/hero image.jpeg"
            alt="Insurance protection illustration"
            fill
            className="object-contain opacity-90"
            priority
          />

          {/* Soft overlay for polish */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-100/90" />
        </div>
      </section>

    </main>
  );
}
