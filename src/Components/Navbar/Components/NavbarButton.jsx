import { Link } from "react-scroll"
const NavbarButton = () => {
    return(
        <li>
          <button className="btn">
            <Link to="contact" offset={-250} smooth duration={500}>
              Contact us
            </Link>
          </button>
        </li>
    )
}

export default NavbarButton;