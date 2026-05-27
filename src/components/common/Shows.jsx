import img1 from "../../assets/shows/Dear_Ishq.jpg";
import img2 from "../../assets/shows/br.jpg";
import img3 from "../../assets/shows/gs.jpg";
import img4 from "../../assets/shows/lbr.jpg";
import img5 from "../../assets/shows/Ghum_Hai_Kisikey_Pyaar_Meiin.jpg";
import img6 from "../../assets/shows/bhagya_laksmi.webp";
// import img1 from "../../assets/shows/Dear_Ishq.jpg";


const SHOWS = [
  {
    id: 1,
    title: "Dear Ishq",
    genre: "Romance · Drama",
    platform: "Disney+ Hotstar",
    featured: true,
    bg: "linear-gradient(160deg, #2d1515 0%, #1a0808 100%)",
    year: "2023",
    image: img1,
  },
  {
    id: 2,
    title: "Broken Signals",
    genre: "Crime · Mystery",
    platform: "Prime Video",
    featured: false,
    bg: "linear-gradient(160deg, #0d1b2a 0%, #050b12 100%)",
    year: "2024",
    image: img2,
  },
  {
    id: 3,
    title: "Golden Streets",
    genre: "Drama · Family",
    platform: "SonyLIV",
    featured: false,
    bg: "linear-gradient(160deg, #3a1f0b 0%, #140903 100%)",
    year: "2023",
    image: img3,
  },
  {
    id: 4,
    title: "Love Beyond Rain",
    genre: "Romance · Musical",
    platform: "Disney+ Hotstar",
    featured: false,
    bg: "linear-gradient(160deg, #401828 0%, #16060d 100%)",
    year: "2025",
    image: img4,
  },
   {
    id: 5,
    title: "Ghum Hai Kisikey Pyaar Meiin",
    genre: "Romance · Drama",
    platform: "Star Plus",
    featured: false,
    bg: "linear-gradient(160deg, #2b1028 0%, #10040f 100%)",
    year: "2024",
    image: img5,
  },
  {
    id: 6,
    title: "Bhagya Lakshmi",
    genre: "Drama · Family",
    platform: "Zee TV",
    featured: false,
    bg: "linear-gradient(160deg, #2a2208 0%, #120d02 100%)",
    year: "2023",
    image: img6,
  },
];

export default function Shows() {
  return (
    <section id="shows" className="section section--dark">
      <div className="section__header">
        <span className="section__eyebrow">Our Productions</span>
        <h2 className="section__title">
          Stories that <em>move</em> millions
        </h2>
        <p className="section__subtitle">
          From intimate dramas to sweeping epics — every production is a
          testament to our craft and commitment to excellence.
        </p>
      </div>

      <div className="shows-grid">
        {SHOWS.map((show) => (
          <div
            key={show.id}
            className={`show-card ${show.featured ? "show-card--featured" : ""}`}
          >
            {show.image ? (
              <img
                className="show-card__img"
                src={show.image}
                alt={show.title}
              />
            ) : (
              <div
                className="show-card__img"
                style={{
                  background: show.bg,
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
            <div className="show-card__overlay" />
            <div className="show-card__info">
              <span className="show-card__platform">{show.platform}</span>
              <h3 className="show-card__title">{show.title}</h3>
              <p className="show-card__genre">
                {show.genre} · {show.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
