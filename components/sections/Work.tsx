import { projects, workIntro } from "@/lib/content";
import { Reveal } from "../Reveal";
import { RichText } from "../RichText";
import { BrowserFrame } from "../BrowserFrame";
import { PhoneFrames } from "../PhoneFrame";
import { ExternalArrow } from "../icons";

export function Work() {
  return (
    <section className="section wrap" id="work">
      <Reveal className="section-head">
        <span className="eyebrow">{workIntro.eyebrow}</span>
        <h2>{workIntro.heading}</h2>
        <p className="lead">{workIntro.lead}</p>
      </Reveal>

      {projects.map((p) => (
        <Reveal as="article" className={`project${p.flip ? " flip" : ""}`} key={p.title}>
          <div className="project-info">
            <span className="p-index">{p.index}</span>
            <h3>{p.title}</h3>
            <div className="p-role">{p.role}</div>
            <p className="p-desc">
              <RichText value={p.desc} />
            </p>
            <div className="p-stack">
              {p.stack.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <a className="p-link" href={p.href} target="_blank" rel="noopener">
              {p.linkLabel}
              <ExternalArrow />
            </a>
          </div>
          <div className="project-visual">
            {p.visual.kind === "browser" ? (
              <BrowserFrame
                domain={p.visual.domain}
                placeholder={p.visual.placeholder}
                src={p.visual.src}
                alt={`${p.title} — ${p.visual.domain}`}
              />
            ) : (
              <PhoneFrames screens={p.visual.screens} />
            )}
          </div>
        </Reveal>
      ))}
    </section>
  );
}
