import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] =
    useState(false);

  const mouseX =
    useMotionValue(-100);

  const mouseY =
    useMotionValue(-100);

  const smoothX = useSpring(
    mouseX,
    {
      damping: 24,
      stiffness: 220,
      mass: 0.45,
    }
  );

  const smoothY = useSpring(
    mouseY,
    {
      damping: 30,
      stiffness: 320,
      mass: 0.35,
    }
  );

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    }

    const handleMouseMove = (
      e
    ) => {
      mouseX.set(e.clientX);

      mouseY.set(e.clientY);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          select-none
        "
      >
        <span className="text-3xl">
          ✏️
        </span>
      </div>
    </motion.div>
  );
}