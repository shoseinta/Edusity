import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
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
