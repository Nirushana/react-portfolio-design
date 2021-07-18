import styled from "styled-components";
import ImgBg from "../../images/pexels-valeriia-miller-3856444.jpg";

// HeroSection Main Cantainer
export const HeroContainter = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)),
    url(${ImgBg});
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;

  @media only screen and (max-width: 768px) {
  }
`;

// End of HeroSection Main Container

export const HeroContent = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: -18vh;
  }
`;

export const HeroRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* height: 100vh;
  max-height: 100%;
  width: 650px; */
  color: #fff;
  line-height: 1;
  font-weight: bold;
  margin-left: 4vw;

  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 0;
    flex: 1;
    height: fit-content;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 3rem;
  border: none;
  background: #3a00fd;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 2.6rem;
  }
`;

export const HeroH1 = styled.h1`
  font-size: 3rem;
  border-bottom: 7px solid red;
  border-radius: 2px;
  margin-bottom: 1rem;
  width: 100%;

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 950px) {
    font-size: 2.5rem;
  }
`;

export const HeroH2 = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 950x) {
    font-size: 1.5rem;
  }
`;

export const HeroP = styled.p`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 950px) {
    font-size: 2rem;
  }
`;

// HeroSection LeftSide

export const HeroLeft = styled.div`
  flex: 8;

  @media only screen and (max-width: 768px) {
    text-align: center;
    flex: 1;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 958px) {
    flex: 6;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 260px;
  height: 450px;
  box-shadow: 9px 8px #fff;
  margin-top: 20vh;
  margin-left: 10%;

  @media only screen and (max-width: 768px) {
    width: 220px;
    height: 320px;
  }
`;

// End of HeroSection LeftSide

// Hero Section Vertical Text

export const HeroVerticalText = styled.div`
  
  writing-mode: sideways-lr;
  position: absolute;
  margin-top: 56vh;
  margin-left: 20px;
  text-orientation: mixed;
  font-weight: 600;

  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroVerticalTextH1 = styled.h1`
  font-size: 3rem;
  color: #fff;
  overflow: hidden;
  text-align: center;

`

// End of Hero Hero Section Vertical Text
