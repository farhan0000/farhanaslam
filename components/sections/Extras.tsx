import { education, goodToKnow } from "@/lib/content";
import { Reveal } from "../Reveal";

export function Extras() {
  return (
    <section className="section wrap" id="more">
      <div className="extras">
        <Reveal className="extra-card" index={0}>
          <div className="ec-lab">{education.label}</div>
          <h3>{education.degree}</h3>
          <div className="ec-sub">{education.sub}</div>
          <div className="ec-meta">{education.meta}</div>
          <p className="ec-note">{education.note}</p>
        </Reveal>
        <Reveal className="extra-card" index={1}>
          <div className="ec-lab">{goodToKnow.label}</div>
          {goodToKnow.rows.map((row) => (
            <div className="extra-row" key={row.k}>
              <span className="k">{row.k}</span>
              <span className="v">{row.v}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
