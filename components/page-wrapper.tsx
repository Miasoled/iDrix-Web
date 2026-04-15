"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface PageWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const PageWrapper = ({ children, delay = 0, ...props }: PageWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
    {...props}
  >
    {children}
  </motion.div>
);

type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";

const variants: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }
};

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = "fadeUp",
  duration = 0.7 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  direction?: AnimationType;
  duration?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={variants[direction]}
    transition={{ duration, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);
