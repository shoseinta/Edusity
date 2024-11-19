import AboutLeft from "../Components/AboutLeft";
import AboutRight from "../Components/AboutRight";
import "./About.css";




const About = ({setPlayState}) => {
  return (
    <div className="about">
      <AboutLeft setPlayState={setPlayState} />
      <AboutRight />
    </div>
  );
};

export default About;
