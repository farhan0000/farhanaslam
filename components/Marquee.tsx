import { marqueeItems } from "@/lib/content";

export function Marquee() {
  // Duplicated track for a seamless -50% loop (pure CSS animation).
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
