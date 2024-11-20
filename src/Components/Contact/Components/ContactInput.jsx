import PropTypes from 'prop-types';

const ContactInput = ({ label, type, nameAttr, placeholderAttr }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} name={nameAttr} placeholder={placeholderAttr} required />
    </>
  );
};

ContactInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nameAttr: PropTypes.string.isRequired,
  placeholderAttr: PropTypes.string.isRequired
};

export default ContactInput;
