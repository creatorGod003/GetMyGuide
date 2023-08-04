import { signInWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { auth, db } from "../../../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setLoginPopUp } from "../../../redux_store/features/stateControlSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { login } from "../../../redux_store/features/userSlice";
import { doc, getDoc } from "firebase/firestore";
const LoginWithEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);

  function getLoggedInUser(values) {
    setProcessing(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        sendToast("success");
        dispatch(setLoginPopUp(false));
        setProcessing(false);
        setUserType(userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        sendToast("error");
        setProcessing(false);
      });
  }

  async function setUserType(user) {

    const docRef = doc(db, "users_info", user.uid);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }

    dispatch(login(JSON.stringify({ user, type: docSnap.data().type })));

  }


  function sendToast(status) {
    if (status === "success") {
      toast.success("Logged In Successfully!");
    } else {
      toast.error("Login Failed!");
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        getLoggedInUser(values);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required*";
        } else if (
          !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i.test(values.email)
        ) {
          errors.email = "Invalid Email";
        }
        if (!values.password) {
          errors.password = "Required*";
        }
        return errors;
      }}
    >
      <Form className="px-6 py-4">
        <div className="flex">
          <label htmlFor="email" className="mr-3">
            Email
          </label>

          <ErrorMessage
            name="email"
            component={"div"}
            className="text-red-500"
          />
        </div>
        <Field
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="p-2 rounded border-black border-2"
        />
        <br />
        <br />
        <div className="flex">
          <label htmlFor="password" className="mr-3">
            Password
          </label>

          <ErrorMessage
            name="password"
            component={"div"}
            className="text-red-500"
          />
        </div>
        <Field
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className="p-2 rounded border-black border-2"
        />
        <br />
        <button
          type="submit"
          className="w-fit mx-auto block my-4 bg-blue-400 p-2 rounded-md shadow-sm shadow-slate-600"
        >
          {processing ? <BeatLoader /> : "Login"}
        </button>
      </Form>
    </Formik>
  );
};

export default LoginWithEmail;
