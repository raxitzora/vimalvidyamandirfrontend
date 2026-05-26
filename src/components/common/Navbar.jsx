import { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  "Home",
  "About",
  "Staff",
  "Gallery",
  "Admission",
  "Contact",
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
      setIsScrolled(window.scrollY > 40);
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
      {/* NAVBAR */}
      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
        "
      >
        <div
          className={`
            transition-all
            duration-500

            ${
              isScrolled
                ? `
                  bg-[#0F172A]/75
                  backdrop-blur-2xl
                  border-b
                  border-white/10
                `
                : `
                  bg-transparent
                `
            }
          `}
        >
          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              lg:px-12
            "
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
                    ? "py-4"
                    : "py-6"
                }
              `}
            >
              {/* LOGO */}
              <a
                href="#home"
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-[#2563EB]
                    flex
                    items-center
                    justify-center
                    shadow-[0_10px_30px_rgba(37,99,235,0.35)]
                  "
                >
                  <span
                    className="
                      text-white
                      font-bold
                      text-lg
                    "
                  >
                    SV
                  </span>
                </div>

                {/* TEXT */}
                <div>
                  <h1
                    className="
                      text-white
                      font-semibold
                      text-[15px]
                      sm:text-[17px]
                      tracking-tight
                    "
                  >
                    Shree Vimal Vidya Mandir
                  </h1>

                  <p
                    className="
                      text-white/60
                      text-[11px]
                      sm:text-xs
                      mt-0.5
                      tracking-wide
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
                  gap-10
                "
              >
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() =>
                      setActiveLink(item)
                    }
                    className="
                      group
                      relative
                      text-[15px]
                      font-medium
                      text-white/75
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <span
                      className="
                        relative
                        z-10
                      "
                    >
                      {item}
                    </span>

                    {/* UNDERLINE */}
                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-2
                        h-[2px]
                        bg-[#D6B06B]
                        transition-all
                        duration-300

                        ${
                          activeLink === item
                            ? "w-full"
                            : "w-0 group-hover:w-full"
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
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#2563EB]
                    px-7
                    py-3.5
                    text-white
                    text-sm
                    font-semibold
                    shadow-[0_12px_35px_rgba(37,99,235,0.35)]
                  "
                >
                  Apply Now

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </motion.a>
              </div>

              {/* MOBILE BUTTON */}
              <motion.button
                whileTap={{
                  scale: 0.94,
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
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-white
                "
              >
                <Menu size={22} />
              </motion.button>
            </div>
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
                bg-[#020617]/70
                backdrop-blur-md
                z-[60]
              "
            />

            {/* MENU PANEL */}
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
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                top-0
                left-0
                w-full
                z-[70]
                bg-[#0F172A]/95
                backdrop-blur-2xl
                border-b
                border-white/10
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
                  border-white/10
                "
              >
                <div>
                  <h2
                    className="
                      text-white
                      font-semibold
                    "
                  >
                    Shree Vimal Vidya Mandir
                  </h2>

                  <p
                    className="
                      text-white/50
                      text-xs
                      mt-1
                    "
                  >
                    English Medium School
                  </p>
                </div>

                <button
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* LINKS */}
              <div
                className="
                  px-5
                  py-8
                  space-y-2
                "
              >
                {navLinks.map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.06,
                      }}
                      onClick={() =>
                        setMenuOpen(false)
                      }
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        px-5
                        py-4
                        text-white/80
                        hover:bg-white/5
                        transition-all
                        duration-300
                      "
                    >
                      <span
                        className="
                          text-lg
                          font-medium
                        "
                      >
                        {item}
                      </span>

                      <ArrowRight
                        size={18}
                      />
                    </motion.a>
                  )
                )}

                {/* CTA */}
                <motion.a
                  href="#admission"
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-[#2563EB]
                    py-4
                    text-white
                    font-semibold
                    shadow-[0_12px_35px_rgba(37,99,235,0.35)]
                  "
                >
                  Apply For Admission

                  <ArrowRight
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