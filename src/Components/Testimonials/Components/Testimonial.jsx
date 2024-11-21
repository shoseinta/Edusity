import React from "react";
import PropTypes from "prop-types";
import "./Testimonial.css";

const Testimonial = React.memo(
  ({ userImage, userName, userLocation, message }) => (
    <div className="slide">
      <div className="user-info">
        <img src={userImage} alt={userName} />
        <div>
          <h3>{userName}</h3>
          <span>{userLocation}</span>
        </div>
      </div>
      <p>{message}</p>
    </div>
  ),
);

Testimonial.displayName = "Testimonial";

Testimonial.propTypes = {
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Testimonial;
