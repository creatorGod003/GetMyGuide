import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLoginPopUp, setSideBarShown } from "../../redux_store/features/stateControlSlice";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.loggedin);
  const showSidebar = useSelector((state) => state.stateControl.sideBarShown);

  function toggleSidebar() {
    showSidebar ? dispatch(setSideBarShown(false)) : dispatch(setSideBarShown(true));
  }

  const vw = window.innerWidth;

  return (
    <nav className="flex flex-row items-center justify-between px-8 py-2 font-navbar text-md bg-white bg-opacity-10 ">
      <div className="cursor-pointer md:hidden block mx-10" onClick={toggleSidebar}>
        <svg
          className="fill-current text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </div>

      <ul className="flex flex-row items-center justify-evenly basis-1/4">
        <li>
          <Link
            to={"/"}
            className="flex justify-evenly items-center font-bold"
          >
            <img
              src={"/src/assets/brandlogo.png"}
              className="w-24 h-24 rounded-full"
              alt=""
            />
            <span className="text-sm md:text-xl lg:text-lg">GetMyGuide</span>
          </Link>
        </li>
      </ul>
      
      {

          (vw>768)?(
            <NavBarItem/>
          ):
            showSidebar?(
              <NavBarItem className="flex flex-col items-center justify-evenly basis-1/4 absolute top-0 left-0 h-[50vh] w-1/2 bg-white bg-opacity-90 z-20" isSideBar={true}/>
            ):null
      }

      <ul className="flex flex-row items-center justify-evenly basis-1/5">
      {
        (vw>768)?(
          <li>
          {isUserLoggedIn ? (
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <Link to={"/profile"}>Profile</Link>
            </div>
          ) : (
            <button
              onClick={() => {
                dispatch(setLoginPopUp(true));
              }}
            >
              Login
            </button>
          )}
        </li>
        ):null
      }
      </ul>
    </nav>
  );
};

export default NavBar;
