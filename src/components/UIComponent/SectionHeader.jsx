
import PropTypes from "prop-types";

const SectionHeader = (props) => {
    // eslint-disable-next-line react/prop-types
    const name = props.name;
  return (
    <header className="font-bold text-3xl my-4 mx-8 text-center sm:text-left lg:mx-20 lg-mx-20">
      <span>{name}</span>
    </header>
  );
};

export default SectionHeader;

SectionHeader.propTypes = {
  name: PropTypes.string,
};