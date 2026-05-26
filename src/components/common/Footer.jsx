import { motion } from "framer-motion";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`relative overflow-hidden border-t ${
        darkMode
          ? "bg-[#020617] border-white/10"
          : "bg-[#F8F5F0] border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-20 pb-8">
        {/* TOP */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-14">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1D4ED8] flex items-center justify-center shadow-lg">
                {/* Graduation SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10L12 5 2 10l10 5 10-5z" />
                  <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
                </svg>
              </div>

              <div>
                <h2
                  className={`text-2xl font-bold tracking-tight ${
                    darkMode
                      ? "text-white"
                      : "text-[#0F172A]"
                  }`}
                >
                  Shree Vimal
                </h2>

                <p
                  className={`mt-1 text-sm ${
                    darkMode
                      ? "text-white/60"
                      : "text-slate-500"
                  }`}
                >
                  Vidya Mandir
                </p>
              </div>
            </div>

            <p
              className={`mt-7 leading-8 max-w-md ${
                darkMode
                  ? "text-white/65"
                  : "text-slate-600"
              }`}
            >
              A modern English medium school focused
              on discipline, creativity, confidence,
              and academic excellence for every child.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">
              {[
                {
                  href: "#",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                      />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line
                        x1="17.5"
                        y1="6.5"
                        x2="17.51"
                        y2="6.5"
                      />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    darkMode
                      ? "bg-white/5 border border-white/10 text-white hover:bg-[#1D4ED8]"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-[#1D4ED8] hover:text-white"
                  }`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3
              className={`text-lg font-semibold ${
                darkMode
                  ? "text-white"
                  : "text-[#0F172A]"
              }`}
            >
              Quick Links
            </h3>

            <div className="mt-7 flex flex-col gap-4">
              {[
                "About School",
                "Admissions",
                "Facilities",
                "Activities",
                "Contact",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`transition-all duration-300 hover:translate-x-1 ${
                    darkMode
                      ? "text-white/65 hover:text-white"
                      : "text-slate-600 hover:text-[#1D4ED8]"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3
              className={`text-lg font-semibold ${
                darkMode
                  ? "text-white"
                  : "text-[#0F172A]"
              }`}
            >
              Education
            </h3>

            <div className="mt-7 flex flex-col gap-4">
              {[
                "KG to Std 5",
                "Smart Learning",
                "Creative Activities",
                "Sports & Growth",
                "Future Skills",
              ].map((item, index) => (
                <p
                  key={index}
                  className={`${
                    darkMode
                      ? "text-white/65"
                      : "text-slate-600"
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className={`text-lg font-semibold ${
                darkMode
                  ? "text-white"
                  : "text-[#0F172A]"
              }`}
            >
              Contact
            </h3>

            <div className="mt-7 space-y-6">
              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#1D4ED8]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1D4ED8"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.59a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 5 5l1.49-1.16a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.59.59A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <div>
                  <p
                    className={`font-medium ${
                      darkMode
                        ? "text-white"
                        : "text-[#0F172A]"
                    }`}
                  >
                    Phone
                  </p>

                  <p
                    className={`mt-1 ${
                      darkMode
                        ? "text-white/65"
                        : "text-slate-600"
                    }`}
                  >
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#1D4ED8]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1D4ED8"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>

                <div>
                  <p
                    className={`font-medium ${
                      darkMode
                        ? "text-white"
                        : "text-[#0F172A]"
                    }`}
                  >
                    Email
                  </p>

                  <p
                    className={`mt-1 ${
                      darkMode
                        ? "text-white/65"
                        : "text-slate-600"
                    }`}
                  >
                    school@email.com
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#1D4ED8]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1D4ED8"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>

                <div>
                  <p
                    className={`font-medium ${
                      darkMode
                        ? "text-white"
                        : "text-[#0F172A]"
                    }`}
                  >
                    Location
                  </p>

                  <p
                    className={`mt-1 leading-7 ${
                      darkMode
                        ? "text-white/65"
                        : "text-slate-600"
                    }`}
                  >
                    Madhavpur Ghed,
                    Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className={`mt-16 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${
            darkMode
              ? "border-white/10"
              : "border-slate-200"
          }`}
        >
          <p
            className={`text-sm ${
              darkMode
                ? "text-white/45"
                : "text-slate-500"
            }`}
          >
            © 2026 Shree Vimal Vidya Mandir.
            All Rights Reserved.
          </p>

          <p
            className={`text-sm ${
              darkMode
                ? "text-white/45"
                : "text-slate-500"
            }`}
          >
            Crafted with modern educational vision.
          </p>
        </div>
      </div>
    </footer>
  );
}