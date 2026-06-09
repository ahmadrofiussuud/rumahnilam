import { useState, useEffect, useRef } from "react";
import { Variants, useMotionValue, useSpring, useInView } from "framer-motion";

/**
 * Shared transition defaults configuration.
 */
export const animationConfig = {
  duration: 0.5,
  ease: "easeOut",
  spring: {
    type: "spring" as const,
    stiffness: 70,
    damping: 15,
  },
};

/**
 * Fade up animation variant.
 * Animates from bottom (y: 24, opacity: 0) to normal (y: 0, opacity: 1).
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Fade in animation variant.
 * Animates opacity from 0 to 1.
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/**
 * Stagger container animation variant.
 * Configures kids elements to stagger their entries.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/**
 * Slide in from left animation variant.
 * Animates from x: -40 with opacity 0.
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Slide in from right animation variant.
 * Animates from x: 40 with opacity 0.
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Scale in animation variant.
 * Animates scale from 0.92 to 1 with opacity, ideal for cards.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Custom hook utility for count up numbers in Framer Motion.
 * Animates from 0 to the target value and returns a formatted locale string.
 *
 * @param value - The target number to count up to.
 * @param duration - The animation duration in seconds.
 * @returns The formatted string.
 */
export function useCountUp(value: number, duration: number = 2): string {
  const [display, setDisplay] = useState("0");
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 15 + duration * 2,
    stiffness: 80 - duration * 5,
  });

  useEffect(() => {
    motionValue.set(value);

    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(
        Math.floor(latest).toLocaleString("id-ID", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
    });

    return () => unsubscribe();
  }, [value, motionValue, springValue]);

  return display;
}

/**
 * Re-export of useCountUp hook for backwards compatibility/requested naming.
 *
 * @param value - The target number to count up to.
 * @param duration - The animation duration in seconds.
 * @returns The formatted string.
 */
// eslint-disable-next-line react-hooks/rules-of-hooks
export const countUpAnimation = useCountUp;


/**
 * Custom scroll reveal hook using Intersection Observer amount trigger.
 *
 * @param threshold - The percentage of visibility required (defaults to 0.15).
 * @returns Ref container and status boolean indicating if scrolled into view.
 */
export function useScrollReveal(threshold: number = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  return { ref, isInView };
}

/**
 * Infinite looping float animation variant.
 * Moves element subtly up and down (y: 0 -> -8 -> 0) continuously.
 */
export const botanicalFloat: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
