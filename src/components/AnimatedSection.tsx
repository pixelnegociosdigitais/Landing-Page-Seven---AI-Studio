import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className = '', id, delay = 0 }: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={shouldReduceMotion ? { duration: 0 } : { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Smooth custom easeOut
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
