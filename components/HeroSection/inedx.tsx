import React from "react";
import HeroSectionContet from "./HeroSectionContet";
import HeroSectionSearch from "./HeroSectionSearch";

function HeroSection() {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full" id="home">
      <HeroSectionSearch />
      <HeroSectionContet />
    </section>
  );
}

export default HeroSection;
