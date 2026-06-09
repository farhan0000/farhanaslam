"use client";

import { useCallback } from "react";
import { MoonIcon, SunIcon } from "./icons";

const THEME_KEY = "farhan-theme";

export function ThemeToggle() {
  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <button
      className="icon-btn"
      onClick={toggle}
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      <MoonIcon />
      <SunIcon />
    </button>
  );
}
