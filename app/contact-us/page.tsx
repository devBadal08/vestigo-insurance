'use client';

import Image from "next/image";
import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // connect API later
  };

  return (
    <section className="relative bg-white overflow-hidden">

    {/* ===== BACKGROUND ===== */}
    <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C2A7D]/6 via-white to-[#E8D534]/12" />
    </div>

    {/* ================= HERO ================= */}
    <div className="max-w-7xl mx-auto px-6 pt-[120px] pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C2A7D]">
        Connect with Vestigo
        </h1>
        <div className="mx-auto w-20 h-[4px] bg-[#E8D534] mt-4 mb-6 rounded-full" />
        <p className="max-w-2xl mx-auto text-[18px] leading-[1.8] text-slate-700">
        Reach out today to schedule a comprehensive risk consultation and take a
        confident step toward long-term security.
        </p>
    </div>

    {/* ================= SECTION 1 : IMAGE + FORM ================= */}
    <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT : IMAGE */}
        <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-lg">
            <Image
                src="/contact us.jpeg"
                alt="Vestigo advisory consultation"
                fill
                className="object-cover"
                priority
            />
        </div>

        {/* RIGHT : FORM */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-10">

            <h2 className="text-3xl font-bold text-[#1C2A7D] mb-2">
              Let’s Start the Conversation
            </h2>

            <p className="text-slate-600 mb-8">
              Share your details and our advisory team will connect with you shortly.
            </p>

            {/* ===== FORM ===== */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300
                             focus:border-[#1C2A7D] focus:ring-2 focus:ring-[#1C2A7D]/20 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300
                             focus:border-[#1C2A7D] focus:ring-2 focus:ring-[#1C2A7D]/20 outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300
                             focus:border-[#1C2A7D] focus:ring-2 focus:ring-[#1C2A7D]/20 outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300
                             focus:border-[#1C2A7D] focus:ring-2 focus:ring-[#1C2A7D]/20 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300
                             focus:border-[#1C2A7D] focus:ring-2 focus:ring-[#1C2A7D]/20 outline-none resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#1C2A7D] text-white py-4 rounded-xl
                           font-bold tracking-wide hover:bg-[#2437A5] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
    </div>

    {/* ================= SECTION 2 : CENTER VALUE BLOCK ================= */}
    <div className="relative max-w-4xl mx-auto px-6 pb-24 text-center">

        <div className="relative bg-white rounded-3xl border border-slate-200 shadow-md p-12">

        <div className="mx-auto mb-6 w-14 h-14 rounded-xl
                        bg-[#E8D534]
                        flex items-center justify-center
                        text-[#1C2A7D] text-2xl font-bold">
            🛡️
        </div>

        <h3 className="text-3xl font-bold text-[#1C2A7D] mb-6">
            Ready to Secure Your Future and Drive Growth?
        </h3>

        <p className="text-[17px] leading-[1.85] text-slate-700 max-w-2xl mx-auto">
            Don’t let <span className="font-semibold text-[#1C2A7D]">unforeseen risks</span> hold your progress back.
            Vestigo partners with you to design protection strategies that strengthen
            stability, empower innovation, and enable confident growth.
        </p>

        <p className="mt-5 text-[16px] text-slate-600">
            A proactive decision today can deliver lasting peace of mind and
            financial security tomorrow.
        </p>
        </div>
    </div>

    {/* ================= SECTION 3 : CONTACT DETAILS ================= */}
    <div className="max-w-7xl mx-auto px-6 pb-28">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {[
            { icon: "✉", label: "Email Us", value: "info@vestigoinsurance.com" },
            { icon: "📞", label: "Call Us", value: "+91 97261 60360\n+91 97378 01385" },
            { icon: "🌐", label: "Visit Online", value: "www.vestigoinsurance.com" },
            { icon: "📍", label: "Our Presence", value: "Ahmedabad · Vadodara · Surendranagar · Siddhpur · Mumbai" },
        ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <span className="text-[#E8D534] text-2xl">{item.icon}</span>
            <p className="mt-3 text-sm uppercase tracking-wide text-slate-500">
                {item.label}
            </p>
            <p className="mt-1 text-[16px] font-semibold text-[#1C2A7D] whitespace-pre-line">
                {item.value}
            </p>
            </div>
        ))}

        </div>
    </div>

    </section>
  );
}
