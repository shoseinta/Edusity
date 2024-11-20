import PropTypes from "prop-types";
import "./AboutParagraph.css";

const AboutParagraph = ({ content }) => {
  return <p>{content}</p>;
};

AboutParagraph.propTypes = {
  content: PropTypes.string.isRequired,
};

export default AboutParagraph;
