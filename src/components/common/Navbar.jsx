import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Corporate", path: "/about" },
  { label: "Shows", path: "/shows" },
  { label: "Inspire", path: "/services" },
  { label: "Clients", path: "/clients" },
  { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const onScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    } else {
      setScrolled(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleNav = (path) => {
    setActive(path);
    setMenuOpen(false);
    navigate(path);
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
              <li key={link.path}>
                <button
                  className={`navbar__link ${active === link.path ? "active" : ""}`}
                  onClick={() => handleNav(link.path)}
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
            key={link.path}
            className="navbar__mobile-link"
            onClick={() => handleNav(link.path)}
          >
            {link.label}
          </button>
        ))}
        <div className="navbar__mobile-cta">
          <button className="btn-ghost" onClick={() => handleNav("/contact")}>
            Get in Touch
          </button>
          <button className="btn-primary" onClick={() => handleNav("/shows")}> 
          </button>
        </div>
      </div>
    </>
  );
}
