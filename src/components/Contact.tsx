"use client";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact" data-section-num="06">
      <div className="contact-card-wrapper glass reveal">
        <span className="section-label">GET IN TOUCH</span>
        <h2 className="contact-headline">LET&apos;S BUILD SOMETHING EXTRAORDINARY.</h2>
        <p className="contact-subtext">
          I am actively seeking opportunities in Software Engineering, Machine
          Learning, and Systems Development. Reach out for collaborations, roles, or
          technical discussions!
        </p>

        <div className="contact-cta-block">
          <a
            href="mailto:dhruv.012p@gmail.com"
            className="btn-primary btn-large"
          >
            <span>
              SEND AN EMAIL <i className="fa-solid fa-paper-plane"></i>
            </span>
          </a>
        </div>

        <div className="contact-links-grid">
          <a href="mailto:dhruv.012p@gmail.com" className="contact-item-link">
            <i className="fa-solid fa-envelope"></i>
            <span>dhruv.012p@gmail.com</span>
          </a>
          <a href="tel:+16319742620" className="contact-item-link">
            <i className="fa-solid fa-phone"></i>
            <span>+1 (631) 974-2620</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-patel-263523213/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item-link"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn Profile ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
