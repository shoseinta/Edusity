import { useRef } from "react";
import PropTypes from "prop-types";
import Testimonial from "./Testimonial";
import { testimonialsData } from "../../../Constants/testimonialsData";
import "./Slider.css";

const Slider = ({ tx }) => {
  const slider = useRef();
  return (
    <div className="slider">
      <ul ref={slider} style={{ transform: `translateX(${tx}%)` }}>
        {testimonialsData.map((testimonial) => (
          <li key={testimonial.id}>
            <Testimonial {...testimonial} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Slider.propTypes = {
  tx: PropTypes.number.isRequired,
};

export default Slider;
