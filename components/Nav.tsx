"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      setScrolled(y > 8);

      const line = y + vh * 0.4;
      let current = "";
      for (const id of ids) {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop <= line) current = id;
      }
      setActiveId(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="mono">FA</span>Farhan Aslam
        </a>
        <nav className="nav-links">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={activeId === l.href.slice(1) ? "active" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
