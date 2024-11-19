import PropTypes from 'prop-types';
import about_img from "../../../assets/about.png";
import play_icon from "../../../assets/play-icon.png";

const AboutLeft = ({ setPlayState }) => {
  const playIconClick = () => setPlayState(true);
  
  return (
    <div className="about-left">
      <img src={about_img} className="about-img" alt="About" />
      <img src={play_icon} className="play-icon" onClick={playIconClick} alt="Play Icon" />
    </div>
  );
};

AboutLeft.propTypes = {
  setPlayState: PropTypes.func.isRequired
};

export default AboutLeft;
