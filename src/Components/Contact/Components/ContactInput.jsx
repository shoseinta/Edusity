import React from "react";
import PropTypes from "prop-types";
import "./ContactInput.css";

const ContactInput = React.memo(
  ({ label, type, nameAttr, placeholderAttr }) => {
    return (
      <>
        <label>{label}</label>
        <input
          type={type}
          name={nameAttr}
          placeholder={placeholderAttr}
          required
        />
      </>
    );
  },
);

// Set the display name
ContactInput.displayName = "ContactInput";

ContactInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nameAttr: PropTypes.string.isRequired,
  placeholderAttr: PropTypes.string.isRequired,
};

export default ContactInput;
