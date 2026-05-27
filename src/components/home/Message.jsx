import { motion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

/* CONTENT */

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

const chats = [
  {
    type: "user",
    text: "What activities are available for students?",
  },

  {
    type: "bot",
    text: "Students participate in cultural activities, celebrations, teamwork, creative learning, and activity-based classroom experiences throughout the academic year.",
  },

  {
    type: "user",
    text: "How can I apply for admission?",
  },

  {
    type: "bot",
    text: "You can visit the admission section or contact the school directly to receive complete guidance about the application process.",
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

export default function Message() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0F172A]
        py-24

        sm:py-32
      "
    >
      {/* ATMOSPHERE */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(198,165,106,0.12),transparent_30%)]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_bottom,rgba(15,23,42,0.2),transparent,rgba(15,23,42,0.55))]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          right-[-120px]
          top-[-120px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#C6A56A]/10
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
        {/* TRUSTEE */}
        <div
          className="
            grid
            items-center
            gap-16

            lg:gap-24
            xl:grid-cols-[0.92fr_1fr]
          "
        >
          {/* IMAGE */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.9,
            }}
            className="relative"
          >
            {/* MAIN IMAGE */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
              "
            >
              <img
                src="/images/trustee.jpg"
                alt="Trustee"
                className="
                  h-[460px]
                  w-full
                  object-cover

                  sm:h-[580px]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#020617]/75
                  via-[#020617]/10
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
                  bg-[#020617]/45
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
                    leading-7
                    text-slate-100

                    sm:text-[15px]
                  "
                >
                  “Every child deserves a caring environment where they feel inspired, respected, supported, and encouraged to grow with confidence.”
                </p>
              </div>
            </div>

            {/* STAT */}
            <div
              className="
                absolute
                -right-10
                top-10
                hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.05]
                p-6
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]

                lg:block
              "
            >
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
              >
                Educational Vision
              </p>

              <h3
                className="
                  mt-3
                  text-5xl
                  font-semibold
                  text-white
                "
              >
                15+
              </h3>

              <p
                className="
                  mt-3
                  max-w-[180px]
                  text-sm
                  leading-6
                  text-slate-300
                "
              >
                Years dedicated to nurturing children through values, learning, and meaningful education.
              </p>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            {...fadeUp}
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
                border-white/10
                bg-white/[0.05]
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <HeartHandshake
                size={15}
                className="
                  text-[#C6A56A]
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
                Leadership & Vision
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-7
                text-[2.8rem]
                font-semibold
                leading-[0.96]
                tracking-tight
                text-white

                sm:text-[4rem]

                lg:text-[5rem]
              "
            >
              A School Built On Care, Values & Meaningful Education
            </h2>

            {/* TEXT */}
            <div
              className="
                mt-7
                max-w-xl
                space-y-6
              "
            >
              <p
                className="
                  text-[17px]
                  leading-8
                  text-slate-300

                  sm:text-[18px]
                "
              >
                At Shree Vimal Vidya Mandir, we believe education should help children become confident, compassionate, disciplined, and future-ready individuals.
              </p>

              <p
                className="
                  text-[17px]
                  leading-8
                  text-slate-300

                  sm:text-[18px]
                "
              >
                Our mission is to create a safe and inspiring environment where every child receives meaningful guidance, personal attention, and joyful learning experiences.
              </p>
            </div>

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
                    key={item}
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
                        bg-white/[0.05]
                        backdrop-blur-md
                      "
                    >
                      <ShieldCheck
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
                      {item}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* AI SECTION */}
        <div
          className="
            mt-28
            grid
            items-center
            gap-16

            lg:mt-36
            lg:gap-24

            xl:grid-cols-[0.9fr_1fr]
          "
        >
          {/* LEFT */}
          <motion.div
            {...fadeUp}
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
                border-white/10
                bg-white/[0.05]
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <Bot
                size={14}
                className="
                  text-[#E2C48D]
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
                Parent Support Assistant
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-7
                text-[2.8rem]
                font-semibold
                leading-[0.96]
                tracking-tight
                text-white

                sm:text-[4rem]

                lg:text-[4.8rem]
              "
            >
              Friendly Guidance For Parents
            </h2>

            {/* TEXT */}
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
              Parents can quickly ask about admissions, school timings, activities, facilities, and educational environment through our helpful school assistant.
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
                  item
                ) => (
                  <div
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      text-slate-200
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
            {...fadeUp}
            transition={{
              duration: 1,
            }}
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.04]
              p-5
              backdrop-blur-xl
              shadow-[0_30px_80px_rgba(0,0,0,0.22)]

              sm:p-7
            "
          >
            {/* HEADER */}
            <div
              className="
                flex
                items-center
                gap-4
                border-b
                border-white/10
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
                  bg-[#C6A56A]/15
                "
              >
                <Bot
                  className="
                    text-[#E2C48D]
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    font-semibold
                    text-white
                  "
                >
                  School Support Assistant
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-400
                  "
                >
                  Helpful guidance for parents
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
              {chats.map(
                (
                  chat,
                  index
                ) => {
                  const isUser =
                    chat.type ===
                    "user";

                  return (
                    <div
                      key={index}
                      className={`flex ${
                        isUser
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`
                          max-w-[85%]
                          rounded-[24px]
                          px-5
                          py-4
                          text-sm
                          leading-7

                          ${
                            isUser
                              ? `
                                rounded-br-md
                                bg-[#C6A56A]
                                font-medium
                                text-[#0F172A]
                              `
                              : `
                                rounded-bl-md
                                bg-white/[0.05]
                                text-slate-300
                              `
                          }
                        `}
                      >
                        {chat.text}
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            {/* INPUT */}
            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-5
                py-4
              "
            >
              <p
                className="
                  text-sm
                  text-slate-400
                "
              >
                Ask about admissions, timings, activities...
              </p>

              <button
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#C6A56A]
                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                "
              >
                <ArrowRight
                  size={18}
                  className="
                    text-[#0F172A]
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