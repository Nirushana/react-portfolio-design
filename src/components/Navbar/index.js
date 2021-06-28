import React from "react";
import { Bars, Nav, NavLink, NavMenu, NavBtnLink } from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1 style={{fontWeight: "bold", margin: '50px'}}>K.Nirushana</h1>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to="\home">Home</NavLink>
          <NavLink to="\about">About</NavLink>
          <NavLink to="\skills">Skills</NavLink>
          <NavLink to="\services">Services</NavLink>
          <NavLink to="\projects">Projects</NavLink>
          <NavLink to="\contact">Contact</NavLink>
          <NavBtnLink>Download CV</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
