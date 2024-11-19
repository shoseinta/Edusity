import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/logo.png";
import menu_icon from "../../../assets/menu-icon.png";
import NavbarListItem from "../Components/NavbarListItem";
import NavbarButton from "../Components/NavbarButton";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const navListData = [
    {
      id: 1,
      linkTo: 'hero',
      offset: 0,
      label: 'Home',
      smooth: true,
      duration: 500
    },
    {
      id: 2,
      linkTo: 'programs',
      offset: -260,
      label: 'Programs',
      smooth: true,
      duration: 500
    },
    {
      id: 3,
      linkTo: 'about',
      offset: -130,
      label: 'About us',
      smooth: true,
      duration: 500
    },
    {
      id: 4,
      linkTo: 'campus',
      offset: -250,
      label: 'Campus',
      smooth: true,
      duration: 500
    },
    {
      id: 5,
      linkTo: 'testimonials',
      offset: -250,
      label: 'Testimonials',
      smooth: true,
      duration: 500
    },
    {
      id: 6,
      linkTo: 'contact',
      offset: -250,
      label: 'Contact us',
      smooth: true,
      duration: 500
    }
  ];
  

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
      <ul className={mobileMenu?"":"hide-mobile-menu" }>
        {navListData.map(ListItem => <NavbarListItem key={ListItem.id} {...ListItem}/>)}
        <NavbarButton />
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
