import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { EMAIL, GITHUB, LINKEDIN, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export default function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
      data-section-num="07"
    >
      <div className="contact-card-wrapper glass reveal">
        <span className="section-label">GET IN TOUCH</span>
        <h2 className="contact-headline">
          LET&apos;S BUILD SOMETHING EXTRAORDINARY.
        </h2>
        <p className="contact-subtext">
          I am targeting full-time Software Engineering, Machine Learning, and
          Systems roles starting Spring or Summer 2027, when I complete my MS at
          Stony Brook. Reach out for roles, collaborations, or technical
          discussions.
        </p>

        <div className="contact-cta-block">
          <a href={`mailto:${EMAIL}`} className="btn-primary btn-large">
            <span>SEND AN EMAIL</span>
            <Send size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="contact-links-grid">
          <a href={`mailto:${EMAIL}`} className="contact-item-link">
            <Mail size={16} aria-hidden="true" />
            <span>{EMAIL}</span>
          </a>
          <a href={`tel:${PHONE_HREF}`} className="contact-item-link">
            <Phone size={16} aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item-link"
          >
            <Linkedin size={16} aria-hidden="true" />
            <span>LinkedIn ↗</span>
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item-link"
          >
            <Github size={16} aria-hidden="true" />
            <span>GitHub ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
