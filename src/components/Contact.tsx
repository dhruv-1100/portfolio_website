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
    <section className="section wrap" id="contact">
      <div className="glass contact-card reveal" data-glass>
        <div className="sheen" data-sheen aria-hidden="true" />
        <div className="contact-grid">
          <div>
            <div className="eyebrow">05 — CONTACT</div>
            <h2 className="contact-title">
              Full-time software, ML and systems roles from Spring 2027.
            </h2>
            <p className="contact-lede">
              Open to roles, collaborations, or a technical conversation about
              consensus, surrogate models, or on-device inference.
            </p>
            <div className="contact-inline">
              <a href={`mailto:${EMAIL}`} data-hover>
                {EMAIL}
              </a>
              <a href={`tel:${PHONE_HREF}`} data-hover>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="contact-actions">
            <CopyEmailButton />
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              data-magnetic
              data-hover
            >
              linkedin ↗
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              data-magnetic
              data-hover
            >
              resume.pdf ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
