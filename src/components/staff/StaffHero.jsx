// StaffHero.jsx

import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    label: "Qualified Educators",
  },
  {
    icon: HeartHandshake,
    label: "Caring Environment",
  },
  {
    icon: ShieldCheck,
    label: "Safe Learning",
  },
];

export default function StaffHero() {
  return (
    <section className="relative overflow-hidden bg-[#1D283A] pt-32 pb-20 text-white md:pt-40 md:pb-28">
      {/* Soft Atmospheric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-80px] h-[320px] w-[320px] rounded-full bg-[#D9C4A0]/10 blur-[100px]" />

        <div className="absolute bottom-[-140px] right-[-100px] h-[340px] w-[340px] rounded-full bg-white/[0.04] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_35%)]" />

        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
            >
              <div className="h-2 w-2 rounded-full bg-[#E8D4AE]" />

              <span className="text-xs uppercase tracking-[0.25em] text-[#E8D4AE]">
                Our Educators
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl"
            >
              Guiding Young Minds With Care & Excellence
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="mt-7 max-w-xl text-base leading-8 text-white/70 md:text-lg"
            >
              Our teachers create a nurturing environment where
              children feel encouraged, valued, and inspired to
              learn confidently through care, discipline, and
              meaningful education.
            </motion.p>

            {/* Stat Pills */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-xl"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8D4AE]/10 text-[#E8D4AE]">
                      <Icon size={18} />
                    </div>

                    <span className="text-sm font-medium text-white/85">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Image */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[460px]"
            >
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <img
                  src="/images/staff/staff-main.jpg"
                  alt="School Staff"
                  className="h-[520px] w-full object-cover"
                />
              </div>

              {/* Floating Secondary Image */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="absolute -bottom-6 -left-5 hidden w-[170px] overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:block"
              >
                <img
                  src="/images/staff/staff-secondary.jpg"
                  alt="Teacher Interaction"
                  className="h-[190px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1D283A]/70" />
              </motion.div>

              {/* Floating Quote Card */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="absolute top-5 -right-3 max-w-[220px] rounded-[22px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl"
              >
                <p className="text-sm leading-7 text-white/85">
                  “Every child deserves guidance with patience,
                  kindness, and meaningful encouragement.”
                </p>
              </motion.div>
            </motion.div>

            {/* Ambient Glow */}
            <div className="absolute bottom-0 h-[180px] w-[180px] rounded-full bg-[#E8D4AE]/15 blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}