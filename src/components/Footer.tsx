"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          &copy; 2026 Dhruv Patel. Designed & engineered with restraint.
        </p>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/dhruv-patel-263523213/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:dhruv.012p@gmail.com" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
