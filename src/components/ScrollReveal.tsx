import { type ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
