import { motion } from "framer-motion";

import {
  GraduationCap,
  Quote,
  ShieldCheck,
} from "lucide-react";

/* CONTENT */

const stats = [
  {
    number: "15+",
    label:
      "Years of Educational Excellence",
  },

  {
    number: "500+",
    label:
      "Students Growing With Confidence",
  },

  {
    number: "100%",
    label:
      "Commitment to Holistic Development",
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

export default function TrusteeMessage() {
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
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_35%)]
        "
      />

      <div
        className="
          absolute
          left-[-100px]
          top-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D9C49F]/10
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-[-220px]
          right-[-120px]
          h-[550px]
          w-[550px]
          rounded-full
          bg-white/[0.04]
          blur-[160px]
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
        {/* BADGE */}
        <motion.div
          {...fadeUp}
          transition={{
            duration: 0.8,
          }}
          className="
            mb-16
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
              bg-[#E7D4AE]
            "
          />

          <span
            className="
              text-xs
              uppercase
              tracking-[0.28em]
              text-[#E7D4AE]
            "
          >
            Trustee Message
          </span>
        </motion.div>

        {/* LAYOUT */}
        <div
          className="
            grid
            items-center
            gap-16

            lg:grid-cols-[0.95fr_1.05fr]
          "
        >
          {/* LEFT */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.9,
            }}
            className="relative"
          >
            {/* PORTRAIT */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[42px]
                border
                border-white/10
                bg-white/5
                shadow-[0_35px_100px_rgba(0,0,0,0.4)]
              "
            >
              <img
                src="/images/trustee/sanket-sir.jpg"
                alt="Sanket Sir"
                className="
                  h-[520px]
                  w-full
                  object-cover

                  md:h-[640px]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-[#1D283A]/10
                  via-transparent
                  to-[#1D283A]/85
                "
              />

              {/* NAME */}
              <div
                className="
                  absolute
                  bottom-8
                  left-8
                "
              >
                <h3
                  className="
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                  "
                >
                  Sanket Sir
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-[#E7D4AE]/85
                  "
                >
                  Trustee • CA
                </p>
              </div>
            </div>

            {/* QUOTE CARD */}
            <motion.div
              {...fadeUp}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="
                absolute
                -bottom-10
                -right-4
                hidden
                w-[280px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/10
                p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                backdrop-blur-xl

                md:block
              "
            >
              <Quote
                size={32}
                className="
                  text-[#E7D4AE]
                "
                strokeWidth={1.5}
              />

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-white/85
                "
              >
                “Education is not only about academic achievement, but about shaping responsible, confident, and compassionate human beings.”
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.9,
            }}
          >
            {/* TITLE */}
            <h2
              className="
                text-4xl
                font-semibold
                leading-[1.04]
                tracking-[-0.05em]

                md:text-6xl

                lg:text-7xl
              "
            >
              Building a Future Rooted in Values, Confidence & Meaningful Education
            </h2>

            {/* INTRO */}
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
              At Shree Vimal Vidya Mandir, our mission has always been to create an environment where children feel inspired to learn, grow, and discover their true potential with confidence and integrity.
            </p>

            {/* MESSAGE CARD */}
            <motion.div
              {...fadeUp}
              transition={{
                delay: 0.15,
                duration: 0.9,
              }}
              className="
                relative
                mt-12
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-white/[0.04]
                p-8
                shadow-[0_25px_80px_rgba(0,0,0,0.3)]

                md:p-10
              "
            >
              {/* LIGHT */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]
                "
              />

              <div className="relative z-10">
                {/* TOP */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
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
                      border
                      border-white/10
                      bg-white/10
                      text-[#E7D4AE]
                    "
                  >
                    <ShieldCheck
                      size={24}
                    />
                  </div>

                  <div>
                    <h4
                      className="
                        text-xl
                        font-medium
                      "
                    >
                      A Message from the Trustee
                    </h4>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-white/50
                      "
                    >
                      Shree Vimal Vidya Mandir
                    </p>
                  </div>
                </div>

                {/* TEXT */}
                <div
                  className="
                    mt-8
                    space-y-6
                    text-base
                    leading-8
                    text-white/70
                  "
                >
                  <p>
                    We strongly believe that every child deserves an education that goes beyond textbooks — an education that develops confidence, discipline, empathy, creativity, and leadership.
                  </p>

                  <p>
                    Our institution is committed to nurturing students in a safe, caring, and inspiring environment where they are encouraged to think independently, participate actively, and grow into responsible individuals.
                  </p>

                  <p>
                    As educators and mentors, our responsibility is not only to prepare children for examinations, but to prepare them for life with strong values and a meaningful vision for the future.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* STATS */}
            <motion.div
              {...fadeUp}
              transition={{
                delay: 0.25,
                duration: 0.9,
              }}
              className="
                mt-10
                grid
                gap-5

                sm:grid-cols-3
              "
            >
              {stats.map(
                (
                  item
                ) => (
                  <div
                    key={item.label}
                    className="
                      relative
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-6
                    "
                  >
                    {/* LIGHT */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_45%)]
                      "
                    />

                    <div className="relative z-10">
                      {/* ICON */}
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/10
                          text-[#E7D4AE]
                        "
                      >
                        <GraduationCap
                          size={22}
                        />
                      </div>

                      {/* NUMBER */}
                      <h4
                        className="
                          mt-6
                          text-3xl
                          font-semibold
                          tracking-tight
                          text-[#E7D4AE]
                        "
                      >
                        {
                          item.number
                        }
                      </h4>

                      {/* LABEL */}
                      <p
                        className="
                          mt-3
                          text-sm
                          leading-6
                          text-white/60
                        "
                      >
                        {
                          item.label
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}