import PropTypes from "prop-types";
import { Link } from "react-scroll";
import './NavbarListItem.css';

const NavbarListItem = ({ linkTo, offset, label, smooth, duration }) => {
  return (
    <li>
      <Link to={linkTo} offset={offset} smooth={smooth} duration={duration}>
        {label}
      </Link>
    </li>
  );
};

NavbarListItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  offset: PropTypes.number,
  label: PropTypes.string.isRequired,
  smooth: PropTypes.bool,
  duration: PropTypes.number,
};

export default NavbarListItem;
