import CopyEmailButton from "./CopyEmailButton";
import {
  EMAIL,
  LINKEDIN,
  PHONE_DISPLAY,
  PHONE_HREF,
  RESUME_PATH,
} from "@/lib/site";

export default function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div className="contact-card reveal">
        <div>
          <h2 className="contact-title">
            Targeting full-time software, ML and systems roles from Spring 2027.
          </h2>
          <p className="contact-lede">
            Open to roles, collaborations, or a technical conversation about
            consensus, surrogate models or on-device inference.
          </p>
          <div className="contact-inline">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`tel:${PHONE_HREF}`}>{PHONE_DISPLAY}</a>
          </div>
        </div>

        <div className="contact-actions">
          <CopyEmailButton />
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            linkedin ↗
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            resume.pdf ↗
          </a>
        </div>
      </div>
    </section>
  );
}
