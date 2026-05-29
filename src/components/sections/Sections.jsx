import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CampaignIcon from "@mui/icons-material/Campaign";
import EmailIcon from "@mui/icons-material/Email";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";
import SendIcon from "@mui/icons-material/Send";
import TheatersIcon from "@mui/icons-material/Theaters";
import ThumbsUpIcon from "@mui/icons-material/TrendingUp";
import WifiIcon from "@mui/icons-material/Wifi";

// Stats Strip
export function StatsStrip() {
  const stats = [
    { number: "200+", label: "Shows Produced" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Awards Won" },
    { number: "1B+", label: "Views Worldwide" },
  ];
  return (
    <div className="stats-strip">
      {stats.map((s) => (
        <div key={s.label} className="stat-item">
          <div className="stat-item__number">{s.number}</div>
          <div className="stat-item__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// Services
export function Services() {
  const services = [
    {
      icon: <LocalMoviesIcon fontSize="large" />,
      title: "Content Production",
      desc: "End-to-end production of web series, feature films, and television content that resonates with modern audiences.",
    },
    {
      icon: <WifiIcon fontSize="large" />,
      title: "OTT Distribution",
      desc: "Strategic partnerships with every major streaming platform to ensure your story reaches the right audience at the right time.",
    },
    {
      icon: <TheatersIcon fontSize="large" />,
      title: "Talent Management",
      desc: "We represent and develop exceptional creative talent — directors, writers, actors — building careers that last.",
    },
    {
      icon: <CampaignIcon fontSize="large" />,
      title: "Brand Solutions",
      desc: "Integrated branded content and IP partnerships that connect brands authentically with engaged audiences.",
    },
    {
      icon: <PublicIcon fontSize="large" />,
      title: "Digital Strategy",
      desc: "Data-driven digital campaign management that amplifies reach and builds lasting audience communities.",
    },
    {
      icon: <EmojiEventsIcon fontSize="large" />,
      title: "Awards & Festivals",
      desc: "We actively seek recognition for outstanding work, submitting our productions to prestigious festivals globally.",
    },
  ];
  return (
    <section id="services" className="section section--gray">
      <div className="section__header">
        <span className="section__eyebrow">What We Do</span>
        <h2 className="section__title">
          Full-spectrum <em>creative</em> studio
        </h2>
        <p className="section__subtitle">
          From concept to credits — we handle every stage of the creative
          process with precision and passion.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Clients Marquee
export function Clients() {
  const clients = [
    "Disney+ Hotstar",
    "Netflix India",
    "Amazon Prime",
    "ZEE5",
    "SonyLIV",
    "Voot",
    "MX Player",
    "Jio Cinema",
    "Colors TV",
    "Star Plus",
    "Disney+ Hotstar",
    "Netflix India",
    "Amazon Prime",
    "ZEE5",
    "SonyLIV",
    "Voot",
    "MX Player",
    "Jio Cinema",
    "Colors TV",
    "Star Plus",
  ];
  return (
    <section id="clients" className="section section--dark">
      <div className="section__header">
        <span className="section__eyebrow">Trusted By</span>
        <h2 className="section__title">
          Our <em>platform</em> partners
        </h2>
      </div>
      <div className="clients-marquee-wrap">
        <div className="clients-marquee">
          {clients.map((c, i) => (
            <span key={i} className="client-logo">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// About
export function About() {
  const features = [
    {
      icon: <AutoStoriesIcon fontSize="large" />,
      title: "Story-First Approach",
      desc: "Every project begins with a compelling narrative — we never compromise on the strength of the story.",
    },
    {
      icon: <HandshakeIcon fontSize="large" />,
      title: "Creator Partnerships",
      desc: "We co-develop with visionary creators, bringing resources and expertise to amplify their unique voice.",
    },
    {
      icon: <ThumbsUpIcon fontSize="large" />,
      title: "Data-Informed Creativity",
      desc: "Audience insights guide our creative decisions without ever diluting artistic integrity.",
    },
  ];
  return (
    <section id="about" className="section section--gray">
      <div className="about-grid">
        <div className="about-visual">
          <div
            className="about-visual__main"
            style={{
              background:
                "linear-gradient(145deg, #1a0808 0%, #0d0808 50%, #1a1005 100%)",
              borderRadius: "4px",
            }}
          />
          <div className="about-visual__accent" />
          <div className="about-visual__badge">
            <span className="about-visual__badge-number">15+</span>
            <span className="about-visual__badge-label">
              Years of Excellence
            </span>
          </div>
        </div>
        <div className="about-content">
          <span className="section__eyebrow">About ZoomMax</span>
          <h2 className="section__title">
            Where vision meets <em>execution</em>
          </h2>
          <p className="section__subtitle">
            ZoomMax Studio is a premium content house redefining Indian
            storytelling for the global stage. We bring together the finest
            creative talent and the most advanced production capabilities to
            craft experiences that endure.
          </p>
          <div className="about-content__list">
            {features.map((f) => (
              <div key={f.title} className="about-feature">
                <div className="about-feature__icon">{f.icon}</div>
                <div className="about-feature__text">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <button className="btn-primary">Discover Our Story</button> */}
        </div>
      </div>
    </section>
  );
}

// Testimonials
export function Testimonials() {
  const testimonials = [
    {
      quote:
        "ZoomMax brought our vision to life with a level of craft and care we've never experienced. The series broke viewership records.",
      name: "Priya Sharma",
      role: "Director, Radiant Films",
      initial: "P",
    },
    {
      quote:
        "Their understanding of storytelling — combined with sharp production instincts — makes ZoomMax the go-to partner for serious creative work.",
      name: "Arjun Mehta",
      role: "Head of Content, ZEE5",
      initial: "A",
    },
    {
      quote:
        "Working with ZoomMax was transformative. They don't just produce content — they build cultural moments.",
      name: "Kavya Reddy",
      role: "Executive Producer, Disney+ Hotstar",
      initial: "K",
    },
  ];
  return (
    <section className="section section--dark">
      <div className="section__header">
        <span className="section__eyebrow">What They Say</span>
        <h2 className="section__title">
          Voices that <em>trust</em> us
        </h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.name} className="testimonial-card">
            <div className="testimonial-card__quote">"</div>
            <p className="testimonial-card__text">{t.quote}</p>
            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">{t.initial}</div>
              <div>
                <div className="testimonial-card__name">{t.name}</div>
                <div className="testimonial-card__role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// CTA / Career Band
export function CtaBand() {
  return (
    <div id="career" className="cta-band">
      <div className="cta-band__text">
        <h2>Ready to create something extraordinary?</h2>
        <p>
          We're always looking for exceptional storytellers, directors, and
          producers to join the ZoomMax family.
        </p>
      </div>
      {/* <div className="cta-band__actions">
        <button className="btn-ghost">View Openings</button>
        <button className="btn-primary">Apply Now</button>
      </div> */}
    </div>
  );
}

// Contact
export function Contact() {
  return (
    <section id="contact" className="section section--gray">
      <div className="section__header">
        <span className="section__eyebrow">Get In Touch</span>
        <h2 className="section__title">
          Let's <em>create</em> together
        </h2>
        <p className="section__subtitle">
          Have a story worth telling? A project ready to pitch? We'd love to
          hear from you.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          {[
            {
              icon: <LocationOnIcon fontSize="large" />,
              label: "Studio Address",
              value: "XXXXX House, XXXXX West\nXXXXX City, XXXXXXX 000000",
            },
            {
              icon: <PhoneIcon fontSize="large" />,
              label: "Phone",
              value: "+XX XXXXX XXXXX\n+XX XXXXX XXXXX",
            },
            {
              icon: <EmailIcon fontSize="large" />,
              label: "Email",
              value: "organisation@email.com\ncontact@organisation.com",
            },
            {
              icon: <AccessTimeIcon fontSize="large" />,
              label: "Office Hours",
              value: "Mon – Fri: XX:XX AM – XX:XX PM\nSat: XX:XX AM – XX:XX PM",
            },
          ].map((item) => (
            <div key={item.label} className="contact-info__item">
              <div className="contact-info__icon">{item.icon}</div>

              <div>
                <div className="contact-info__label">{item.label}</div>

                <div className="contact-info__value">
                  {item.value.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-field">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>

            <div className="form-field">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="organisation@email.com" />
            </div>

            <div className="form-field">
              <label>Phone</label>
              <input type="tel" placeholder="+XX XXXXX XXXXX" />
            </div>
          </div>

          <div className="form-field">
            <label>Enquiry Type</label>

            <select>
              <option value="">Select a category...</option>
              <option>Production Partnership</option>
              <option>Brand Collaboration</option>
              <option>Career Opportunity</option>
              <option>Media & Press</option>
              <option>General Enquiry</option>
            </select>
          </div>

          <div className="form-field">
            <label>Message</label>

            <textarea placeholder="Tell us about your project or enquiry..." />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{
              alignSelf: "flex-start",
              padding: "0.9rem 2.5rem",
              fontSize: "0.85rem",
            }}
          >
            Send Message <SendIcon fontSize="small" />
          </button>
        </form>
      </div>
    </section>
  );
}
