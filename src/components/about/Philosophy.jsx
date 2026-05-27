import { motion } from "framer-motion";

import {
  Brain,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* CONTENT */

const philosophyCards = [
  {
    title:
      "Holistic Development",

    description:
      "We nurture emotional intelligence, creativity, leadership, and confidence alongside academic excellence to shape balanced individuals.",

    icon: Brain,

    image:
      "/images/philosophy/holistic.jpg",

    className:
      "lg:col-span-7 lg:row-span-2 min-h-[420px]",
  },

  {
    title:
      "Activity-Based Learning",

    description:
      "Children learn best through experiences, exploration, and active participation that spark curiosity and deeper understanding.",

    icon: Sparkles,

    image:
      "/images/philosophy/activity.jpg",

    className:
      "lg:col-span-5 min-h-[320px]",
  },

  {
    title:
      "Values & Discipline",

    description:
      "Strong moral foundations, discipline, respect, and compassion are deeply integrated into everyday learning experiences.",

    icon: ShieldCheck,

    image:
      "/images/philosophy/values.jpg",

    className:
      "lg:col-span-5 min-h-[320px]",
  },

  {
    title:
      "Future-Ready Education",

    description:
      "We prepare students for tomorrow with modern learning approaches, technology exposure, communication skills, and adaptability.",

    icon: Rocket,

    image:
      "/images/philosophy/future.jpg",

    className:
      "lg:col-span-7 min-h-[380px]",
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

export default function Philosophy() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#1D283A]
        py-24
        text-white

        md:py-32
      "
    >
      {/* ATMOSPHERE */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_35%)]
        "
      />

      <div
        className="
          absolute
          left-[-100px]
          top-[-150px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#C8B18B]/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-[-200px]
          right-[-100px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-white/5
          blur-[140px]
        "
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* MAIN */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6

          md:px-10

          lg:px-16
        "
      >
        {/* HEADER */}
        <motion.div
          {...fadeUp}
          transition={{
            duration: 0.9,
          }}
          className="max-w-3xl"
        >
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2
              backdrop-blur-md
            "
          >
            <div
              className="
                h-2
                w-2
                rounded-full
                bg-[#DCC8A5]
              "
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#E7D5B3]
              "
            >
              Educational Philosophy
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]

              md:text-6xl
            "
          >
            Shaping Children Beyond Academics
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-8
              text-white/65

              md:text-lg
            "
          >
            At Shree Vimal Vidya Mandir, education is designed to nurture character, curiosity, confidence, creativity, and compassion — helping every child grow into a capable and responsible individual.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-6

            lg:grid-cols-12
          "
        >
          {philosophyCards.map(
            (
              card,
              index
            ) => {
              const Icon =
                card.icon;

              return (
                <motion.div
                  key={card.title}
                  {...fadeUp}
                  transition={{
                    duration: 0.8,
                    delay:
                      index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[34px]
                    border
                    border-white/10
                    bg-white/[0.04]

                    ${card.className}
                  `}
                >
                  {/* IMAGE */}
                  <div className="absolute inset-0">
                    <img
                      src={
                        card.image
                      }
                      alt={
                        card.title
                      }
                      className="
                        h-full
                        w-full
                        object-cover
                        opacity-25
                        transition-transform
                        duration-700

                        group-hover:scale-105
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-[#1D283A]/10
                        via-[#1D283A]/55
                        to-[#1D283A]
                      "
                    />
                  </div>

                  {/* HOVER LIGHT */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500

                      group-hover:opacity-100
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_45%)]
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      flex-col
                      justify-between
                      p-7

                      md:p-9
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/10
                        text-[#E7D5B3]
                      "
                    >
                      <Icon
                        size={26}
                        strokeWidth={
                          1.8
                        }
                      />
                    </div>

                    {/* TEXT */}
                    <div className="mt-10">
                      <h3
                        className="
                          text-2xl
                          font-semibold
                          tracking-tight
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                          mt-5
                          max-w-md
                          text-sm
                          leading-7
                          text-white/70

                          md:text-base
                        "
                      >
                        {
                          card.description
                        }
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}