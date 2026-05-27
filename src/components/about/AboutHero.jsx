// AboutHero.jsx

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, ShieldCheck, HeartHandshake } from "lucide-react";

export default function AboutHero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1D283A] text-white"
    >
      {/* Atmospheric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] h-[500px] w-[500px] rounded-full bg-[#C9B28E]/10 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#ffffff]/5 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_40%)]" />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
            >
              <div className="h-2 w-2 rounded-full bg-[#C9B28E]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#E9D8B4]">
                About Shree Vimal Vidya Mandir
              </span>
            </motion.div>

            {/* Massive Editorial Heading */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl"
              >
                Nurturing Young Minds Through Meaningful Education
              </motion.h1>
            </div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 1,
              }}
              viewport={{ once: true }}
              className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
            >
              At Shree Vimal Vidya Mandir, education goes beyond textbooks.
              We cultivate confidence, discipline, compassion, and curiosity
              through a nurturing environment where every child is guided with
              care, values, and purpose.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.9,
              }}
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {[
                {
                  icon: GraduationCap,
                  title: "Holistic Learning",
                },
                {
                  icon: ShieldCheck,
                  title: "Safe Environment",
                },
                {
                  icon: HeartHandshake,
                  title: "Value-Based Growth",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl"
                  >
                    <div className="rounded-xl bg-[#C9B28E]/15 p-2 text-[#E9D8B4]">
                      <Icon size={18} />
                    </div>

                    <span className="text-sm font-medium text-white/85">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 1,
              }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10"
            >
              {[
                {
                  number: "15+",
                  label: "Years of Excellence",
                },
                {
                  number: "500+",
                  label: "Students Empowered",
                },
                {
                  number: "100%",
                  label: "Holistic Focus",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-semibold tracking-tight text-[#E9D8B4] md:text-4xl">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL SIDE */}
          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
            }}
            className="relative flex items-center justify-center"
          >
            {/* Main Image */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[520px]"
            >
              <div className="overflow-hidden rounded-[38px] border border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <img
                  src="/images/school-main.jpg"
                  alt="Shree Vimal Vidya Mandir"
                  className="h-[620px] w-full object-cover"
                />
              </div>

              {/* Glass Philosophy Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                }}
                viewport={{ once: true }}
                className="absolute bottom-8 left-1/2 w-[88%] -translate-x-1/2 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl"
              >
                <p className="text-sm leading-7 text-white/85 md:text-base">
                  “We believe every child deserves an environment where
                  knowledge, character, creativity, and confidence grow
                  together.”
                </p>
              </motion.div>

              {/* Floating Secondary Image */}
              <motion.div
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -left-10 hidden w-[220px] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl md:block"
              >
                <img
                  src="/images/students.jpg"
                  alt="Students"
                  className="h-[260px] w-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Soft Ambient Glow */}
            <div className="absolute bottom-0 h-[300px] w-[300px] rounded-full bg-[#C9B28E]/20 blur-[120px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}