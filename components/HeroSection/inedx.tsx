import React from "react";
import HeroSectionContet from "./HeroSectionContet";
import HeroSectionSearch from "./HeroSectionSearch";

function HeroSection() {
  return (
    <section
      className="flex items-center flex-col h-screen justify-center md:flex-row w-full"
      id="home"
    >
      <HeroSectionSearch />
      <HeroSectionContet />
    </section>
  );
}

export default HeroSection;
