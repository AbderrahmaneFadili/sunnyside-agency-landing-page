import React from "react";
import { HeroWrapper, HeroHeading, ArrowDown } from "./Hero.styles";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroHeading>We are creatives</HeroHeading>
      <a href="#sections">
        <ArrowDown src={require("../../images/icon-arrow-down.svg").default} />
      </a>
    </HeroWrapper>
  );
};

export default Hero;
