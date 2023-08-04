import { PropTypes } from 'prop-types';
const Button = (props) => {

    
    const name = props.name;

  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              {name}
    </button>
  )
}

Button.propTypes={
    name:PropTypes.string
}

export default Button