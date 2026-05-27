import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FOOTER_LINKS = {
  Company: ["About Us", "Our Story", "Leadership Team", "Press Room", "Awards"],
  Productions: [
    "Web Series",
    "Feature Films",
    "Television",
    "Documentaries",
    "Short Films",
  ],
  Partners: [
    "OTT Platforms",
    "Brand Solutions",
    "Distribution",
    "Co-Productions",
    "Acquisitions",
  ],
};

const SOCIAL_LINKS = [
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "YouTube", Icon: YouTubeIcon, href: "#" },
  { label: "Twitter/X", Icon: TwitterIcon, href: "#" },
  { label: "LinkedIn", Icon: LinkedInIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Brand Column */}
        <div>
          <div className="footer__brand-name">
            Zoom<span>Max</span>
          </div>
          <div className="footer__brand-tag">Premium Studio</div>
          <p className="footer__brand-desc">
            Crafting extraordinary stories for extraordinary audiences. Where
            every frame is a brushstroke and every series is a masterpiece.
          </p>
          <div className="footer__socials">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social-link"
                aria-label={s.label}
              >
                <s.Icon fontSize="medium" />
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <h4 className="footer__col-title">{title}</h4>
            <ul className="footer__links">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer__link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="footer__col-title">Stay Updated</h4>
          <p className="footer__newsletter-desc">
            Get the latest from ZoomMax — new releases, behind-the-scenes
            content, and industry insights.
          </p>
          <div className="footer__newsletter-form">
            <input
              type="email"
              className="footer__newsletter-input"
              placeholder="your@email.com"
            />
            <button className="footer__newsletter-btn" aria-label="Subscribe">
              <ArrowForwardIosIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} ZoomMax Studio. All rights reserved.
        </p>
        <div className="footer__legal-links">
          <a href="#" className="footer__legal-link">
            Privacy Policy
          </a>
          <a href="#" className="footer__legal-link">
            Terms of Service
          </a>
          <a href="#" className="footer__legal-link">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
