import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { about } from "@/lib/content";
import { Reveal } from "../Reveal";
import { RichText } from "../RichText";

// Server-side: find a headshot in /public (any common extension) so the frame
// shows the photo the moment you drop a file in — no broken-image icon before.
function findHeadshot(): string | null {
  const dir = path.join(process.cwd(), "public");
  for (const name of ["farhan.jpg", "farhan.jpeg", "farhan.png", "farhan.webp"]) {
    try {
      if (fs.existsSync(path.join(dir, name))) return "/" + name;
    } catch {
      /* ignore */
    }
  }
  return null;
}

export function About() {
  const photo = findHeadshot();
  return (
    <section className="section wrap" id="about">
      <Reveal className="section-head">
        <span className="eyebrow">About</span>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-photo" index={0}>
          {/* Headshot rendered black & white via the .photo-frame grayscale
              filter in globals.css. Save your photo as public/farhan.jpg
              (or .png/.jpeg/.webp) and it appears automatically. */}
          <div className="photo-frame">
            {photo ? (
              <Image src={photo} alt="Farhan Aslam" fill sizes="300px" priority />
            ) : (
              <div className="ph">{about.photoPlaceholder}</div>
            )}
          </div>
          <div className="tagchip">
            <span className="dot" />
            {about.tag}
          </div>
        </Reveal>
        <Reveal className="about-body" index={1}>
          <p className="lead-line">
            <RichText value={about.lead} />
          </p>
          <p>{about.body}</p>
          <div className="about-facts">
            {about.facts.map((f) => (
              <div className="f" key={f.k}>
                <div className="k">{f.k}</div>
                <div className="v">{f.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
