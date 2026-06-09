import type { IconName } from "@/lib/content";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SkillIcon({ name }: { name: IconName }) {
  switch (name) {
    case "frontend":
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <rect x="6" y="2" width="12" height="20" rx="2.5" />
          <path d="M11 18h2" />
        </svg>
      );
    case "styling":
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <circle cx="13.5" cy="6.5" r="2.5" />
          <circle cx="6.5" cy="11.5" r="2.5" />
          <circle cx="17" cy="14" r="2.5" />
          <path d="M12 22c5.5 0 10-1 10-6 0-2-1-3-2-3" />
        </svg>
      );
    case "state":
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <path d="M7 7h.01M7 17h.01" />
        </svg>
      );
    case "tooling":
      return (
        <svg viewBox="0 0 24 24" {...stroke}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z" />
        </svg>
      );
  }
}

export function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalArrow() {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.2}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg className="moon" viewBox="0 0 24 24" {...stroke}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg className="sun" viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.52.1.71-.23.71-.5v-1.74c-2.9.63-3.52-1.4-3.52-1.4-.47-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.05.08 1.6 1.08 1.6 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.66-1.4-2.31-.26-4.74-1.16-4.74-5.14 0-1.13.4-2.06 1.07-2.79-.1-.27-.46-1.32.1-2.75 0 0 .87-.28 2.85 1.07a9.9 9.9 0 0 1 5.2 0c1.97-1.35 2.84-1.07 2.84-1.07.57 1.43.21 2.48.1 2.75.67.73 1.07 1.66 1.07 2.79 0 3.99-2.43 4.87-4.75 5.13.38.32.71.95.71 1.92v2.85c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

export function SocialIcon({ name }: { name: "github" | "linkedin" }) {
  return name === "github" ? <GitHubIcon /> : <LinkedInIcon />;
}
