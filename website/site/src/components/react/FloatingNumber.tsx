import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  children: string;
}

export default function FloatingNumber({ children }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.p
      animate={reduced ? {} : { y: ['-4px', '4px'] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(4rem, 10vw, 8rem)',
        fontWeight: 400,
        color: 'var(--accent)',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        marginBottom: '1.5rem',
        display: 'block',
      }}
    >
      {children}
    </motion.p>
  );
}
