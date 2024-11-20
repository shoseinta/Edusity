import PropTypes from "prop-types";
import next_icon from "../../../assets/next-icon.png";
import back_icon from "../../../assets/back-icon.png";
import "./TestimonialImages.css";

const TestiomonialImages = ({ setTx }) => {
  const slideForward = () => {
    setTx((prevTx) => (prevTx > -75 ? prevTx - 25 : 0)); // Updated range
  };

  const slideBackward = () => {
    setTx((prevTx) => (prevTx < 0 ? prevTx + 25 : -75)); // Updated range
  };

  return (
    <>
      <img
        src={next_icon}
        alt="Next"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="Back"
        className="back-btn"
        onClick={slideBackward}
      />
    </>
  );
};

TestiomonialImages.propTypes = {
  setTx: PropTypes.func.isRequired,
};

export default TestiomonialImages;
