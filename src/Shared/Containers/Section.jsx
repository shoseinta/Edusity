import PropTypes from 'prop-types';
import Title from "../Components/Title";

const Section = ({ title, subTitle, children }) => {
  return (
    <>
      <Title title={title} subTitle={subTitle} />
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;

