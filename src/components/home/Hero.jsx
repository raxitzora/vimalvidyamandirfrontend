import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
  Play,
  Sparkles,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

/* CONTENT */

const trustItems = [
  "Activity Based Learning",
  "Safe Environment",
  "Holistic Development",
];

const infoCards = [
  {
    icon: GraduationCap,
    title: "Learning Beyond Books",
    description:
      "We nurture confidence, creativity, discipline, and meaningful growth through modern educational experiences.",

    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    cardBg: "bg-white/[0.04]",
  },

  {
    icon: ShieldCheck,
    title: "Safe & Caring Environment",
    description:
      "Every child receives personal attention in a warm and supportive educational atmosphere.",

    iconBg: "bg-[#D6B06B]/20",
    iconColor: "text-[#D6B06B]",
    cardBg: "bg-[#D6B06B]/10",
  },
];

/* REUSABLE ANIMATION */

const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },

  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  const { scrollYProgress } =
    useScroll();

  /* LIGHTWEIGHT VIDEO SCALE */

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0F172A]
        pt-32
        lg:pt-36
      "
    >
      {/* VIDEO */}
      <motion.video
        style={{
          scale: videoScale,
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-70
        "
      >
        <source
          src="/videos/heroVideo.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#020617]/55" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#020617]/30
          via-[#020617]/20
          to-[#0F172A]
        "
      />

      {/* LIGHT */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#2563EB]/15
          blur-3xl
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-120px)]
          max-w-7xl
          items-center
          px-5
          pb-20
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-16
            xl:grid-cols-[1fr_390px]
          "
        >
          {/* LEFT */}
          <div>
            {/* BADGE */}
            <motion.div
              {...fadeUp}
              transition={{
                duration: 0.6,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <Sparkles
                size={14}
                className="text-[#D6B06B]"
              />

              <p
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/70
                "
              >
                Shree Vimal Vidya Mandir
              </p>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              {...fadeUp}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="
                mt-8
                max-w-[720px]
                text-5xl
                font-bold
                leading-[0.92]
                tracking-[-0.05em]
                text-white

                sm:text-7xl

                lg:text-[5.8rem]

                xl:text-[6.2rem]
              "
            >
              Building Bright Futures Through Meaningful Education
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              {...fadeUp}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-slate-300

                sm:text-lg
                sm:leading-9
              "
            >
              A caring English medium school in Madhavpur Ghed where children learn with confidence, creativity, discipline, and joy from KG to Standard 5.
            </motion.p>

            {/* TRUST ITEMS */}
            <motion.div
              {...fadeUp}
              transition={{
                delay: 0.3,
              }}
              className="
                mt-10
                flex
                flex-wrap
                gap-3
              "
            >
              {trustItems.map(
                (item) => (
                  <div
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-4
                      py-2
                      text-xs
                      text-slate-200
                      backdrop-blur-md

                      sm:px-5
                      sm:text-sm
                    "
                  >
                    {item}
                  </div>
                )
              )}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              {...fadeUp}
              transition={{
                delay: 0.4,
              }}
              className="
                mt-12
                flex
                flex-col
                gap-4
                md:flex-row
              "
            >
              {/* PRIMARY */}
              <motion.button
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
                  gap-3
                  rounded-full
                  bg-[#2563EB]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(37,99,235,0.35)]
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
              </motion.button>

              {/* SECONDARY */}
              <motion.button
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
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-md
                "
              >
                <Play size={18} />

                Explore School
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
            }}
            className="
              hidden
              xl:flex
              flex-col
              gap-5
            "
          >
            {infoCards.map(
              (
                card,
                index
              ) => {
                const Icon =
                  card.icon;

                return (
                  <div
                    key={index}
                    className={`
                      rounded-3xl
                      border
                      border-white/10
                      ${card.cardBg}
                      p-7
                      backdrop-blur-xl
                    `}
                  >
                    {/* ICON */}
                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        ${card.iconBg}
                      `}
                    >
                      <Icon
                        className={
                          card.iconColor
                        }
                      />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        mt-6
                        text-2xl
                        font-semibold
                        text-white
                      "
                    >
                      {card.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-4
                        leading-8
                        text-slate-300
                      "
                    >
                      {
                        card.description
                      }
                    </p>
                  </div>
                );
              }
            )}
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          -translate-x-1/2
        "
      >
        <div
          className="
            flex
            h-10
            w-6
            justify-center
            rounded-full
            border
            border-white/20
            p-2
          "
        >
          <div
            className="
              h-3
              w-1.5
              rounded-full
              bg-[#D6B06B]
            "
          />
        </div>
      </motion.div>
    </section>
  );
}