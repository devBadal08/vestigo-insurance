import Image from "next/image";

export default function OurTeamPage() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* ================= TEAM INTRO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C2A7D] mb-6">
              Our Team
            </h1>

            <p className="text-slate-700 text-lg leading-relaxed mb-10">
              At Vestigo, our team works with a clear sense of responsibility—
              because insurance is not about paperwork, it is about standing by
              clients when outcomes matter most.
            </p>

            {/* HIGHLIGHT CARD */}
            <div className="bg-[#E6F4EF] border-l-4 border-[#1C2A7D] p-6 rounded-lg mb-10">
              <h3 className="text-xl font-semibold text-[#1C2A7D] mb-3">
                Our Commitment
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We take the time to understand each client’s business, risks, and
                expectations, ensuring our advice is thoughtful, practical, and
                dependable. Our teams remain engaged across the entire insurance
                journey, ensuring continuity, clarity, and support not just at
                placement, but through claims and critical moments.
              </p>
            </div>

            {/* PRINCIPLES */}
            <div className="space-y-8">
              <Principle
                title="We Listen Carefully"
                description="Understanding your unique challenges through genuine dialogue and attention to detail."
              />
              <Principle
                title="We Act Responsibly"
                description="Every recommendation is guided by discipline, transparency, and unwavering professional care."
              />
              <Principle
                title="We Remain Present"
                description="When certainty is needed most, Vestigo stands ready—dependable, accessible, and committed."
              />
            </div>

            {/* QUOTE */}
            <blockquote className="mt-12 border-l-4 border-[#1C2A7D] pl-6 text-slate-600 italic">
              “Clients rely on Vestigo because we understand that true partnership
              means being there when it matters—with expertise, integrity, and
              genuine care.”
            </blockquote>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[520px]">
            <Image
              src="/our-team-illustration.png"
              alt="Vestigo advisory team discussion"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ================= LEADERSHIP (FULL WIDTH) ================= */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2A7D] mb-10">
            Our Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <LeaderCard
              name="Bhavit Acharya"
              role="Director & Principal Officer"
              experience="Over 16 years of experience in insurance advisory and claims"
              description={[
                "Bhavit Acharya brings over 16 years of hands-on experience across insurance advisory, policy interpretation, and claims coordination. His approach is firmly policy-first and client-centric, ensuring that insurance solutions align with regulatory requirements and real-world loss scenarios.",
                "Known for his technical depth across insurance products and industry risk structures, Bhavit brings clarity to complex coverage decisions. His understanding of policy intent and operational realities enables clients to structure protection that is practical, defensible, and effective at the time of a claim.",
                "He remains closely involved in complex advisory matters and critical claim engagements, providing dependable guidance when outcomes matter most.",
              ]}
            />

            <LeaderCard
              name="Riya Shah"
              role="Director"
              experience="Over 10 years of experience in client acquisition and relationship management"
              description={[
                "Riya Shah brings over 10 years of experience in client acquisition and relationship development, with a strong focus on building long-term partnerships rooted in trust and clarity.",
                "She works closely with organizations to understand their business context and expectations, ensuring engagements begin with alignment and confidence.",
                "Riya remains actively involved beyond the initial relationship, emphasizing clear communication, responsiveness, and continuity of care—so clients feel supported, informed, and assured throughout their association with Vestigo.",
              ]}
            />
          </div>

          {/* LEADERSHIP PHILOSOPHY */}
          <div className="mt-16 bg-slate-50 border-l-4 border-[#1C2A7D] p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-[#1C2A7D] mb-2">
              Leadership Philosophy
            </h3>
            <p className="text-slate-700 text-lg">
              Experienced in judgment. Disciplined in execution. Committed to standing with clients.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function Principle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1C2A7D]/30 text-[#1C2A7D] font-bold">
        ✓
      </div>
      <div>
        <h4 className="text-lg font-semibold text-[#1C2A7D] mb-1">
          {title}
        </h4>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function LeaderCard({
  name,
  role,
  experience,
  description,
}: {
  name: string;
  role: string;
  experience: string;
  description: string[];
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition flex flex-col h-full">
      <h3 className="text-2xl font-bold text-[#1C2A7D] mb-1">
        {name}
      </h3>

      <p className="text-sm font-semibold text-slate-600 mb-2">
        {role}
      </p>

      <p className="text-sm text-[#1C2A7D] font-medium mb-6">
        {experience}
      </p>

      <div className="flex-1 space-y-4 text-slate-700 leading-relaxed">
        {description.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  );
}
