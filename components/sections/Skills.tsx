import { skills, skillsIntro } from "@/lib/content";
import { Reveal } from "../Reveal";
import { SkillIcon } from "../icons";

export function Skills() {
  return (
    <section className="section wrap" id="skills">
      <Reveal className="section-head">
        <span className="eyebrow">{skillsIntro.eyebrow}</span>
        <h2>{skillsIntro.heading}</h2>
        <p className="lead">{skillsIntro.lead}</p>
      </Reveal>
      <div className="skills-grid">
        {skills.map((card, i) => (
          <Reveal className="skill-card" index={i} key={card.title}>
            <div className="sc-top">
              <span className="sc-ico">
                <SkillIcon name={card.icon} />
              </span>
              <h3>{card.title}</h3>
            </div>
            <div className="chips">
              {card.chips.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
