import { useState, useEffect, useCallback } from "react";
import img2 from "../../assets/cos.jpg";
import img1 from "../../assets/as3.jpg";
import img4 from "../../assets/stranger-things-season-5-netflix-posters.webp";
import img3 from "../../assets/tlw.jpg";

const SLIDES = [
  {
    id: 1,
    tag: "Top Trending",
    title: "Stranger Things\nSeason 5",
    highlight: "Upside Down",
    description:
      "Mysteries deepen in Hawkins as the final battle against the Upside Down begins. Friendship, fear, and supernatural chaos collide in Netflix’s biggest sci-fi thriller.",
    platforms: ["Netflix", "StreamMax"],
    bg: "linear-gradient(135deg, #120202 0%, #240404 40%, #050505 100%)",
    image: img4,
  },
  {
    id: 2,
    tag: "Now Streaming",
    title: "Aspirants\nSeason 3",
    highlight: "Ishq",
    description:
      "A modern love story unfolding across screens — raw, real, and deeply human. Produced exclusively for Disney+ Hotstar.",
    platforms: ["Disney+ Hotstar", "Inspire TV"],
    bg: "linear-gradient(135deg, #1a0a0a 0%, #2d1515 40%, #1a1005 100%)",
    image: img1,
  },

  {
    id: 3,
    tag: "New Series",
    title: "City of\nShadows",
    highlight: "Shadows",
    description:
      "An intense crime thriller set in the underbelly of a megacity. Where every street holds a secret, and no one is innocent.",
    platforms: ["ZEE5", "Prime Video"],
    bg: "linear-gradient(135deg, #0a0a1a 0%, #151528 40%, #0a0e1a 100%)",
    // put your image file at `public/images/city-of-shadows.jpg`
    image: img2,
  },
  {
    id: 4,
    tag: "Award Winner",
    title: "Roots &\nWings",
    highlight: "Wings",
    description:
      "A multigenerational saga of family, sacrifice, and the dreams we carry across lifetimes. Winner of 7 National Awards.",
    platforms: ["SonyLIV", "Doordarshan"],
    bg: "linear-gradient(135deg, #0a1a0e 0%, #152818 40%, #1a1005 100%)",
    image: img3,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 100);
    },
    [current, isTransitioning],
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section id="home" className="hero">
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`hero__slide ${i === current ? "active" : ""}`}
        >
          {s.image && (
            <img
              src={s.image}
              alt={String(s.title).replace(/\n/g, " ")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 6,
                objectFit: "cover",
                boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
              }}
            />
          )}
          {/* <div className="hero__bg" style={{ background: s.bg }} /> */}
          <div className="hero__overlay" />
        </div>
      ))}

      <div className="hero__content">
        <div className="hero__text">
          <span className="hero__tag">{slide.tag}</span>
          <h1 className="hero__title">
            {slide.title.split("\n").map((line, i) =>
              i === 1 ? (
                <span key={i}>
                  <em>{line}</em>
                </span>
              ) : (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ),
            )}
          </h1>
          <p className="hero__desc">{slide.description}</p>
        </div>

        <div className="hero__badges">
          {slide.platforms.map((p) => (
            <div key={p} className="hero__platform-badge">
              <span className="hero__platform-dot" />
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="hero__arrows">
        <button className="hero__arrow" onClick={prev} aria-label="Previous">
          ‹
        </button>
        <button className="hero__arrow" onClick={next} aria-label="Next">
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="hero__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
