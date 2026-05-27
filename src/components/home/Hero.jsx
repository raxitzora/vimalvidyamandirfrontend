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


export default function Hero() {
  const { scrollYProgress } = useScroll();

  // VIDEO PARALLAX ONLY
  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.12]
  );

  const videoY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 120]
  );

  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        pt-32
        lg:pt-36
        bg-[#0F172A]
      "
    >
      {/* VIDEO BACKGROUND */}
      <motion.video
        style={{
          scale: videoScale,
          y: videoY,
        }}
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-70
        "
      >
        <source
          src="/videos/heroVideo.mp4"
          type="video/mp4"
          
        />
      </motion.video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#020617]/55" />

      {/* GRADIENT OVERLAY */}
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

      {/* LIGHT GLOW */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[320px]
          h-[320px]
          rounded-full
          bg-[#2563EB]/15
          blur-3xl
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          min-h-[calc(100svh-120px)]
          flex
          items-center
          pb-24
          lg:pb-10
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
          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="
                mt-8
                max-w-[720px]
                text-[3.2rem]
                font-bold
                leading-[0.92]
                tracking-[-0.04em]
                text-white

                sm:text-[4.5rem]

                lg:text-[5.8rem]

                xl:text-[6.3rem]
              "
            >
              Building
              Bright Futures
              Through
              Meaningful
              Education
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
              A caring English medium school in
              Madhavpur Ghed where children
              learn with confidence, creativity,
              discipline, and joy from KG to
              Standard 5.
            </motion.p>

            {/* TRUST PILLS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
              {[
                "Activity Based Learning",
                "Safe Environment",
                "Holistic Development",
              ].map((item, index) => (
                <div
                  key={index}
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
              ))}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
              {/* PRIMARY BUTTON */}
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
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#2563EB]
                  px-8
                  py-4
                  text-white
                  font-semibold
                  shadow-[0_15px_40px_rgba(37,99,235,0.35)]

                  md:w-auto
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

              {/* SECONDARY BUTTON */}
              <motion.button
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-8
                  py-4
                  text-white
                  font-semibold
                  backdrop-blur-md

                  md:w-auto
                "
              >
                <Play size={18} />
                Explore School
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="
              hidden
              xl:flex
              flex-col
              gap-5
            "
          >
            {/* CARD 1 */}
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-500/15
                "
              >
                <GraduationCap className="text-blue-400" />
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                Learning Beyond Books
              </h3>

              <p
                className="
                  mt-4
                  leading-8
                  text-slate-300
                "
              >
                We nurture confidence,
                creativity, discipline, and
                meaningful growth through
                modern educational experiences.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-[#D6B06B]/10
                p-7
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#D6B06B]/20
                "
              >
                <ShieldCheck className="text-[#D6B06B]" />
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                Safe & Caring Environment
              </h3>

              <p
                className="
                  mt-4
                  leading-8
                  text-slate-300
                "
              >
                Every child receives personal
                attention in a warm and
                supportive educational
                atmosphere.
              </p>
            </div>
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

          lg:bottom-8
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