export default function ClaimsManagementPage() {
  return (
    <main className="bg-white">

      {/* ================= PAGE HEADER ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Claims Excellence
        </h1>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* RIGHT: Expert Claims Advocacy */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Expert Claims Advocacy
            </h2>

            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              When incidents occur, our claims specialists become your
              dedicated advocates. We manage the entire claims process—from
              initial notification through documentation, negotiation, and
              settlement.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Our experienced team understands insurer expectations and
              settlement procedures, ensuring claims are processed efficiently
              whilst maximising recoveries. We handle complex multi-party
              claims, coordinate loss adjusters, and challenge unfair claim
              denials or undervaluations.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
