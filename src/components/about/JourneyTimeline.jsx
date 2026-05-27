// JourneyTimeline.jsx

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2008",
    title: "Foundation of the School",
    description:
      "Shree Vimal Vidya Mandir began with a vision to provide meaningful education rooted in discipline, care, and strong human values for every child.",
    image: "/images/journey/foundation.jpg",
  },
  {
    year: "2012",
    title: "Growth in Student Learning",
    description:
      "As the school community expanded, classrooms evolved into spaces of curiosity, creativity, and confident learning experiences.",
    image: "/images/journey/growth.jpg",
  },
  {
    year: "2016",
    title: "Activity-Based Education",
    description:
      "Learning transformed into an engaging journey through practical activities, collaborative experiences, and joyful participation.",
    image: "/images/journey/activity.jpg",
  },
  {
    year: "2020",
    title: "Digital Learning Integration",
    description:
      "Modern educational technologies were introduced to prepare students for a connected and rapidly evolving future.",
    image: "/images/journey/digital.jpg",
  },
  {
    year: "2026",
    title: "Vision for Future Generations",
    description:
      "Today, the school continues shaping future-ready students with compassion, confidence, leadership, and lifelong learning values.",
    image: "/images/journey/future.jpg",
  },
];

export default function JourneyTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#1D283A] py-24 text-white md:py-36"
    >
      {/* Atmospheric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-180px] left-[-120px] h-[500px] w-[500px] rounded-full bg-[#CDB892]/10 blur-[140px]" />

        <div className="absolute bottom-[-220px] right-[-100px] h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_35%)]" />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-[#D8C19A]" />

            <span className="text-xs uppercase tracking-[0.28em] text-[#E8D7B5]">
              Our Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl"
          >
            A Journey of Purpose, Growth & Meaningful Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            viewport={{ once: true }}
            className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg"
          >
            Over the years, Shree Vimal Vidya Mandir has evolved into a place
            where education nurtures values, confidence, creativity, and
            lifelong growth beyond classrooms.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Timeline Center Line */}
          <div className="absolute left-5 top-0 h-full w-[1px] bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{
                height: lineHeight,
              }}
              className="absolute left-0 top-0 w-full origin-top bg-gradient-to-b from-[#E7D4AE] via-[#C5AA7A] to-transparent shadow-[0_0_25px_rgba(231,212,174,0.5)]"
            />
          </div>

          <div className="space-y-24 md:space-y-36">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`relative flex flex-col gap-10 md:gap-0 ${
                    isEven
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Indicator */}
                  <div className="absolute left-5 top-10 z-20 md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(231,212,174,0.4)",
                          "0 0 30px rgba(231,212,174,0.7)",
                          "0 0 0px rgba(231,212,174,0.4)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="relative flex h-5 w-5 items-center justify-center rounded-full border border-[#E7D4AE]/50 bg-[#E7D4AE]"
                    >
                      <div className="absolute h-10 w-10 rounded-full bg-[#E7D4AE]/20 blur-xl" />
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className="pl-16 md:w-1/2 md:pl-0">
                    <div
                      className={`max-w-xl ${
                        isEven
                          ? "md:mr-auto md:pr-20"
                          : "md:ml-auto md:pl-20"
                      }`}
                    >
                      {/* Year */}
                      <motion.h3
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.1,
                          duration: 0.8,
                        }}
                        viewport={{ once: true }}
                        className="text-6xl font-semibold tracking-[-0.05em] text-[#E7D4AE]/90 md:text-8xl"
                      >
                        {item.year}
                      </motion.h3>

                      {/* Heading */}
                      <h4 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="mt-5 text-sm leading-8 text-white/65 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="pl-16 md:w-1/2 md:pl-0">
                    <motion.div
                      whileHover={{
                        y: -8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                      }}
                      className={`relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl ${
                        isEven
                          ? "md:ml-10"
                          : "md:mr-10"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1D283A]/70 z-10" />

                      <motion.img
                        whileHover={{
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        src={item.image}
                        alt={item.title}
                        className="h-[300px] w-full object-cover md:h-[420px]"
                      />

                      {/* Floating Overlay Glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)] opacity-60" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}