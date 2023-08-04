import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { setLoginPopUp, setSideBarShown } from '../../redux_store/features/stateControlSlice';
const NavBarItem = (props) => {

    const userType = useSelector((state) => state.user.type);
    const classes = props.className;
    const isSideBar = props.isSideBar;
    const isUserLoggedIn = useSelector((state) => state.user.loggedin);

    const dispatch = useDispatch();
  return (
    
    <>
    <ul className={classes+ `${isSideBar?"":""}`}>
        <li>
          <div>
            <Link to={"/"} onClick={()=>{dispatch(setSideBarShown(false))}}>Home</Link>
            {
                isSideBar?(
                    <div className='absolute top-4 right-4' onClick={
                        ()=>{
                            dispatch(setSideBarShown(false))
                        }
                    }>
                X
            </div>):null
            }
          </div>
        </li>
        <li>
          <Link to={"/about"} onClick={()=>{dispatch(setSideBarShown(false))}}>About</Link>
        </li>
        <li>
          <Link to={"/admin"} onClick={()=>{dispatch(setSideBarShown(false))}}>Admin</Link>
        </li>
        <li>
          <Link to={"/contact"} className='' onClick={()=>{dispatch(setSideBarShown(false))}}>Contact Us</Link>
        </li>
        {userType === "guide" ? (
          <li>
            <Link to={"/find"} onClick={()=>{dispatch(setSideBarShown(false))}}>My Allotment</Link>
          </li>
        ) : (
          <li>
            <Link to={"/find"} onClick={()=>{dispatch(setSideBarShown(false))}}>FindMyGuide</Link>
          </li>
        )}
        
        {
            isSideBar?
            (
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
            )
            :null
        }

      </ul>
    </>
  )
}

NavBarItem.defaultProps = {
    className:"flex flex-row items-center justify-evenly basis-2/4",
    isSideBar:false
}

NavBarItem.propTypes = {
    className:PropTypes.string,
    isSideBar:PropTypes.bool
}

export default NavBarItem