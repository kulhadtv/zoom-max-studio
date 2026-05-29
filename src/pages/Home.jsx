import React from "react";
import Hero from "../components/sections/Hero";
import {
  About,
  Clients,
  Contact,
  CtaBand,
  Services,
  StatsStrip,
  Testimonials,
} from "../components/sections/Sections";
import Shows from "../components/common/Shows";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <StatsStrip />
      <Shows />
      <Services />
      <About />
      <Clients />
      <Testimonials />
      <CtaBand />
      <Contact /> */}
    </div>
  );
};

export default Home;
