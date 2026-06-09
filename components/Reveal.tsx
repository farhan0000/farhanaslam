"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger index — delay = min(index * 65, 260)ms, matching the reference. */
  index?: number;
  as?: ElementType;
  className?: string;
}

export function Reveal({ children, index = 0, as, className }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    // Already in view on mount.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delay = `${Math.min(index * 65, 260)}ms`;

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? " in" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </Tag>
  );
}
