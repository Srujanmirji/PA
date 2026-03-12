import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function StatItem({ value, label, suffix = "", delay = 0 }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001
  });
  
  const displayValue = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        spring.set(value);
      }, delay * 1000);
    }
  }, [isInView, value, spring, delay]);

  return (
    <div ref={ref} className="text-center p-6 glass-panel rounded-2xl border-white/5 hover:border-[#00f0ff]/30 transition-colors duration-500 group">
      <div className="text-4xl md:text-6xl font-black font-heading mb-2 flex items-center justify-center">
        <motion.span className="text-white group-hover:text-[#00f0ff] transition-colors duration-500">
          {displayValue}
        </motion.span>
        <span className="text-[#00f0ff] ml-1">{suffix}</span>
      </div>
      <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors duration-500">
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    { value: 150, label: "Projects Completed", suffix: "+" },
    { value: 12, label: "Years Experience", suffix: "+" },
    { value: 25, label: "Design Awards", suffix: "" },
    { value: 98, label: "Client Satisfaction", suffix: "%" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {stats.map((stat, index) => (
        <StatItem 
          key={index} 
          value={stat.value} 
          label={stat.label} 
          suffix={stat.suffix} 
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
