// import { useRef } from "react";
import { useDispatch } from "react-redux";

import LoginWithEmail from "./LoginWithEmail";
import { useState } from "react";
import LoginWithPhone from "./LoginWithPhone";
import { setLoginPopUp, setSignUpPopUp } from "../../../redux_store/features/stateControlSlice";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const [emailLoginPopUp, setEmailLoginPopUp] = useState(false);
  const [phoneLoginPopUp, setPhoneLoginPopUp] = useState(false);

  return (
    <>
      <div
        className="flex flex-col w-[70%] sm:w-[40%] md:w-[30%] lg:w-[25%] mx-auto p-2 bg-white shadow-2xl rounded fixed top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] z-30"
        style={{ pointerEvents: "all" }}
      >
        <div className=" flex justify-between items-center text-xl p-4 my-2 font-bold">
          <span>Login</span>
          <button
            className=""
            onClick={() => {
              dispatch(setLoginPopUp(false));
            }}
          >
            X
          </button>
        </div>
        {emailLoginPopUp? (
          <LoginWithEmail />
        ) : phoneLoginPopUp? (
          <LoginWithPhone/>
        ) : (
          <div>
            <button
              className="block bg-blue-700 text-white m-4 text-center p-2 shadow-2xl rounded-md"
              onClick={() => {
                console.log('clicked')
                setEmailLoginPopUp(true);
              }}
            >
              Login with Email
            </button>

            <button
              className="block bg-blue-700 text-white m-4 text-center p-2 shadow-2xl rounded-md"
              onClick={() => {
                setPhoneLoginPopUp(true);
              }}
            >
              Login with Phone Number
            </button>
          </div>
        )}
        <div className="text-center">
          Do not have an account?
          <button className="font-bold underline text-black"
            onClick={() => {
              dispatch(setLoginPopUp(false));
              dispatch(setSignUpPopUp(true));
              setEmailLoginPopUp(false);
              setPhoneLoginPopUp(false);
              console.log('signup clicked')
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
