import { useContext } from "react";
import { AppContext } from "../../../Contexts/AppContext";
import about_img from "../../../assets/about.png";
import play_icon from "../../../assets/play-icon.png";
import "./AboutLeft.css";

const AboutLeft = () => {
  const { setPlayState } = useContext(AppContext);
  const playIconClick = () => setPlayState(true);

  return (
    <div className="about-left">
      <img src={about_img} className="about-img" alt="About" />
      <img
        src={play_icon}
        className="play-icon"
        onClick={playIconClick}
        alt="Play Icon"
      />
    </div>
  );
};

export default AboutLeft;
