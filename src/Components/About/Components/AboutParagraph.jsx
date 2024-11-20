import PropTypes from "prop-types";

const AboutParagraph = ({ content }) => {
  return <p>{content}</p>;
};

AboutParagraph.propTypes = {
  content: PropTypes.string.isRequired,
};

export default AboutParagraph;
