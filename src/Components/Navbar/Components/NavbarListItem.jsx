import { Link } from "react-scroll";

const NavbarListItem = ({linkTo,offset,label,smooth,duration}) => {
    return(
        <li>
          <Link to={linkTo} offset={offset}
            smooth={smooth} duration={duration}>
            {label}
          </Link>
        </li>
    )
}

export default NavbarListItem;