import { motion } from "framer-motion";

import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

/* CONTENT */

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
  {
    src: "/images/talent-2.jpg",
    height: "h-[340px]",
  },

  {
    src: "/images/talent-3.jpg",
    height: "h-[420px]",
  },

  {
    src: "/images/talent-4.jpg",
    height: "h-[340px]",
  },
];

/* REUSABLE ANIMATION */

const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
  },
};

export default function Talent() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#1E293B]
        py-20

        sm:py-28
      "
    >
      {/* ATMOSPHERE */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(198,165,106,0.12),transparent_28%)]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_bottom,rgba(15,23,42,0.2),transparent,rgba(15,23,42,0.35))]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          -top-40
          right-[-120px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#C6A56A]/15
          blur-3xl
        "
      />

      {/* MAIN */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5

          sm:px-8
          lg:px-12
        "
      >
        {/* TOP */}
        <div
          className="
            grid
            items-center
            gap-14

            lg:gap-20
            xl:grid-cols-[0.95fr_1fr]
          "
        >
          {/* LEFT */}
          <motion.div
            {...fadeUp}
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
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#C6A56A]
                "
              />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-slate-300
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
                font-semibold
                leading-[0.96]
                tracking-tight
                text-[#F8FAFC]

                sm:text-[4rem]

                lg:text-[5rem]
              "
            >
              Every Child Deserves To Feel Inspired, Encouraged & Confident
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                max-w-lg
                text-[17px]
                leading-8
                text-slate-300

                sm:text-[18px]
              "
            >
              We believe meaningful education happens when children are encouraged to explore, participate, create, pray, collaborate, and grow with confidence in a caring environment.
            </p>

            {/* VALUES */}
            <div className="mt-10 space-y-5">
              {values.map(
                (
                  item,
                  index
                ) => {
                  const Icon =
                    item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      {...fadeUp}
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
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          backdrop-blur-md
                        "
                      >
                        <Icon
                          size={18}
                          className="
                            text-[#E2C48D]
                          "
                        />
                      </div>

                      <p
                        className="
                          text-[15px]
                          font-medium
                          text-slate-100

                          sm:text-[16px]
                        "
                      >
                        {item.title}
                      </p>
                    </motion.div>
                  );
                }
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
                bg-[#C6A56A]
                px-7
                py-4
                font-semibold
                text-[#0F172A]
                shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                transition-all
                duration-300

                hover:bg-[#E2C48D]

                sm:w-auto
              "
            >
              Explore Student Life

              <ArrowRight
                size={18}
              />
            </motion.a>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.9,
            }}
            className="relative"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                shadow-[0_30px_80px_rgba(0,0,0,0.28)]
              "
            >
              {/* MAIN IMAGE */}
              <img
                src="/images/talent-main.jpg"
                alt="Students learning"
                className="
                  h-[420px]
                  w-full
                  object-cover

                  sm:h-[540px]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0F172A]/70
                  via-[#0F172A]/15
                  to-transparent
                "
              />

              {/* QUOTE */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#0F172A]/45
                  p-5
                  backdrop-blur-xl

                  sm:bottom-6
                  sm:left-6
                  sm:right-6
                "
              >
                <p
                  className="
                    text-sm
                    font-medium
                    leading-7
                    text-slate-100

                    sm:text-[15px]
                  "
                >
                  “Education is not only about academic success, but about nurturing confidence, kindness, creativity, and joyful learning experiences.”
                </p>
              </div>
            </div>

            {/* SIDE IMAGE */}
            <div
              className="
                absolute
                -left-10
                bottom-10
                hidden
                w-[180px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]

                lg:block
              "
            >
              <img
                src="/images/talent-side.jpg"
                alt="Student activity"
                className="
                  h-[240px]
                  w-full
                  object-cover
                "
              />
            </div>
          </motion.div>
        </div>

        {/* STORY */}
        <div className="mt-24 sm:mt-32">
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
              {...fadeUp}
              transition={{
                duration: 0.9,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
              "
            >
              <img
                src="/images/talent-1.jpg"
                alt="Activity based learning"
                className="
                  h-[460px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:scale-105

                  sm:h-[540px]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0F172A]/70
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
                    text-white/70
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
                  Learning Through Participation, Curiosity & Joy
                </h3>
              </div>
            </motion.div>

            {/* TEXT PANEL */}
            <motion.div
              {...fadeUp}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#E2C48D]
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
                  text-white

                  lg:text-5xl
                "
              >
                Helping Students Build Confidence Through Experience
              </h3>

              <p
                className="
                  mt-6
                  text-[17px]
                  leading-8
                  text-slate-300
                "
              >
                Through celebrations, teamwork, activities, creativity, and student participation, children gradually grow into confident and compassionate individuals.
              </p>
            </motion.div>
          </div>

          {/* COLLAGE */}
          <div
            className="
              mt-6
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-4
              backdrop-blur-xl

              sm:p-6
            "
          >
            <div
              className="
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
                    {...fadeUp}
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
                      src={image.src}
                      alt=""
                      className={`
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        group-hover:scale-105

                        ${image.height}
                      `}
                    />
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}