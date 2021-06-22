import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  cursor: pointer;

  &:hover{
    color: #3A00FD,
  }
`;

export const Bars = styled(FaBars)`
 display: none;
 color: #fff;

 @media screen and (max-width: 900px){
   display: block;
   position: absolute;
   top: 0;
   right: 0;
   transform: translate(-100%, 75%);
   font-size: 1.8rem;
   cursor: pointer;
 }
`;
export const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: 40px;

 @media screen and (max-width: 900px){
   display: none;

 }
`

export const NavBtnLink = styled.button`
 border-radius: 4px;
 background: #3A00FD;
 padding: 10px 22px;
 color: #fff;
 border: none;
 outline: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 margin-left: rem;
 

 &:hover{
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #000;
 }
`
