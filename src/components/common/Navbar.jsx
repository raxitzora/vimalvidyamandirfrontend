import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Staff", href: "#staff" },
  { name: "Gallery", href: "#gallery" },
  { name: "Admission", href: "#admission" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [activeLink, setActiveLink] =
    useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          px-4
          sm:px-6
          lg:px-10
          pt-4
        "
      >
        <div
          className={`
            max-w-7xl
            mx-auto
            transition-all
            duration-500

            ${
              isScrolled
                ? `
                  bg-white/96
                  shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                  border border-[#E8E2D9]
                  rounded-2xl
                `
                : `
                  bg-[#FFFDF9]
                  border border-[#EFE7DC]
                  rounded-[28px]
                `
            }
          `}
        >
          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-500

              ${
                isScrolled
                  ? "px-5 py-3"
                  : "px-6 lg:px-8 py-4"
              }
            `}
          >
            {/* LEFT BRANDING */}
            <a
              href="#home"
              className="
                flex
                items-center
                gap-4
                shrink-0
              "
            >
              {/* LOGO */}
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-[#1E40AF]
                  flex
                  items-center
                  justify-center
                  shadow-sm
                "
              >
                <span
                  className="
                    text-white
                    font-bold
                    text-lg
                    tracking-wide
                  "
                >
                  SV
                </span>
              </div>

              {/* TEXT */}
              <div>
                <h1
                  className="
                    text-[#0F172A]
                    font-semibold
                    tracking-tight
                    text-[15px]
                    sm:text-[17px]
                    leading-tight
                  "
                >
                  Shree Vimal Vidya Mandir
                </h1>

                <p
                  className="
                    text-[#64748B]
                    text-[11px]
                    sm:text-xs
                    font-medium
                    mt-0.5
                  "
                >
                  English Medium School
                </p>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <nav
              className="
                hidden
                lg:flex
                items-center
                gap-1
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() =>
                    setActiveLink(link.name)
                  }
                  className={`
                    relative
                    px-5
                    py-3
                    rounded-full
                    text-[15px]
                    font-medium
                    transition-all
                    duration-300

                    ${
                      activeLink === link.name
                        ? `
                          text-[#1D4ED8]
                          bg-[#EFF6FF]
                        `
                        : `
                          text-[#334155]
                          hover:text-[#1D4ED8]
                          hover:bg-[#F8FAFC]
                        `
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute
                      left-1/2
                      -translate-x-1/2
                      bottom-2
                      h-[2px]
                      rounded-full
                      bg-[#C59D5F]
                      transition-all
                      duration-300

                      ${
                        activeLink === link.name
                          ? "w-6 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </a>
              ))}
            </nav>

            {/* RIGHT */}
            <div
              className="
                hidden
                lg:flex
                items-center
              "
            >
              <motion.a
                href="#admission"
                whileHover={{
                  y: -1,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  bg-[#1D4ED8]
                  px-6
                  py-3
                  text-white
                  text-sm
                  font-semibold
                  shadow-[0_8px_20px_rgba(29,78,216,0.18)]
                "
              >
                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-2
                  "
                >
                  Apply Now

                  <ChevronRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>

                <div
                  className="
                    absolute
                    inset-0
                    bg-white/10
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />
              </motion.a>
            </div>

            {/* MOBILE BUTTON */}
            <motion.button
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                setMenuOpen(true)
              }
              className="
                lg:hidden
                w-11
                h-11
                rounded-2xl
                border
                border-[#E2E8F0]
                bg-white
                flex
                items-center
                justify-center
                text-[#0F172A]
                shadow-sm
              "
            >
              <Menu size={22} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                fixed
                inset-0
                bg-black/20
                backdrop-blur-[2px]
                z-[60]
              "
            />

            {/* PANEL */}
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -40,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                top-4
                left-4
                right-4
                z-[70]
                bg-[#FFFDF9]
                rounded-[32px]
                border
                border-[#ECE4D8]
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                overflow-hidden
              "
            >
              {/* TOP */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-5
                  py-5
                  border-b
                  border-[#F1ECE4]
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-11
                      h-11
                      rounded-2xl
                      bg-[#1E40AF]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span className="text-white font-bold">
                      SV
                    </span>
                  </div>

                  <div>
                    <h2
                      className="
                        text-[#0F172A]
                        font-semibold
                        text-[15px]
                      "
                    >
                      Shree Vimal Vidya Mandir
                    </h2>

                    <p
                      className="
                        text-[#64748B]
                        text-xs
                        mt-0.5
                      "
                    >
                      English Medium School
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-[#F8FAFC]
                    flex
                    items-center
                    justify-center
                    text-[#0F172A]
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* LINKS */}
              <div className="p-4">
                <div className="space-y-2">
                  {navLinks.map(
                    (link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.05,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        onClick={() => {
                          setActiveLink(
                            link.name
                          );

                          setMenuOpen(
                            false
                          );
                        }}
                        className={`
                          flex
                          items-center
                          justify-between
                          rounded-2xl
                          px-4
                          py-4
                          transition-all
                          duration-300

                          ${
                            activeLink ===
                            link.name
                              ? `
                                bg-[#EFF6FF]
                                text-[#1D4ED8]
                              `
                              : `
                                text-[#334155]
                                hover:bg-[#F8FAFC]
                              `
                          }
                        `}
                      >
                        <span
                          className="
                            font-medium
                            text-[15px]
                          "
                        >
                          {link.name}
                        </span>

                        <ChevronRight
                          size={18}
                        />
                      </motion.a>
                    )
                  )}
                </div>

                {/* CTA */}
                <motion.a
                  href="#admission"
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    mt-5
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-[#1D4ED8]
                    py-4
                    text-white
                    font-semibold
                    shadow-[0_10px_25px_rgba(29,78,216,0.18)]
                  "
                >
                  Apply Now

                  <ChevronRight
                    size={18}
                  />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}