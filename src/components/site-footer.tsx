import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <Link to="/" className="nav-logo">
              ComplyStep
            </Link>
            <p>
              AI compliance platform helping UK regulated brands verify, monitor and optimise
              every promotional campaign.
            </p>
          </div>
          <div>
            <div className="f-col-title">Product</div>
            <div className="f-col">
              <Link to="/products">Pricing</Link>
              <Link to="/products" hash="comparison">
                Compare Solutions
              </Link>
              <Link to="/industries">Industries</Link>
            </div>
          </div>
          <div>
            <div className="f-col-title">Company</div>
            <div className="f-col">
              <Link to="/about">About Us</Link>
              <Link to="/about" hash="founder-section">
                Founder
              </Link>
              <Link to="/case-study">Case Study</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Book a Demo</Link>
            </div>
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
