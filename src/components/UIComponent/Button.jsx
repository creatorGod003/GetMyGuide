
const Button = (props) => {

    // eslint-disable-next-line react/prop-types
    const name = props.name;

  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              {name}
    </button>
  )
}

export default Button