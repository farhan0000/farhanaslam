import { hero } from "@/lib/content";
import { Reveal } from "../Reveal";
import { Marquee } from "../Marquee";
import { RichText } from "../RichText";
import { ArrowRight } from "../icons";

export function Hero() {
  return (
    <section className="hero wrap" id="hero">
      <div className="hero-inner">
        <Reveal as="span" className="status" index={0}>
          <span className="pulse" />
          {hero.status}
        </Reveal>
        <Reveal as="h1" index={1}>
          {hero.firstName}
          <br />
          <span className="grad">{hero.lastName}</span>
        </Reveal>
        <Reveal className="role" index={2}>
          {hero.role}
        </Reveal>
        <Reveal as="p" className="pitch" index={3}>
          <RichText value={hero.pitch} />
        </Reveal>
        <Reveal className="hero-actions" index={4}>
          <a href="#work" className="btn btn-primary">
            View selected work
            <ArrowRight />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </Reveal>
        <Reveal className="hero-meta" index={0}>
          {hero.meta.map((m) => (
            <div className="m" key={m.l}>
              <span className="n">{m.n}</span>
              <span className="l">{m.l}</span>
            </div>
          ))}
        </Reveal>
      </div>
      <Reveal index={1}>
        <Marquee />
      </Reveal>
    </section>
  );
}
