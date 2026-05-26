import { motion } from "framer-motion";

import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Bot,
} from "lucide-react";

const values = [
  "Child-Centered Learning",
  "Safe & Caring Environment",
  "Values & Discipline",
];

const questions = [
  "Admission Process",
  "School Timings",
  "Activities & Events",
  "Learning Environment",
];

export default function Message() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#F1F5F9]
        to-[#F8F6F1]
        pt-24
        pb-28

        sm:pt-28
        sm:pb-36
      "
    >
      {/* BACKGROUND GLOWS */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#DBEAFE]
            opacity-40
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#FEF3C7]
            opacity-40
            blur-3xl
          "
        />
      </div>

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
        {/* ===================================== */}
        {/* TRUSTEE SECTION */}
        {/* ===================================== */}

        <div
          className="
            grid
            items-center
            gap-14

            xl:grid-cols-[0.92fr_1fr]

            lg:gap-20
          "
        >
          {/* IMAGE SIDE */}
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
                src="/images/trustee.jpg"
                alt="Trustee"
                className="
                  h-[460px]
                  w-full
                  object-cover

                  sm:h-[560px]
                "
              />

              {/* SOFT OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0F172A]/20
                  via-transparent
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

                  rounded-3xl
                  bg-white/80
                  p-5
                  backdrop-blur-md

                  sm:bottom-6
                  sm:left-6
                  sm:right-6
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
                  “Every child deserves a
                  caring environment where
                  they feel encouraged,
                  respected, inspired, and
                  confident to grow.”
                </p>
              </div>
            </div>

            {/* FLOATING STAT */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
                hidden

                lg:block

                absolute
                -right-10
                top-10

                rounded-3xl
                border
                border-[#ECE7DE]
                bg-white/90
                p-5
                backdrop-blur-md
                shadow-[0_20px_50px_rgba(15,23,42,0.05)]
              "
            >
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.2em]
                  text-[#94A3B8]
                  font-semibold
                "
              >
                Educational Vision
              </p>

              <h3
                className="
                  mt-3
                  text-4xl
                  font-semibold
                  text-[#0F172A]
                "
              >
                15+
              </h3>

              <p
                className="
                  mt-2
                  max-w-[170px]
                  text-sm
                  leading-6
                  text-[#64748B]
                "
              >
                Years dedicated to
                nurturing children through
                education and values.
              </p>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
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
          >
            {/* LABEL */}
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
              <HeartHandshake
                size={15}
                className="
                  text-[#C59D5F]
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
                Leadership & Vision
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-7
                text-[2.8rem]
                font-semibold
                leading-[0.98]
                tracking-tight
                text-[#0F172A]

                sm:text-[4rem]

                lg:text-[5rem]
              "
            >
              A School
              Rooted In
              Care, Values
              & Meaningful
              Education
            </h2>

            {/* TEXT */}
            <p
              className="
                mt-7
                max-w-xl
                text-[17px]
                leading-8
                text-[#475569]

                sm:text-[18px]
              "
            >
              At Shree Vimal Vidya
              Mandir, we believe
              education should help
              children become
              confident, disciplined,
              compassionate, and
              future-ready individuals.
            </p>

            <p
              className="
                mt-6
                max-w-xl
                text-[17px]
                leading-8
                text-[#475569]

                sm:text-[18px]
              "
            >
              Our mission is to create
              a safe and inspiring
              environment where every
              child receives personal
              attention, meaningful
              guidance, and joyful
              learning experiences.
            </p>

            {/* VALUES */}
            <div
              className="
                mt-10
                space-y-5
              "
            >
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
                        border-[#ECE7DE]
                        bg-white/90
                      "
                    >
                      <ShieldCheck
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
                      {item}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* ===================================== */}
        {/* AI ASSISTANT */}
        {/* ===================================== */}

        <div
          className="
            mt-28

            grid
            items-center
            gap-14

            xl:grid-cols-[0.9fr_1fr]

            lg:mt-36
            lg:gap-20
          "
        >
          {/* LEFT SIDE */}
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
            {/* LABEL */}
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
              <Bot
                size={14}
                className="
                  text-[#2563EB]
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
                Parent Support Assistant
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-7
                text-[2.8rem]
                font-semibold
                leading-[0.98]
                tracking-tight
                text-[#0F172A]

                sm:text-[4rem]

                lg:text-[4.8rem]
              "
            >
              Friendly
              Guidance &
              Support For
              Parents
            </h2>

            {/* TEXT */}
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
              Parents can quickly ask
              about admissions,
              activities, timings,
              facilities, learning
              environment, and school
              information through our
              helpful support assistant.
            </p>

            {/* QUESTIONS */}
            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-3
              "
            >
              {questions.map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={index}
                    className="
                      rounded-full
                      border
                      border-[#ECE7DE]
                      bg-white/90
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      text-[#475569]
                    "
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* CHAT UI */}
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
            className="
              rounded-[36px]
              border
              border-[#ECE7DE]
              bg-white/90
              p-5
              shadow-[0_20px_60px_rgba(15,23,42,0.05)]

              sm:p-7
            "
          >
            {/* TOP */}
            <div
              className="
                flex
                items-center
                gap-4
                border-b
                border-[#F1ECE4]
                pb-5
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-2xl
                  bg-[#EFF6FF]
                "
              >
                <Bot
                  className="
                    text-[#2563EB]
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    font-semibold
                    text-[#0F172A]
                  "
                >
                  School Support Assistant
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-[#64748B]
                  "
                >
                  Helpful guidance for
                  parents
                </p>
              </div>
            </div>

            {/* CHAT */}
            <div
              className="
                mt-6
                space-y-5
              "
            >
              {/* USER */}
              <div className="flex justify-end">
                <div
                  className="
                    max-w-[80%]

                    rounded-[24px]
                    rounded-br-md

                    bg-[#2563EB]
                    px-5
                    py-4

                    text-sm
                    leading-7
                    text-white
                  "
                >
                  What activities are
                  available for students?
                </div>
              </div>

              {/* BOT */}
              <div className="flex justify-start">
                <div
                  className="
                    max-w-[85%]

                    rounded-[24px]
                    rounded-bl-md

                    bg-[#F8FAFC]
                    px-5
                    py-4

                    text-sm
                    leading-7
                    text-[#475569]
                  "
                >
                  Students participate in
                  cultural activities,
                  celebrations, teamwork,
                  creative learning, and
                  activity-based classroom
                  experiences throughout
                  the academic year.
                </div>
              </div>

              {/* USER */}
              <div className="flex justify-end">
                <div
                  className="
                    max-w-[80%]

                    rounded-[24px]
                    rounded-br-md

                    bg-[#2563EB]
                    px-5
                    py-4

                    text-sm
                    leading-7
                    text-white
                  "
                >
                  How can I apply for
                  admission?
                </div>
              </div>

              {/* BOT */}
              <div className="flex justify-start">
                <div
                  className="
                    max-w-[85%]

                    rounded-[24px]
                    rounded-bl-md

                    bg-[#F8FAFC]
                    px-5
                    py-4

                    text-sm
                    leading-7
                    text-[#475569]
                  "
                >
                  You can visit the
                  admission section or
                  contact the school
                  directly to receive
                  complete guidance about
                  the application process.
                </div>
              </div>
            </div>

            {/* INPUT */}
            <div
              className="
                mt-6

                flex
                items-center
                justify-between

                rounded-full
                bg-[#F8FAFC]
                px-5
                py-4
              "
            >
              <p
                className="
                  text-sm
                  text-[#94A3B8]
                "
              >
                Ask about timings,
                admissions, activities...
              </p>

              <button
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full
                  bg-[#2563EB]

                  shadow-[0_10px_20px_rgba(37,99,235,0.15)]
                "
              >
                <ArrowRight
                  size={18}
                  className="
                    text-white
                  "
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}