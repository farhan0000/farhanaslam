import { contact } from "@/lib/content";
import { Reveal } from "../Reveal";
import { MailIcon, SocialIcon } from "../icons";

export function Contact() {
  return (
    <section className="section wrap contact" id="contact">
      <Reveal className="contact-card">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          {contact.eyebrow}
        </span>
        <h2 style={{ marginTop: 18 }}>
          {contact.heading[0]}
          <br />
          {contact.heading[1]}
        </h2>
        <p className="c-sub">{contact.sub}</p>
        <div className="contact-actions">
          <a href={`mailto:${contact.email}`} className="btn btn-primary">
            <MailIcon />
            {contact.email}
          </a>
          <a href={contact.phoneHref} className="btn btn-ghost">
            {contact.phone}
          </a>
        </div>
        <div className="contact-socials">
          {contact.socials.map((s) => (
            <a className="soc" href={s.href} target="_blank" rel="noopener" key={s.href}>
              <SocialIcon name={s.icon} />
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
