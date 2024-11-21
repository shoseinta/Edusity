import AboutParagraph from "./AboutParagraph";
import "./AboutRight.css";
import { AboutParagraphs } from "../../../Constants/aboutParagraphs";
const AboutRight = () => {
  
  return (
    <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tommorow&#39;s Leaders Today</h2>
      {AboutParagraphs.map((paragraph) => (
        <AboutParagraph key={paragraph.id} content={paragraph.content} />
      ))}
    </div>
  );
};

export default AboutRight;
