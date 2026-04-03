// src/components/ui/AnimatedFadeIn.tsx
import React, { ReactNode } from "react";
import { motion, Variants, Transition } from "framer-motion";
import { useAnimation } from "@/hooks/AnimationContext";

interface AnimatedFadeInProps {
  children: ReactNode;
}

// Smooth cubic-bezier for buttery ease
const fadeUpTransition: Transition = {
  duration: 0.8,          // slower animation
  ease: [0.33, 1, 0.68, 1], // smooth ease-out-in
};

// Container for staggered children
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // delay between children
    },
  },
};

// Individual items
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: fadeUpTransition },
};

const AnimatedFadeIn = ({ children }: AnimatedFadeInProps) => {
  const { animationsEnabled } = useAnimation();

  if (!animationsEnabled) return <>{children}</>;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // animate when 20% visible
      variants={containerVariants}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedFadeIn;