import {
  motion,
} from "framer-motion";

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

export default function Message() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FAF7F2]
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
            left-[-120px]
            w-[300px]
            h-[300px]
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
            right-[-100px]
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
        {/* ================================= */}
        {/* TRUSTEE MESSAGE */}
        {/* ================================= */}

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[0.95fr_1fr]
            gap-16
            items-center
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
                  w-full
                  h-[620px]
                  object-cover
                "
              />

              {/* SOFT OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0F172A]/35
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
                    text-[15px]
                    leading-7
                    text-[#334155]
                    font-medium
                  "
                >
                  “Every child deserves an
                  environment where they are
                  encouraged to learn, grow,
                  express themselves, and build
                  confidence for the future.”
                </p>
              </div>
            </div>

            {/* FLOATING CARD */}
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
                -right-12
                top-10
                rounded-[28px]
                border
                border-[#ECE7DE]
                bg-white
                p-6
                shadow-[0_20px_50px_rgba(15,23,42,0.06)]
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#94A3B8]
                  font-semibold
                "
              >
                Educational Leadership
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
                  text-sm
                  leading-6
                  text-[#64748B]
                  max-w-[180px]
                "
              >
                Years dedicated to nurturing
                young minds through education
                and values.
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
                bg-white
                px-4
                py-2
                shadow-sm
              "
            >
              <HeartHandshake
                size={15}
                className="text-[#C59D5F]"
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
                text-[2.7rem]
                leading-[1.08]
                sm:text-6xl
                lg:text-[4.7rem]
                font-semibold
                tracking-tight
                text-[#0F172A]
              "
            >
              A School Built
              On Care,
              Values &
              Meaningful Learning
            </h2>

            {/* TEXT */}
            <p
              className="
                mt-7
                text-[17px]
                sm:text-[18px]
                leading-8
                text-[#475569]
              "
            >
              At Shree Vimal Vidya Mandir,
              we believe education should help
              children become confident,
              disciplined, compassionate, and
              future-ready individuals.
            </p>

            <p
              className="
                mt-6
                text-[17px]
                sm:text-[18px]
                leading-8
                text-[#475569]
              "
            >
              Our mission is to provide a safe,
              caring, and inspiring environment
              where every child receives
              personal attention, meaningful
              guidance, and opportunities to
              grow academically and emotionally.
            </p>

            {/* VALUES */}
            <div
              className="
                mt-10
                space-y-4
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
                        w-11
                        h-11
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
                      <ShieldCheck
                        size={18}
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
                      {item}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* ================================= */}
        {/* AI ASSISTANT */}
        {/* ================================= */}

        <div
          className="
            mt-28
            grid
            grid-cols-1
            xl:grid-cols-[0.85fr_1fr]
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
            {/* LABEL */}
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
              <Bot
                size={14}
                className="text-[#2563EB]"
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
                text-[2.6rem]
                leading-[1.08]
                sm:text-5xl
                lg:text-[4.4rem]
                font-semibold
                tracking-tight
                text-[#0F172A]
              "
            >
              Quick Guidance
              & Support
              For Parents
            </h2>

            {/* TEXT */}
            <p
              className="
                mt-7
                text-[17px]
                sm:text-[18px]
                leading-8
                text-[#475569]
                max-w-xl
              "
            >
              Parents can easily get answers
              related to admissions, timings,
              school activities, facilities,
              and student life through our
              friendly school support assistant.
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
              {[
                "Admission Process",
                "School Timings",
                "Activities & Events",
                "Learning Environment",
              ].map(
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
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-[#475569]
                      shadow-sm
                    "
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* CHAT EXPERIENCE */}
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
              bg-white
              p-5
              sm:p-7
              shadow-[0_20px_60px_rgba(15,23,42,0.06)]
            "
          >
            {/* TOP */}
            <div
              className="
                flex
                items-center
                gap-4
                pb-5
                border-b
                border-[#F1ECE4]
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-[#EFF6FF]
                  flex
                  items-center
                  justify-center
                "
              >
                <Bot
                  className="text-[#2563EB]"
                />
              </div>

              <div>
                <h3
                  className="
                    text-[#0F172A]
                    font-semibold
                  "
                >
                  School Support Assistant
                </h3>

                <p
                  className="
                    text-sm
                    text-[#64748B]
                    mt-1
                  "
                >
                  Friendly guidance for parents
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
                    text-white
                    text-sm
                    leading-7
                  "
                >
                  What activities are available
                  for students?
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
                    text-[#475569]
                    text-sm
                    leading-7
                  "
                >
                  Students participate in
                  cultural activities,
                  celebrations, teamwork
                  programs, creative learning,
                  and activity-based classroom
                  experiences throughout the
                  academic year.
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
                    text-white
                    text-sm
                    leading-7
                  "
                >
                  How can I apply for admission?
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
                    text-[#475569]
                    text-sm
                    leading-7
                  "
                >
                  You can contact the school
                  directly or visit the
                  admission section to receive
                  complete guidance regarding
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
                Ask about admissions,
                activities, timings...
              </p>

              <button
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#2563EB]
                  flex
                  items-center
                  justify-center
                  shadow-[0_10px_20px_rgba(37,99,235,0.18)]
                "
              >
                <ArrowRight
                  size={18}
                  className="text-white"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}