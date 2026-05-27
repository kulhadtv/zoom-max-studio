import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Corporate", href: "#about" },
  { label: "Shows", href: "#shows" },
  { label: "Inspire", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <div className="navbar__logo">
            <span className="navbar__logo-top">Premium Studio</span>
            <span className="navbar__logo-main">
              Zoom<span>Max</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  className={`navbar__link ${active === link.href ? "active" : ""}`}
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            className="navbar__mobile-link"
            onClick={() => handleNav(link.href)}
          >
            {link.label}
          </button>
        ))}
        <div className="navbar__mobile-cta">
          <button className="btn-ghost" onClick={() => handleNav("#contact")}>
            Get in Touch
          </button>
          <button className="btn-primary" onClick={() => handleNav("#shows")}>
            Our Work
          </button>
        </div>
      </div>
    </>
  );
}
