import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const AboutLeft = ({setPlayState}) => {
    const playIconClick = () => setPlayState(true)
    return(
      <div className="about-left">
        <img src={about_img} className="about-img" />
        <img src={play_icon} className="play-icon" onClick={playIconClick}/>
      </div>
    )
}

export default AboutLeft;