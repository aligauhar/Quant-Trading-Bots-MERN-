// HeroSection.jsx
import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import {  FaThemeisle } from "react-icons/fa";
import { ThemeContext } from "../Theme";
import { Link } from "react-router-dom";
import "./css/HeroSection.css";
// import SignIn from "./sign-in";


const NavbarComponent = () => {
  const { theme, toggleTheme, gradiant, toggleGradiant } = useContext(ThemeContext);

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom-wrapper">
      <div>
        <img
          src="main.PNG"
          width="30"
          height="30"
          className="d-inline-block align-top grayscale-image"
          alt="Logo"
        />
        <h2>Defi Quant</h2>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav toggle-btn" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Nav>
          {/* <SignIn/> */}
        </Nav>
        <div className="header-container">
        <div className="header-toggle-buttons">
          <button
            onClick={() => {
              toggleTheme();
              toggleGradiant();
            }}
          >
            <FaThemeisle /> {theme}
          </button>
        </div>
      </div>
      </Navbar.Collapse>
      
    </Navbar>
  );
};

export default NavbarComponent;
