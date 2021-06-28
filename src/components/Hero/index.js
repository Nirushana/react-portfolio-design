import React, { useState } from "react";
import Navbar from "../Navbar/index";
import Sidebar from "../Sidebar";
import {
  HeroContainter,
  HeroContent,
  HeroItems,
  HeroMianImg,
  HeroBtn,
  HeroSideText,
  HeroH2,
  HeroH1,
  HeroP,
  HeroContext
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
        <HeroSideText>
          <h1>Portfolio</h1>
        </HeroSideText>
        <HeroContext>
          <HeroMianImg src={proImg} alt="Profile Image" />
          <HeroItems>
            <HeroH2>Hi! my name is </HeroH2>
            <HeroH1>KAVINDA NIRUSHANA</HeroH1>
            <HeroP>I am a Front-end Developer</HeroP>
            <HeroBtn>Hire Me</HeroBtn>
          </HeroItems>
        </HeroContext>
      </HeroContent>
    </HeroContainter>
  );
}

export default Hero;
