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

  const [scrollDirection, setScrollDirection] =
    useState("up");

  const lastScrollY = useRef(0);

  const location = useLocation();

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
                <Link
                  to="/"
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      y: -2,
                    }}
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
                </Link>

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
                        <motion.div
                          key={item.name}
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
                          {/* ACTIVE BG */}
                          <motion.div
                            animate={{
                              opacity:
                                location.pathname ===
                                item.path
                                  ? 1
                                  : 0,

                              scale:
                                location.pathname ===
                                item.path
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
                              bg-white/[0.06]
                            "
                          />

                          <Link
                            to={item.path}
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
                                location.pathname ===
                                item.path
                                  ? "text-white"
                                  : "text-white/72 hover:text-white"
                              }
                            `}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
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
                  <Link to="/admission">
                    <motion.div
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
                    </motion.div>
                  </Link>
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
                  <Menu size={22} />
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
                      <motion.div
                        key={item.name}
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
                      >
                        <Link
                          to={item.path}
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
                            {item.name}
                          </span>

                          <ArrowRight
                            size={18}
                            className="
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
                          />
                        </Link>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}