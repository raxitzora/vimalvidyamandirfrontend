import {
  useEffect,
  useRef,
  useState,
} from "react";

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
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [activeLink, setActiveLink] =
    useState("Home");

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [scrollDirection, setScrollDirection] =
    useState("up");

  const lastScrollY = useRef(0);

  /* SCROLL DETECTION */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.scrollY;

      setIsScrolled(currentScrollY > 40);

      if (
        currentScrollY >
        lastScrollY.current
      ) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

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
      <motion.header
        animate={{
          y:
            scrollDirection === "down" &&
            isScrolled
              ? -10
              : 0,

          scale:
            scrollDirection === "down" &&
            isScrolled
              ? 0.985
              : 1,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          top-0
          left-0
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
          {/* WRAPPER */}
          <motion.div
            animate={{
              borderRadius:
                isScrolled
                  ? "30px"
                  : "0px",

              width:
                isScrolled
                  ? "96%"
                  : "100%",
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              mx-auto

              transition-all
              duration-500

              ${
                isScrolled
                  ? `
                    bg-[#0F172A]/68
                    border
                    border-white/10
                    backdrop-blur-2xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.28)]
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
                  duration: 0.45,
                }}
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                {/* LOGO */}
                <motion.a
                  href="#home"
                  whileHover={{
                    y: -1,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  {/* ICON */}
                  <motion.div
                    animate={{
                      scale:
                        isScrolled
                          ? 0.92
                          : 1,
                    }}
                    className="
                      relative

                      flex
                      h-12
                      w-12

                      items-center
                      justify-center

                      overflow-hidden

                      rounded-2xl

                      bg-[#2563EB]

                      shadow-[0_10px_30px_rgba(37,99,235,0.35)]
                    "
                  >
                    {/* GLOW */}
                    <motion.div
                      animate={{
                        opacity:
                          isScrolled
                            ? 0.5
                            : 0.85,
                      }}
                      className="
                        absolute
                        inset-0

                        bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_70%)]
                      "
                    />

                    <span
                      className="
                        relative
                        z-10

                        text-lg
                        font-bold

                        text-white
                      "
                    >
                      SV
                    </span>
                  </motion.div>

                  {/* TEXT */}
                  <div>
                    <motion.h1
                      animate={{
                        fontSize:
                          isScrolled
                            ? "15px"
                            : "17px",
                      }}
                      className="
                        font-semibold
                        tracking-tight

                        text-white
                      "
                    >
                      Shree Vimal Vidya Mandir
                    </motion.h1>

                    <p
                      className="
                        mt-0.5

                        text-[11px]
                        uppercase
                        tracking-[0.14em]

                        text-white/60
                      "
                    >
                      English Medium School
                    </p>
                  </div>
                </motion.a>

                {/* DESKTOP NAV */}
                <nav
                  className="
                    hidden

                    lg:flex
                    lg:items-center
                  "
                >
                  <motion.div
                    animate={{
                      gap:
                        isScrolled
                          ? "24px"
                          : "40px",
                    }}
                    className="
                      flex
                      items-center
                    "
                  >
                    {navLinks.map(
                      (item) => (
                        <motion.a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          onClick={() =>
                            setActiveLink(
                              item
                            )
                          }
                          whileTap={{
                            scale: 0.92,
                          }}
                          className="
                            group
                            relative

                            overflow-hidden

                            rounded-full
                          "
                        >
                          {/* LIQUID SURFACE */}
                          <motion.div
                            initial={{
                              opacity: 0,
                            }}
                            whileHover={{
                              opacity: 1,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="
                              absolute
                              inset-0

                              overflow-hidden

                              rounded-full
                            "
                          >
                            {/* MAIN LIQUID FLOW */}
                            <motion.div
                              initial={{
                                x: "-120%",
                                rotate: -12,
                              }}
                              whileHover={{
                                x: "140%",
                              }}
                              transition={{
                                duration: 1,
                                ease: [
                                  0.22,
                                  1,
                                  0.36,
                                  1,
                                ],
                              }}
                              className="
                                absolute
                                inset-y-[-20%]

                                w-[45%]

                                bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.45),transparent)]

                                blur-[14px]
                              "
                            />

                            {/* LIQUID REFRACTION */}
                            <motion.div
                              initial={{
                                scale: 0.7,
                                opacity: 0,
                              }}
                              whileHover={{
                                scale: 1.5,
                                opacity: 1,
                              }}
                              transition={{
                                duration: 0.6,
                              }}
                              className="
                                absolute
                                left-1/2
                                top-1/2

                                h-10
                                w-10

                                -translate-x-1/2
                                -translate-y-1/2

                                rounded-full

                                bg-white/10

                                blur-xl
                              "
                            />

                            {/* PRESSURE EFFECT */}
                            <motion.div
                              whileTap={{
                                scale: 1.8,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.5,
                              }}
                              className="
                                absolute
                                inset-0

                                rounded-full

                                bg-white/10
                              "
                            />
                          </motion.div>

                          {/* ACTIVE INDICATOR */}
                          <motion.div
                            animate={{
                              opacity:
                                activeLink ===
                                item
                                  ? 1
                                  : 0,

                              scale:
                                activeLink ===
                                item
                                  ? 1
                                  : 0.8,
                            }}
                            transition={{
                              duration: 0.35,
                            }}
                            className="
                              absolute
                              inset-0

                              rounded-full

                              bg-white/[0.05]
                            "
                          />

                          {/* TEXT */}
                          <motion.span
                            whileHover={{
                              y: -1,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className={`
                              relative
                              z-10

                              block

                              px-5
                              py-2.5

                              text-[15px]
                              font-medium

                              transition-all
                              duration-300

                              ${
                                activeLink ===
                                item
                                  ? "text-white"
                                  : "text-white/72 group-hover:text-white"
                              }
                            `}
                          >
                            {item}
                          </motion.span>
                        </motion.a>
                      )
                    )}
                  </motion.div>
                </nav>

                {/* CTA */}
                <div
                  className="
                    hidden
                    lg:flex
                  "
                >
                  <motion.a
                    href="#admission"
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      group
                      relative

                      overflow-hidden

                      rounded-full

                      bg-[#2563EB]

                      px-7
                      py-3.5

                      text-sm
                      font-semibold

                      text-white

                      shadow-[0_15px_40px_rgba(37,99,235,0.35)]
                    "
                  >
                    {/* LIQUID FLOW */}
                    <motion.div
                      initial={{
                        x: "-120%",
                        rotate: -12,
                      }}
                      whileHover={{
                        x: "140%",
                      }}
                      transition={{
                        duration: 1,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="
                        absolute
                        inset-y-[-40%]

                        w-[35%]

                        bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.55),transparent)]

                        blur-[16px]
                      "
                    />

                    {/* CLICK RIPPLE */}
                    <motion.div
                      whileTap={{
                        scale: 2.4,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.55,
                      }}
                      className="
                        absolute
                        left-1/2
                        top-1/2

                        h-16
                        w-16

                        -translate-x-1/2
                        -translate-y-1/2

                        rounded-full

                        bg-white/20

                        blur-xl
                      "
                    />

                    <span
                      className="
                        relative
                        z-10

                        flex
                        items-center
                        gap-3
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
                    </span>
                  </motion.a>
                </div>

                {/* MOBILE BUTTON */}
                <motion.button
                  whileTap={{
                    scale: 0.92,
                  }}
                  whileHover={{
                    rotate: 3,
                  }}
                  onClick={() =>
                    setMenuOpen(true)
                  }
                  className="
                    relative

                    flex
                    h-11
                    w-11

                    items-center
                    justify-center

                    overflow-hidden

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.05]

                    text-white

                    backdrop-blur-xl

                    lg:hidden
                  "
                >
                  <motion.div
                    animate={{
                      rotate:
                        menuOpen
                          ? 180
                          : 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <Menu size={22} />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.header>

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

                bg-[#020617]/70

                backdrop-blur-md
              "
            />

            {/* MENU */}
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -40,
                scale: 0.96,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                top-3
                left-3
                right-3
                z-[70]

                overflow-hidden

                rounded-[32px]

                border
                border-white/10

                bg-[#0F172A]/94

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
                  px-5
                  py-8
                "
              >
                <div className="space-y-2">
                  {navLinks.map(
                    (
                      item,
                      index
                    ) => (
                      <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        initial={{
                          opacity: 0,
                          x: -30,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.05,
                        }}
                        onClick={() =>
                          setMenuOpen(false)
                        }
                        className="
                          group
                          flex
                          items-center
                          justify-between

                          rounded-2xl

                          border
                          border-transparent

                          bg-white/[0.03]

                          px-5
                          py-4

                          text-white/80

                          transition-all
                          duration-300

                          hover:border-white/10
                          hover:bg-white/[0.06]
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
                          className="
                            transition-transform
                            duration-300

                            group-hover:translate-x-1
                          "
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
                    mt-6

                    flex
                    items-center
                    justify-center
                    gap-3

                    rounded-2xl

                    bg-[#2563EB]

                    py-4

                    font-semibold

                    text-white

                    shadow-[0_15px_40px_rgba(37,99,235,0.35)]
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