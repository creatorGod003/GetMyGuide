import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const AdminCard = (props) => {
  return (
    <div className="w-2/3 bg-gray-50 flex flex-col justify-center relative overflow-hidden p-2 sm:py-4">
      <div className="max-w-7xl">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
              />
            </svg>
            <div className="space-y-2">
              <p className="text-slate-800">
                {props.title}
              </p>
              <Link to={props.link} className="underline" >
                Get Information
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


AdminCard.propTypes={
  title:PropTypes.string,
  link:PropTypes.string
}

export default AdminCard;
