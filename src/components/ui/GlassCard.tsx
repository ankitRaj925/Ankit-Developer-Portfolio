import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.5 }}
      className={`
        glass-panel 
        rounded-2xl 
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;