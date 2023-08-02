import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { auth } from "../../../firebase/firebase";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import { setLoginPopUp } from "../../../redux_store/features/stateControlSlice";
import { useDispatch } from "react-redux";
const LoginWithPhone = () => {
  const [progress, setprogress] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: () => {
          console.log("captcha resolved");
        },
        "expired-callback": () => {
          console.log("Captcha not verified");
        },
      }
    );
    
    console.log("captcha verification setup");
  }, []);

  function sendToast(status){
    if(status==="success"){
      toast.success("Logged In Successfully!")
    }
    else{
      toast.error("Login Failed!")
    }
  }

  function handleSignIn(values) {
    console.log("Sign is being handled");

    const appVerifier = window.recaptchaVerifier;
    setprogress(true);
    signInWithPhoneNumber(
      auth,
      values.country_code + values.number,
      appVerifier
    )
      .then((confirmationResult) => {
        setprogress(false);
        window.confirmationResult = confirmationResult;
        console.log(window.confirmationResult);
        setOtpSent(true);
      })
      .catch((error) => {
        console.log("SMS not sent. Pls re-check your phone number", error);
      });
  }



  function verifyOTP(values) {
    const otp = values.otp;
    setprogress(true);
    
    window.confirmationResult.confirm(otp).then((result) => {
      console.log(result.user)
      sendToast("success")
      setprogress(false)
      dispatch(setLoginPopUp(false));
    }).catch((error) => {
      console.log(error)
      sendToast("error")
    });

  }
  

  return (
    <>
      {!otpSent ? (
        <Formik
          initialValues={{
            country_code: "+91",
            number: "",
          }}
          onSubmit={(values) => {
            handleSignIn(values);
          }}
          validate={(values) => {
            const errors = {};

            if (!values.number) {
              errors.number = "Required";
            } else if (!/^\d{10}$/i.test(values.number)) {
              errors.number = "Invalid Number";
            }

            return errors;
          }}
        >
          <Form className="px-4">
            <label htmlFor="number">Phone No.</label>
            <br />
            <ErrorMessage
              name="number"
              component={"div"}
              className="text-red-400"
            />
            <div className="flex justify-around m-2">
              <Field
                component="select"
                name="country_code"
                id="country_code"
                className="m-2"
              >
                <option value="+91">+91 🇮🇳</option>
                <option value="+1">+1 🇿🇦</option>
              </Field>

              <Field
                type="tel"
                id="number"
                name="number"
                placeholder="Enter your Number"
                className="p-2"
              />
            </div>

            <button type="submit" className="w-fit mx-auto block my-4">
              {progress ? <BeatLoader /> : "Get OTP"}
            </button>
          </Form>
        </Formik>
      ) : (
        <Formik
          initialValues={{
            otp: "",
          }}

          onSubmit={
            (values)=>{
              verifyOTP(values);
            }
          }

        >
          <Form>
            <label htmlFor="otp">Phone No.</label>
            <br />
            <ErrorMessage
              name="otp"
              component={"div"}
              className="text-red-400"
            />
            <Field
              type="tel"
              id="otp"
              name="otp"
              placeholder="Enter your OTP"
              className="p-2"
            />
            <button type="submit" className="w-fit mx-auto block my-4">
              Verify OTP
            </button>
          </Form>
        </Formik>
      )}

      {otpSent ? null : <div id="recaptcha-container"></div>}
    </>
  );
};

export default LoginWithPhone;
