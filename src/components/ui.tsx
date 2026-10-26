import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Stars: React.FC<{ count?: number; className?: string }> = ({ count = 5, className = 'w-4 h-4' }) => (
  <div className="flex items-center gap-0.5" aria-label={`${count} stelle su 5`}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className={`${className} text-star fill-star`} />
    ))}
  </div>
);

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeader: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  dark?: boolean;
}> = ({ eyebrow, title, description, align = 'center', dark = false }) => (
  <Reveal className={`max-w-2xl space-y-4 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    <span className={`text-xs font-bold uppercase tracking-[0.18em] ${dark ? 'text-star' : 'text-brand'}`}>{eyebrow}</span>
    <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.08] ${dark ? 'text-white' : 'text-ink'}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-ink-soft'}`}>{description}</p>
    )}
  </Reveal>
);

export const formatEuro = (value: number) =>
  value.toLocaleString('it-IT', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });
