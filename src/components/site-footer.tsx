import { Link } from "@tanstack/react-router";

const SOCIALS = [
  { label: "LinkedIn", icon: "fa-linkedin-in", href: "https://www.linkedin.com/company/complystep" },
  { label: "X", icon: "fa-x-twitter", href: "https://x.com/complystep" },
  { label: "Facebook", icon: "fa-facebook-f", href: "https://www.facebook.com/complystep" },
  { label: "Instagram", icon: "fa-instagram", href: "https://www.instagram.com/complystep" },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <Link to="/" className="nav-logo" aria-label="ComplyStep home">
              <img
                src="/complystep-logo.png"
                alt="ComplyStep"
                width={1061}
                height={229}
                loading="lazy"
                style={{ height: 36, width: "auto", display: "block", maxWidth: "100%" }}
              />
            </Link>
            <p>
              AI compliance platform helping UK regulated brands verify, monitor and optimise
              every promotional campaign.
            </p>
          </div>
          <div>
            <div className="f-col-title">Industries</div>
            <div className="f-col">
              <Link to="/industries" hash="seg-finance">
                Financial Advisors
              </Link>
              <Link to="/industries" hash="seg-healthcare">
                Private Healthcare
              </Link>
              <Link to="/industries" hash="seg-legal">
                Legal Services
              </Link>
              <Link to="/industries" hash="seg-gambling">
                Gambling &amp; Affiliates
              </Link>
              <Link to="/industries">All Industries</Link>
            </div>
          </div>
          <div>
            <div className="f-col-title">Company</div>
            <div className="f-col">
              <Link to="/about">About Us</Link>
              <Link to="/about" hash="founder-section">
                Founder
              </Link>
              <Link to="/blog">Blog</Link>
              <Link to="/case-study">Case Studies</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
          <div>
            <div className="f-col-title">Connect Us</div>
            <div className="f-col f-social">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener">
                  <i className={`fab ${s.icon}`} /> {s.label}
                </a>
              ))}
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <p>© 2026 ComplyStep · London, UK · Founded by Janki Rathod</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/regulatory-compliance">Regulatory Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
