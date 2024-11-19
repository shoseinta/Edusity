import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" />
      <ul className={mobileMenu?"":"hide-mobile-menu" }>
        <li>
          <Link to="hero" smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" offset={-260} smooth duration={500}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="about" offset={-130} smooth duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" offset={-250} smooth duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" offset={-250} smooth duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" offset={-250} smooth duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
