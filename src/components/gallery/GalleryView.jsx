// GalleryView.jsx

import { motion } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    image: "/images/gallery/gallery-1.jpg",
    title: "Joyful Learning",
    className: "md:col-span-7 md:h-[520px]",
  },

  {
    image: "/images/gallery/gallery-2.jpg",
    title: "Creative Activities",
    className: "md:col-span-5 md:h-[520px]",
  },

  {
    image: "/images/gallery/gallery-3.jpg",
    title: "Prayer & Values",
    className: "md:col-span-4 md:h-[420px]",
  },

  {
    image: "/images/gallery/gallery-4.jpg",
    title: "Classroom Moments",
    className: "md:col-span-8 md:h-[420px]",
  },

  {
    image: "/images/gallery/gallery-5.jpg",
    title: "Confidence Building",
    className: "md:col-span-6 md:h-[500px]",
  },

  {
    image: "/images/gallery/gallery-6.jpg",
    title: "Participation & Growth",
    className: "md:col-span-6 md:h-[500px]",
  },
];

function GalleryCard({ item, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -4;

    const rotateY =
      ((x - centerX) / centerX) * 4;

    cardRef.current.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
  };

  const resetTransform = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={`
        ${item.className}
        group
        relative
        h-[380px]
        overflow-hidden
        rounded-[30px]
      `}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
        className="
          relative
          h-full
          w-full
          overflow-hidden
          border
          border-white/10
          bg-white/[0.03]
          shadow-[0_25px_80px_rgba(0,0,0,0.28)]
          transition-transform
          duration-500
          ease-out
          will-change-transform
        "
      >
        {/* Image */}
        <motion.img
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Cinematic Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#1D283A]/5
            via-transparent
            to-[#1D283A]/85
          "
        />

        {/* Lighting Sweep */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-700
            group-hover:opacity-100
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_35%)]
            "
          />
        </div>

        {/* Text */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-10
            p-6
            md:p-8
          "
        >
          <motion.h3
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              text-2xl
              font-semibold
              tracking-[-0.03em]
              text-white
              md:text-3xl
            "
          >
            {item.title}
          </motion.h3>

          <div
            className="
              mt-4
              h-[1px]
              w-20
              bg-gradient-to-r
              from-[#E8D4AE]
              to-transparent
            "
          />
        </div>

        {/* Ambient Glow */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[120px]
            w-[120px]
            rounded-full
            bg-[#E8D4AE]/10
            blur-[80px]
          "
        />
      </div>
    </motion.div>
  );
}

export default function GalleryView() {
  return (
    <section className="relative overflow-hidden bg-[#1D283A] py-20 text-white md:py-28">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            top-[-120px]
            left-[-100px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#D8C29D]/10
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            bottom-[-140px]
            right-[-120px]
            h-[360px]
            w-[360px]
            rounded-full
            bg-white/[0.04]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_35%)]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl">
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
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              mb-5
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-5
              py-2
            "
          >
            <div className="h-2 w-2 rounded-full bg-[#E8D4AE]" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.24em]
                text-[#E8D4AE]
              "
            >
              Campus Gallery
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
            viewport={{
              once: true,
            }}
            className="
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              md:text-6xl
            "
          >
            Moments That Shape Confident & Happy Learners
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
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-white/65
              md:text-lg
            "
          >
            Every activity, classroom interaction, celebration,
            and joyful moment at Shree Vimal Vidya Mandir is
            designed to help children learn, grow, participate,
            and thrive in a caring environment.
          </motion.p>
        </div>

        {/* Gallery Layout */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            md:grid-cols-12
          "
        >
          {galleryImages.map(
            (item, index) => (
              <GalleryCard
                key={index}
                item={item}
                index={index}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}