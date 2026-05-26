import {
  motion,
} from "framer-motion";

import {
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

const trustPoints = [
  "KG to Std 5",
  "Activity Based Learning",
  "Safe Learning Environment",
  "Holistic Development",
];

const highlights = [
  {
    icon: BookOpen,
    title: "Joyful Learning",
    text: "Encouraging curiosity through meaningful classroom experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    text: "A caring and disciplined atmosphere where every child feels secure.",
  },
  {
    icon: Sparkles,
    title: "Creative Growth",
    text: "Helping students develop confidence, creativity, and communication.",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#FAF7F2]
        pt-32
        pb-20
        sm:pb-24
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          overflow-hidden
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-[-120px]
            left-[-80px]
            w-[320px]
            h-[320px]
            bg-[#DBEAFE]
            blur-3xl
            rounded-full
            opacity-60
          "
        />

        <div
          className="
            absolute
            bottom-[-100px]
            right-[-60px]
            w-[280px]
            h-[280px]
            bg-[#FEF3C7]
            blur-3xl
            rounded-full
            opacity-60
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[1fr_0.9fr]
            gap-14
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* TOP BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#E7E2D8]
                bg-white/90
                px-4
                py-2
                shadow-sm
              "
            >
              <HeartHandshake
                size={15}
                className="text-[#C59D5F]"
              />

              <span
                className="
                  text-[11px]
                  sm:text-xs
                  tracking-[0.18em]
                  uppercase
                  text-[#64748B]
                  font-medium
                "
              >
                Trusted English Medium School
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="
                mt-7
                text-[2.8rem]
                leading-[1.05]
                sm:text-6xl
                lg:text-[5rem]
                font-semibold
                tracking-tight
                text-[#0F172A]
                max-w-3xl
              "
            >
              Helping Young Minds
              Grow With Confidence,
              Care & Creativity
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                text-[17px]
                sm:text-[19px]
                leading-8
                text-[#475569]
                max-w-2xl
              "
            >
              At Shree Vimal Vidya Mandir,
              we create a joyful and caring
              learning environment where
              children develop strong values,
              confidence, creativity, and a
              lifelong love for learning.
            </p>

            {/* TRUST PILLS */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {trustPoints.map(
                (item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay:
                        index * 0.08,
                    }}
                    className="
                      px-4
                      py-3
                      rounded-full
                      bg-white
                      border
                      border-[#ECE7DE]
                      text-[#334155]
                      text-sm
                      font-medium
                      shadow-sm
                    "
                  >
                    {item}
                  </motion.div>
                )
              )}
            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >
              {/* PRIMARY */}
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
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#1D4ED8]
                  px-7
                  py-4
                  text-white
                  font-semibold
                  shadow-[0_10px_25px_rgba(29,78,216,0.18)]
                "
              >
                Apply For Admission

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.a>

              {/* SECONDARY */}
              <motion.a
                href="#about"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E5E7EB]
                  bg-white
                  px-7
                  py-4
                  text-[#0F172A]
                  font-semibold
                  shadow-sm
                  hover:bg-[#F8FAFC]
                  transition-colors
                "
              >
                Explore School
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT VISUAL STORYTELLING */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >
            {/* MAIN IMAGE */}
            <div
              className="
                relative
                rounded-[34px]
                overflow-hidden
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >
              <img
                src="/images/students-learning.jpg"
                alt="Students Learning"
                className="
                  w-full
                  h-[500px]
                  object-cover
                "
              />

              {/* SOFT OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0F172A]/40
                  via-transparent
                  to-transparent
                "
              />

              {/* FLOATING QUOTE */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="
                  absolute
                  left-5
                  bottom-5
                  max-w-[280px]
                  rounded-3xl
                  bg-white/92
                  backdrop-blur-sm
                  p-5
                  shadow-xl
                "
              >
                <p
                  className="
                    text-sm
                    leading-6
                    text-[#334155]
                    font-medium
                  "
                >
                  “Every child deserves a
                  learning environment that
                  inspires confidence,
                  curiosity, and happiness.”
                </p>
              </motion.div>
            </div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="
                hidden
                lg:block
                absolute
                -left-14
                top-10
                w-[260px]
                rounded-[28px]
                bg-white
                border
                border-[#ECE7DE]
                p-5
                shadow-[0_20px_50px_rgba(15,23,42,0.06)]
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#94A3B8]
                  font-semibold
                "
              >
                Our Philosophy
              </p>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-semibold
                  leading-snug
                  text-[#0F172A]
                "
              >
                Learning Beyond Books
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#64748B]
                "
              >
                We nurture academic growth,
                creativity, discipline, and
                strong values through
                meaningful educational
                experiences.
              </p>
            </motion.div>

            {/* BOTTOM CARDS */}
            <div
              className="
                grid
                sm:grid-cols-3
                gap-4
                mt-5
              "
            >
              {highlights.map(
                (
                  item,
                  index
                ) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      rounded-[24px]
                      bg-white
                      border
                      border-[#ECE7DE]
                      p-5
                      shadow-sm
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-[#EFF6FF]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <item.icon
                        size={20}
                        className="text-[#2563EB]"
                      />
                    </div>

                    <h4
                      className="
                        mt-4
                        text-lg
                        font-semibold
                        text-[#0F172A]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#64748B]
                      "
                    >
                      {item.text}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}