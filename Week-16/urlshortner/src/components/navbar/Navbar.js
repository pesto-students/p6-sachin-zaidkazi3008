import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
          <a href='/' className="navbarBrand">
            UrlShortener
          </a>
          <ul className="navbarLinks">
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a  href='#' >Resource</a>
            </li>
          </ul>
        </nav>
      );
}

export default Navbar;
