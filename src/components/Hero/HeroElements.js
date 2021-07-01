import styled from "styled-components";
import ImgBg from "../../images/pexels-valeriia-miller-3856444.jpg";


export const HeroContainter = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)),
    url(${ImgBg});
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh-80px);
  max-height: 100%;
  width: 100%;
  padding: 0rem calc((100vw-1300px) / 2);
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  width: 650px;
  color: #fff;
  
  line-height: 1;
  font-weight: bold;
  margin-left: 4vw;

  @media screen and (max-width: 650px) {
    margin-left: 10vw;
    width: 90%;
    margin-top: -10vh;
  }

 
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
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

// export const HeroSideText = styled.div`
//   transform-origin: 0 0;
//   transform: rotate(-90deg);
//   color: #fff;
//   margin-top: 80vh;
//   /* margin-left: 2rem; */

//   h1 {
//     text-transform: uppercase;
//     font-size: 4.5rem;
//   }
//   @media screen and (max-width: 950px) {
//     font-size: 1rem;
//   }
// `;


export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 7vw, 3.5rem);
  border-bottom: 7px solid red;
  border-radius: 2px;
  margin-bottom: 1rem;
  width: 100%;
  
  @media screen and (max-width: 650px) {
    font-size: clamp(1.8rem, 5vw, 3rem);
  }

`

export const HeroH2 = styled.h2`
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 300;
  margin-bottom: 1rem ;
`;

export const HeroContext = styled.div`
display: flex;
flex-direction: row;

 margin-left: -14vw;
`
export const HeroP = styled.p`
  font-size: clamp(2.4rem, 3vw, 3.4rem);
  margin-bottom: 2rem;
  font-weight: 300;

  @media screen and (max-width: 650px) {
    font-size: clamp(1.4rem, 5vw, 2.5rem);
  }
`;

export const HeroImg = styled.img`
 max-width: 100%;
 width: 15rem;
 max-height: 100%;
 height: 25rem;
 box-shadow: 9px 8px #fff;
 margin-top: 20vh;
 margin-left: 10%;

 @media screen and (max-width: 650px) {
   margin-left: 20vw;
   margin-top: -2vh;
   height: 20rem;
   width: 12rem;;
 }
`