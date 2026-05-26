import {
  motion,
} from "framer-motion";

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
    title: "Values & Confidence Building",
  },
];

export default function Talent() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FCF9F4]
        py-24
        sm:py-32
      "
    >
      {/* BACKGROUND LIGHT */}
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
            top-[-100px]
            right-[-100px]
            w-[320px]
            h-[320px]
            rounded-full
            bg-[#DBEAFE]
            blur-3xl
            opacity-50
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
            opacity-50
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
        {/* TOP SECTION */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[0.95fr_1fr]
            gap-16
            items-center
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
                bg-white
                px-4
                py-2
                shadow-sm
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
                text-[2.7rem]
                leading-[1.08]
                sm:text-6xl
                lg:text-[4.7rem]
                font-semibold
                tracking-tight
                text-[#0F172A]
                max-w-2xl
              "
            >
              Every Child
              Deserves To Feel
              Seen, Inspired
              & Encouraged
            </h2>

            {/* TEXT */}
            <p
              className="
                mt-7
                text-[17px]
                sm:text-[19px]
                leading-8
                text-[#475569]
                max-w-xl
              "
            >
              We believe meaningful education
              happens when children are given
              opportunities to learn, explore,
              participate, create, pray, express,
              and grow with confidence in a
              nurturing environment.
            </p>

            {/* VALUES */}
            <div className="mt-10 space-y-5">
              {values.map(
                (
                  item,
                  index
                ) => (
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
                        index * 0.1,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-white
                        border
                        border-[#ECE7DE]
                        flex
                        items-center
                        justify-center
                        shadow-sm
                      "
                    >
                      <item.icon
                        size={20}
                        className="text-[#2563EB]"
                      />
                    </div>

                    <p
                      className="
                        text-[#334155]
                        font-medium
                        text-[16px]
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
                items-center
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
              Explore Student Life

              <ArrowRight
                size={18}
              />
            </motion.a>
          </motion.div>

          {/* RIGHT STORY VISUAL */}
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
                  h-[560px]
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0F172A]/45
                  via-transparent
                  to-transparent
                "
              />

              {/* QUOTE */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  rounded-[28px]
                  bg-white/92
                  backdrop-blur-sm
                  p-5
                  shadow-xl
                "
              >
                <p
                  className="
                    text-sm
                    sm:text-[15px]
                    leading-7
                    text-[#334155]
                    font-medium
                  "
                >
                  “Education is not only about
                  academic excellence, but also
                  about nurturing confidence,
                  kindness, values, and joyful
                  learning experiences.”
                </p>
              </div>
            </div>

            {/* FLOATING SMALL IMAGE */}
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
                -left-16
                bottom-12
                w-[220px]
                overflow-hidden
                rounded-[30px]
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
                  h-[280px]
                  object-cover
                "
              />
            </motion.div>
          </motion.div>
        </div>

        {/* EDITORIAL IMAGE FLOW */}
        <div className="mt-24 sm:mt-32">
          {/* TOP ROW */}
          <div
            className="
              grid
              lg:grid-cols-[1.1fr_0.9fr]
              gap-6
              items-end
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
                relative
                overflow-hidden
                rounded-[36px]
                group
              "
            >
              <img
                src="/images/talent-1.jpg"
                alt=""
                className="
                  w-full
                  h-[500px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

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

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  max-w-md
                "
              >
                <p
                  className="
                    text-white/75
                    uppercase
                    tracking-[0.2em]
                    text-xs
                  "
                >
                  Activity Based Learning
                </p>

                <h3
                  className="
                    mt-3
                    text-white
                    text-3xl
                    sm:text-4xl
                    font-semibold
                    leading-tight
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
                px-2
                lg:px-8
              "
            >
              <p
                className="
                  text-[#C59D5F]
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  font-semibold
                "
              >
                Child Development
              </p>

              <h3
                className="
                  mt-5
                  text-4xl
                  sm:text-5xl
                  font-semibold
                  leading-tight
                  text-[#0F172A]
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
                compassionate individuals.
              </p>
            </motion.div>
          </div>

          {/* BOTTOM IMAGE COLLAGE */}
          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              mt-6
            "
          >
            {[
              "/images/talent-2.jpg",
              "/images/talent-3.jpg",
              "/images/talent-4.jpg",
            ].map(
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
                    overflow-hidden
                    rounded-[32px]
                    group
                  "
                >
                  <img
                    src={image}
                    alt=""
                    className="
                      w-full
                      h-[360px]
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
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