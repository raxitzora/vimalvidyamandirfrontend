import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

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
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Staff",
    path: "/staff",
  },

  {
    name: "Gallery",
    path: "/gallery",
  },

  {
    name: "Admission",
    path: "/admission",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const lastScrollY = useRef(0);

  const location = useLocation();

  /* SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.scrollY;

      setIsScrolled(
        currentScrollY > 40
      );

      lastScrollY.current =
        currentScrollY;
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

  /* LOCK BODY */
  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
        "
      >
        <div
          className="
            px-3
            pt-3
            sm:px-5
          "
        >
          {/* CONTAINER */}
          <motion.div
            animate={{
              width: isScrolled
                ? "88%"
                : "100%",

              borderRadius:
                isScrolled
                  ? "28px"
                  : "0px",

              y: isScrolled
                ? 5
                : 0,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              mx-auto
              overflow-hidden

              ${
                isScrolled
                  ? `
                    border
                    border-white/10
                    bg-[#0F172A]/88
                    shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                    backdrop-blur-2xl
                  `
                  : `
                    bg-transparent
                  `
              }
            `}
          >
            <div
              className="
                mx-auto
                max-w-7xl
                px-5
                sm:px-8
                lg:px-10
              "
            >
              {/* INNER */}
              <motion.div
                animate={{
                  paddingTop:
                    isScrolled
                      ? "14px"
                      : "22px",

                  paddingBottom:
                    isScrolled
                      ? "14px"
                      : "22px",
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                {/* LOGO */}
                <Link
                  to="/"
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                  "
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#2563EB]
                      text-white
                      shadow-[0_10px_30px_rgba(37,99,235,0.35)]
                    "
                  >
                    <span
                      className="
                        text-base
                        font-bold
                      "
                    >
                      SV
                    </span>
                  </motion.div>

                  {/* TEXT */}
                  <div className="min-w-0">
                    <h1
                      className="
                        truncate
                        text-[15px]
                        font-semibold
                        tracking-tight
                        text-white
                        sm:text-[16px]
                      "
                    >
                      Shree Vimal Vidya Mandir
                    </h1>

                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[10px]
                        uppercase
                        tracking-[0.14em]
                        text-white/55
                        sm:text-[11px]
                      "
                    >
                      English Medium School
                    </p>
                  </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav
                  className="
                    hidden
                    lg:flex
                    lg:items-center
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-2
                      backdrop-blur-xl
                    "
                  >
                    {navLinks.map(
                      (item) => {
                        const isActive =
                          location.pathname ===
                          item.path;

                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="relative"
                          >
                            <motion.div
                              whileHover={{
                                y: -2,
                              }}
                              whileTap={{
                                scale: 0.96,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                              className={`
                                group
                                relative
                                overflow-hidden
                                rounded-full
                                px-5
                                py-3
                                text-[15px]
                                font-medium
                                transition-all
                                duration-300

                                ${
                                  isActive
                                    ? `
                                      text-white
                                    `
                                    : `
                                      text-white/70
                                      hover:text-white
                                    `
                                }
                              `}
                            >
                              {/* ACTIVE */}
                              {isActive && (
                                <motion.div
                                  layoutId="nav-pill"
                                  transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 24,
                                  }}
                                  className="
                                    absolute
                                    inset-0
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/[0.08]
                                  "
                                />
                              )}

                              {/* LIGHT */}
                              <div
                                className="
                                  absolute
                                  inset-0
                                  opacity-0
                                  transition-opacity
                                  duration-300
                                  group-hover:opacity-100
                                "
                              >
                                <div
                                  className="
                                    absolute
                                    inset-0
                                    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_70%)]
                                  "
                                />
                              </div>

                              {/* TEXT */}
                              <span
                                className="
                                  relative
                                  z-10
                                "
                              >
                                {item.name}
                              </span>

                              {/* UNDERLINE */}
                              <motion.div
                                initial={{
                                  scaleX: 0,
                                }}
                                whileHover={{
                                  scaleX: 1,
                                }}
                                transition={{
                                  duration: 0.3,
                                }}
                                className="
                                  absolute
                                  bottom-1.5
                                  left-4
                                  right-4
                                  h-[1px]
                                  origin-left
                                  bg-gradient-to-r
                                  from-[#E8D4AE]
                                  to-transparent
                                "
                              />
                            </motion.div>
                          </Link>
                        );
                      }
                    )}
                  </div>
                </nav>

                {/* RIGHT */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  {/* CTA */}
                  <Link
                    to="/admission"
                    className="
                      hidden
                      lg:block
                    "
                  >
                    <motion.div
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#2563EB]
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-[0_12px_35px_rgba(37,99,235,0.35)]
                      "
                    >
                      Apply Now

                      <ArrowRight
                        size={16}
                      />
                    </motion.div>
                  </Link>

                  {/* MOBILE BTN */}
                  <motion.button
                    whileTap={{
                      scale: 0.92,
                    }}
                    onClick={() =>
                      setMenuOpen(true)
                    }
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      text-white
                      backdrop-blur-xl
                      lg:hidden
                    "
                  >
                    <Menu size={21} />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                fixed
                inset-0
                z-[60]
                bg-[#020617]/80
                backdrop-blur-md
              "
            />

            {/* MENU */}
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
                left-3
                right-3
                top-3
                z-[70]
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-[#0F172A]/95
                shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                backdrop-blur-2xl
              "
            >
              {/* TOP */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-5
                  py-5
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
                      mt-1
                      text-xs
                      uppercase
                      tracking-[0.14em]
                      text-white/50
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
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    text-white
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* LINKS */}
              <div
                className="
                  space-y-2
                  px-5
                  py-6
                "
              >
                {navLinks.map(
                  (
                    item,
                    index
                  ) => {
                    const isActive =
                      location.pathname ===
                      item.path;

                    return (
                      <motion.div
                        key={item.name}
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
                            index * 0.05,
                        }}
                      >
                        <Link
                          to={item.path}
                          onClick={() =>
                            setMenuOpen(false)
                          }
                          className={`
                            group
                            relative
                            flex
                            items-center
                            justify-between
                            overflow-hidden
                            rounded-2xl
                            px-5
                            py-4
                            transition-all
                            duration-300

                            ${
                              isActive
                                ? `
                                  border
                                  border-white/10
                                  bg-white/[0.08]
                                  text-white
                                `
                                : `
                                  bg-white/[0.03]
                                  text-white/75
                                  hover:bg-white/[0.06]
                                `
                            }
                          `}
                        >
                          {/* LIGHT */}
                          <div
                            className="
                              absolute
                              inset-0
                              opacity-0
                              transition-opacity
                              duration-300
                              group-hover:opacity-100
                            "
                          >
                            <div
                              className="
                                absolute
                                inset-0
                                bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_60%)]
                              "
                            />
                          </div>

                          <span
                            className="
                              relative
                              z-10
                              text-lg
                              font-medium
                            "
                          >
                            {item.name}
                          </span>

                          <ArrowRight
                            size={18}
                            className="
                              relative
                              z-10
                            "
                          />
                        </Link>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}