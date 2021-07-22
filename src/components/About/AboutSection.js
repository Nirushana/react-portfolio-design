import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #333333;
  width: 100%;
  height: 100vh;
  position: absolute;
`;

export const AboutHeader = styled.div`
position: relative;
 margin-top: 100px;
 margin-left: 100px;
`

export const AboutHeaderH = styled.h1`

 color: #fff;
 font-size: 2rem;
 font-weight: bold;
`

export const AboutContent = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  margin-top: 10vh;
  justify-content: center;
  
`;

export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: flex-start;
  
`;

export const AboutP = styled.p`
 color: #fff;
 font-size: 1.5rem;
 font-weight: 300;
`

export const AboutRight = styled.div`
 flex: 8;
`

export const AboutImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 260px;
  height: 430px;
  box-shadow: 9px 8px #fff;
  margin-left: 30%;

  @media only screen and (max-width: 768px) {
    width: 220px;
    height: 320px;
  }
`;
