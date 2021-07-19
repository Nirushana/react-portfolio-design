import React, { useState } from "react";
import Navbar from "../Navbar/index";
import Sidebar from "../Sidebar";
import {
  HeroContainter,
  HeroContent,
  HeroRight,
  HeroBtn,
  HeroH2,
  HeroH1,
  HeroP,
  HeroLeft,
  HeroImg,
} from "./HeroElements";
import proImg from "../../images/portfolio_main.jpg";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainter>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroLeft>
          <HeroImg src={proImg} />
        </HeroLeft>
        <HeroRight>
          <HeroH2>Hi! my name is </HeroH2>
          <HeroH1>KAVINDA NIRUSHANA</HeroH1>
          <HeroP>I am a Front-end Developer</HeroP>
          <HeroBtn>See My Work</HeroBtn>
        </HeroRight>
      </HeroContent>
    </HeroContainter>
  );
}

export default Hero;
