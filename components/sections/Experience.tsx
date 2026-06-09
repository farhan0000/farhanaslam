import { experience, experienceIntro } from "@/lib/content";
import { Reveal } from "../Reveal";

export function Experience() {
  return (
    <section className="section wrap" id="experience">
      <Reveal className="section-head">
        <span className="eyebrow">{experienceIntro.eyebrow}</span>
        <h2>{experienceIntro.heading}</h2>
      </Reveal>
      <Reveal>
        {experience.map((item) => (
          <div className="exp-item" key={item.company}>
            <div>
              <div className="exp-when">{item.when}</div>
              <div className="exp-where">{item.where}</div>
            </div>
            <div>
              <div className="exp-role">{item.role}</div>
              <div className="exp-co">
                <b>{item.company}</b>
              </div>
              <ul className="exp-list">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="exp-stack">
                {item.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
