import React from "react";
import PropTypes from "prop-types";
import "./AboutParagraph.css";

const AboutParagraph = React.memo(({ content }) => {
  return <p>{content}</p>;
});

AboutParagraph.displayName = "AboutParagraph";

AboutParagraph.propTypes = {
  content: PropTypes.string.isRequired,
};

export default AboutParagraph;
