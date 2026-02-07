import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12
                      grid grid-cols-1 md:grid-cols-3 gap-10
                      text-center md:text-left">

        {/* BRAND */}
        <div>
            <Image src="/vestigo logo.png" alt="Vestigo" width={120} height={35} />
          <h3 className="text-lg font-semibold mb-3">
            Vestigo Insurance Advisor
          </h3>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Corporate</li>
            <li>Solutions</li>
            <li>Industries</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-3">
            Contact
          </h4>
          <p className="text-sm text-gray-300">📞 +91 XXXXX XXXXX</p>
          <p className="text-sm text-gray-300">✉️ info@yourdomain.com</p>
        </div>

      </div>

      <div className="text-center text-xs sm:text-sm
                      py-4 border-t border-gray-700
                      text-gray-400 px-4">
        © 2026 Vestigo Insurance Advisor. Designed by TechStrota
      </div>
    </footer>
  );
}
