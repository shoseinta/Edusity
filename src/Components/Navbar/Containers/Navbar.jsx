import { useEffect, useState } from "react";
import { navListData } from "../../../Constants/Constants";
import NavbarListItem from "../Components/NavbarListItem";
import NavbarButton from "../Components/NavbarButton";
import "./Navbar.css";
import logo from "../../../assets/logo.png";
import menu_icon from "../../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        {navListData.map((ListItem) => (
          <NavbarListItem key={ListItem.id} {...ListItem} />
        ))}
        <NavbarButton />
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
