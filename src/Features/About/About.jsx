import AboutLeft from "./AboutLeft";
import "./About.css";




const About = ({setPlayState}) => {
  return (
    <div className="about">
      <AboutLeft setPlayState={setPlayState} />
      
    </div>
  );
};

export default About;
