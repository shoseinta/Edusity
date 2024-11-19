import PropTypes from 'prop-types';

const Program = ({ imageSrc, description, imageIcon }) => {
  return (
    <div className="program">
      <img src={imageSrc} alt="Program Image" />
      <div className="caption">
        <img src={imageIcon} alt="Icon" />
        <p>{description}</p>
      </div>
    </div>
  );
};

Program.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageIcon: PropTypes.string.isRequired
};

export default Program;
