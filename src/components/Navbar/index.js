import React from "react";
import { Bars, Nav, NavLink, NavMenu, NavBtnLink } from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>K.<h1>Nirushana</h1></h1>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to="\home">Home</NavLink>
          <NavLink to="\about">About</NavLink>
          <NavLink to="\skills">Skills</NavLink>
          <NavLink to="\uiDesign">UI design</NavLink>
          <NavLink to="\projects">Projects</NavLink>
          <NavBtnLink>Download CV</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
