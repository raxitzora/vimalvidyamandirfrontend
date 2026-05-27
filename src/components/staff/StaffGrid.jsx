// StaffGrid.jsx

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const staffMembers = [
  {
    name: "Priya Ma'am",
    designation: "Primary Teacher",
    degree: "B.Ed, M.A.",
    experience: "8 Years Experience",
    image: "/images/staff/teacher-1.jpg",
  },

  {
    name: "Rakesh Sir",
    designation: "Mathematics Teacher",
    degree: "B.Sc, B.Ed",
    experience: "10 Years Experience",
    image: "/images/staff/teacher-2.jpg",
  },

  {
    name: "Neha Ma'am",
    designation: "English Teacher",
    degree: "M.A. English",
    experience: "6 Years Experience",
    image: "/images/staff/teacher-3.jpg",
  },

  {
    name: "Amit Sir",
    designation: "Science Teacher",
    degree: "M.Sc, B.Ed",
    experience: "9 Years Experience",
    image: "/images/staff/teacher-4.jpg",
  },

  {
    name: "Kiran Ma'am",
    designation: "Activity Coordinator",
    degree: "B.A, Montessori",
    experience: "7 Years Experience",
    image: "/images/staff/teacher-5.jpg",
  },

  {
    name: "Sonal Ma'am",
    designation: "Primary Educator",
    degree: "B.Ed",
    experience: "5 Years Experience",
    image: "/images/staff/teacher-6.jpg",
  },
];

export default function StaffGrid() {
  return (
    <section className="relative overflow-hidden bg-[#1D283A] py-20 text-white md:py-28">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-[#D9C4A0]/10 blur-[90px]" />

        <div className="absolute bottom-[-120px] right-[-80px] h-[300px] w-[300px] rounded-full bg-white/[0.04] blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl">
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
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2"
          >
            <div className="h-2 w-2 rounded-full bg-[#E8D4AE]" />

            <span className="text-xs uppercase tracking-[0.22em] text-[#E8D4AE]">
              Our Teaching Staff
            </span>
          </motion.div>

          <motion.h2
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
            className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-5xl"
          >
            Dedicated Educators Who Inspire Every Child
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
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
            className="mt-6 text-base leading-8 text-white/65 md:text-lg"
          >
            Our teachers guide children with patience, care,
            creativity, and meaningful educational experiences
            that help them grow confidently every day.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((staff, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={staff.image}
                  alt={staff.name}
                  className="h-[320px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1D283A]/70" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {staff.name}
                </h3>

                {/* Designation */}
                <p className="mt-2 text-sm font-medium text-[#E8D4AE]">
                  {staff.designation}
                </p>

                {/* Qualification + Experience */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-[#E8D4AE]">
                      <GraduationCap size={16} />
                    </div>

                    <span>{staff.degree}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-[#E8D4AE]">
                      <Briefcase size={16} />
                    </div>

                    <span>{staff.experience}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}