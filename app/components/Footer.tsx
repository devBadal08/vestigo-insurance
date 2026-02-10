import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Corporate", href: "/corporate" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/blogs" },
  { label: "Careers", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0F172A] to-[#020617] text-slate-200">
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* BRAND */}
        <div className="space-y-4">
          <Image
            src="/vestigo logo.png"
            alt="Vestigo Insurance Advisor"
            width={140}
            height={40}
          />

          <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
            Simplifying Insurance, Amplifying Trust
          </p>

          <p className="text-xs tracking-wide text-slate-500">
            Be Assured. Be Insured.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>

          <ul className="space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-white transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-[#E8D534] text-lg">📞</span>
              <p className="text-slate-400 leading-relaxed">
                <a href="tel:+919726160360" className="hover:text-white">
                  +91 97261 60360
                </a>
                <br />
                <a href="tel:+919737801385" className="hover:text-white">
                  +91 97378 01385
                </a>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#E8D534] text-lg">✉️</span>
              <a
                href="mailto:info@vestigoinsurance.com"
                className="text-slate-400 hover:text-white"
              >
                info@vestigoinsurance.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#E8D534] text-lg">📍</span>
              <p className="text-slate-400 leading-relaxed">
                Ahmedabad · Vadodara · Surendranagar <br />
                Siddhpur · Mumbai
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 Vestigo Insurance Advisor. All rights reserved.</p>

        <p>
          Designed by{" "}
          <span className="text-slate-300 font-medium">TechStrota</span>
        </p>
      </div>
    </footer>
  );
}
