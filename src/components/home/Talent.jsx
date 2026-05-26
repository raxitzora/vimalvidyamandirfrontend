import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Creative Exploration",
  },
  {
    icon: ShieldCheck,
    title: "Safe Learning Environment",
  },
  {
    icon: HeartHandshake,
    title:
      "Values & Confidence Building",
  },
];

const galleryImages = [
  "/images/talent-2.jpg",
  "/images/talent-3.jpg",
  "/images/talent-4.jpg",
];

export default function Talent() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#F8F6F1]
        to-[#F1F5F9]
        pt-20
        pb-24
        sm:pt-24
        sm:pb-32
      "
    >
      {/* BACKGROUND GLOWS */}
      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-[-100px]
            right-[-100px]
            w-[320px]
            h-[320px]
            rounded-full
            bg-[#DBEAFE]
            blur-3xl
            opacity-40
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            left-[-100px]
            w-[280px]
            h-[280px]
            rounded-full
            bg-[#FEF3C7]
            blur-3xl
            opacity-40
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* TOP SECTION */}
        <div
          className="
            grid
            items-center
            gap-12
            xl:grid-cols-[0.95fr_1fr]

            lg:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#E7E2D8]
                bg-white/80
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#C59D5F]
                "
              />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.2em]
                  text-[#64748B]
                  font-medium
                "
              >
                Beyond Academics
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-7
                max-w-2xl
                text-[2.8rem]
                leading-[0.98]
                tracking-tight
                text-[#0F172A]
                font-semibold

                sm:text-[4rem]

                lg:text-[5rem]
              "
            >
              Every Child
              Deserves To Feel
              Seen, Inspired
              & Encouraged
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                max-w-lg
                text-[17px]
                leading-8
                text-[#475569]

                sm:text-[18px]
              "
            >
              We believe meaningful
              education happens when
              children are given
              opportunities to learn,
              explore, participate,
              create, pray, express,
              and grow with confidence
              in a nurturing
              environment.
            </p>

            {/* VALUES */}
            <div className="mt-10 space-y-5">
              {values.map(
                (item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        index * 0.08,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        w-11
                        h-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#ECE7DE]
                        bg-white/90
                      "
                    >
                      <item.icon
                        size={18}
                        className="
                          text-[#2563EB]
                        "
                      />
                    </div>

                    <p
                      className="
                        text-[15px]
                        font-medium
                        text-[#334155]

                        sm:text-[16px]
                      "
                    >
                      {item.title}
                    </p>
                  </motion.div>
                )
              )}
            </div>

            {/* BUTTON */}
            <motion.a
              href="#gallery"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mt-10
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#2563EB]
                px-7
                py-4
                text-white
                font-semibold
                transition-all
                duration-300
                hover:bg-[#1D4ED8]
                shadow-[0_12px_30px_rgba(37,99,235,0.18)]

                sm:w-auto
              "
            >
              Explore Student Life

              <ArrowRight
                size={18}
              />
            </motion.a>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
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
                overflow-hidden
                rounded-[36px]
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >
              <img
                src="/images/talent-main.jpg"
                alt=""
                className="
                  w-full
                  h-[420px]
                  object-cover

                  sm:h-[520px]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0F172A]/25
                  via-transparent
                  to-transparent
                "
              />

              {/* QUOTE CARD */}
              <div
                className="
                  absolute
                  left-5
                  right-5
                  bottom-5
                  rounded-3xl
                  bg-white/80
                  p-5
                  backdrop-blur-md
                  shadow-xl

                  sm:left-6
                  sm:right-6
                  sm:bottom-6
                "
              >
                <p
                  className="
                    text-sm
                    leading-7
                    text-[#334155]
                    font-medium

                    sm:text-[15px]
                  "
                >
                  “Education is not only
                  about academic
                  excellence, but also
                  about nurturing
                  confidence, kindness,
                  values, and joyful
                  learning experiences.”
                </p>
              </div>
            </div>

            {/* FLOATING IMAGE */}
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
                -left-10
                bottom-10
                w-[180px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/80
                shadow-[0_20px_50px_rgba(15,23,42,0.08)]
              "
            >
              <img
                src="/images/talent-side.jpg"
                alt=""
                className="
                  w-full
                  h-[240px]
                  object-cover
                "
              />
            </motion.div>
          </motion.div>
        </div>

        {/* EDITORIAL FLOW */}
        <div className="mt-24 sm:mt-32">
          {/* TOP ROW */}
          <div
            className="
              grid
              items-end
              gap-6

              lg:grid-cols-[1.1fr_0.9fr]
            "
          >
            {/* BIG IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
              "
            >
              <img
                src="/images/talent-1.jpg"
                alt=""
                className="
                  w-full
                  h-[460px]
                  object-cover
                  will-change-transform
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:scale-105

                  sm:h-[520px]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0F172A]/25
                  via-transparent
                  to-transparent
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  max-w-md
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-white/75
                  "
                >
                  Activity Based Learning
                </p>

                <h3
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                    leading-tight
                    text-white

                    sm:text-4xl
                  "
                >
                  Learning Through
                  Participation,
                  Curiosity & Joy
                </h3>
              </div>
            </motion.div>

            {/* TEXT BLOCK */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="
                px-1

                lg:px-8
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#C59D5F]
                "
              >
                Child Development
              </p>

              <h3
                className="
                  mt-5
                  text-4xl
                  font-semibold
                  leading-tight
                  text-[#0F172A]

                  lg:text-5xl
                "
              >
                Helping Students
                Build Confidence
                Through Experience
              </h3>

              <p
                className="
                  mt-6
                  text-[17px]
                  leading-8
                  text-[#64748B]
                "
              >
                Through celebrations,
                teamwork, activities,
                values, creativity,
                classroom learning, and
                student participation,
                children gradually grow
                into confident and
                compassionate
                individuals.
              </p>
            </motion.div>
          </div>

          {/* IMAGE COLLAGE */}
          <div
            className="
              mt-6
              grid
              gap-4

              sm:grid-cols-2
              sm:gap-6

              lg:grid-cols-3
            "
          >
            {galleryImages.map(
              (
                image,
                index
              ) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay:
                      index * 0.08,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-[32px]
                  "
                >
                  <img
                    src={image}
                    alt=""
                    className={`
                      w-full
                      object-cover
                      will-change-transform
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      group-hover:scale-105

                      ${
                        index === 1
                          ? "h-[420px]"
                          : "h-[340px]"
                      }
                    `}
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}