import PropTypes from "prop-types";
import AboutLeft from "../Components/AboutLeft";
import AboutRight from "../Components/AboutRight";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <AboutLeft />
      <AboutRight />
    </div>
  );
};

About.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};

export default About;
