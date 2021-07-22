import React from "react";
import { AboutContainer, AboutHeader, AboutContent, AboutLeft, AboutP, AboutRight, AboutImg, AboutHeaderH } from "./AboutSection";
import SideImg from '../../images/sub_image.jpeg';

function About() {
  return (
    <AboutContainer>
      <AboutHeader>
      <AboutHeaderH>About Me</AboutHeaderH>
      </AboutHeader>
      
      <AboutContent>
        <AboutLeft>
          <AboutP>
            Hi, I am Kavinda Nirushana. I am a Full Stack Software engineer
            proficient in designing and development of both Web-based and
            Mobile-based applications. As a full stack developer, I can help you
            with everything you need to get your project off the ground, from
            concept to launch.
          </AboutP>
          {/* <AboutSpan></AboutSpan> */}
        </AboutLeft>
        <AboutRight>
          <AboutImg src={SideImg} />
        </AboutRight>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
