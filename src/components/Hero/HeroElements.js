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
`;

// End of HeroSection Main Container

export const HeroContent = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
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
`;


export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  border-bottom: 7px solid red;
  border-radius: 2px;
  margin-bottom: 1rem;
  width: 100%;

`;


export const HeroH2 = styled.h2`
  font-size: clamp(1.5rem, 3vw, 3rem);
  font-weight: 300;
  margin-bottom: 1rem;
`;



export const HeroP = styled.p`
  font-size: clamp(2.4rem, 1.5vw, 3.4rem);
  margin-bottom: 2rem;
  font-weight: 300;
`;

// HeroSection LeftSide

export const HeroLeft = styled.div`
  flex: 8;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 260px;
  height: 450px;
  box-shadow: 9px 8px #fff;
  margin-top: 20vh;
  margin-left: 10%;
`;

// End of HeroSection LeftSide