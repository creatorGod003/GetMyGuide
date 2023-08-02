import { useDispatch } from "react-redux";
import { setSignUpPopUp } from "../../../redux_store/features/stateControlSlice";
import { auth, db, storage } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { useRef, useState } from "react";
import { PulseLoader } from "react-spinners";
import PreviewFile from "./PreviewFile";
import { ref, uploadBytes } from "firebase/storage";


const SignUp = () => {
  console.log("signup appeared");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const fileRef = useRef(null);

  const state_city = {
    od: [
      ["bbsr", "Bhubaneswar"],
      ["rkl", "Rourkela"],
    ],
    jh: [
      ["rnc", "Ranchi"],
      ["jmk", "Jamshedpur"],
    ],
    "": [],
  };

  

  function sendSignUpDataToFirebase(values) {
    
    setProcessing(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        // Signed Up successfully
        // user will be redirected to home page
        // there afte he can login
        // saving the user data in firestore
        // assuming firestore never fails not handling errors
        sendToast("success");
        console.log("signed up successfully");
        dispatch(setSignUpPopUp(false));
        sendUserInfoToFirebase(values, { uid: user.uid });
        setProcessing(false);
        
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

  async function sendUserInfoToFirebase(values, user) {
    console.log(user.uid);
    const common_data = {
      fname: values.fname,
      lname: values.lname,
      email: values.email,
      country_code: values.country_code,
      number: values.number,
      password: values.password,
      profile_pic: "",
      bio: "",
      reviews: [],
    };

    const traveler_data = {
      ...common_data,
      type: values.type,
      interest: [],
      language_profiency: [],
      travelling_style: "",
      booked_tours: [],
      wishlist: [],
    };
    const guide_data = {
      ...common_data,
      type: values.type,
      experience: values.experience,
      language: values.language,
      country: values.country,
      state: values.state,
      city: values.city,
      guide_rating: 0,
      guide_rating_count: 0,
      govid: values.govid,
      govid_number: values.govid_number,
      govid_file:"govid_file/"+values.govid_number,
    };

    await setDoc(
      doc(db, "users_info", user.uid),
      values.type === "traveler" ? traveler_data : guide_data
    );
  }

  function sendToast(status) {
    if (status === "success") {
      toast.success("Signed Up Successfully!");
    } else {
      toast.error("Error Signing Up!");
    }
  }

  function uploadFileToFireStorage(file, name) {

    const storageRef = ref(storage, `gov_id/${name}`);
    
    uploadBytes(storageRef, file).then(() => {
      console.log('Uploaded a blob or file!');
    });
    

  }

  return (
    <div
      className="flex flex-col w-[70%] sm:w-[40%] md:w-[30%] lg:w-[25%] mx-auto p-2 bg-white shadow-2xl rounded fixed top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] z-30"
      style={{ pointerEvents: "all" }}
    >
      <header className="flex justify-between items-center text-xl my-4 font-bold">
        <span>Sign Up</span>
        <button
          className=""
          onClick={() => {
            dispatch(setSignUpPopUp(false));
          }}
        >
          X
        </button>
      </header>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          country_code: "+91",
          number: "",
          password: "",
          confirm_password: "",
          type: "traveler",
          experience: "100",
          language: [],
          country: "in",
          state: "od",
          city: "",
          govid: "adhaar",
          govid_number: "",
          govid_file: null,
          terms: false,
          
        }}
        onSubmit={(values) => {

          try{
            if(values.type==='traveler'){
              sendSignUpDataToFirebase(values);
            }
            else{
  
              const file = values.govid_file
              const name = values.govid_number
  
              uploadFileToFireStorage(file, name);
              sendSignUpDataToFirebase(values);
            }
          }
          catch(error){
            console.log(error);
            sendToast("error");
            
          }
      }}
        validate={(values) => {
          const errors = {};
          if (!values.fname) {
            errors.fname = "Required first name";
          }
          if (!values.lname) {
            errors.lname = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i.test(
              values.email
            )
          ) {
            errors.email = "Invalid Email";
          }

          if (!values.number) {
            errors.number = "Required";
          } else if (!/^\d{10}$/i.test(values.number)) {
            errors.number = "Invalid Number";
          }

          if (!values.password) {
            errors.password = "Required";
          }
          if (!values.confirm_password) {
            errors.confirm_password = "Required";
          }

          if (!values.confirm_password) {
            errors.confirm_password = "Required";
          } else if (values.password !== values.confirm_password) {
            errors.confirm_password = "Password does not match";
          }

          if( values.type==='guide' &&values.language.length===0){
            errors.language="Required"
          }
          if( values.type==='guide' && !values.govid_number){
            errors.govid_number="Required"
          }

          if( values.type==='guide' && values.govid_file == null){
            errors.govid_file="Required"
          }

          if( values.type==='guide' && !values.govid_file){
            errors.govid_file="Required"
          }
          else if( values.type==='guide' && values.govid_file.size>5*1024*1024){
            errors.govid_file="File size should not exceed 5 mb"
          }
          else if( values.type==='guide' && !values.govid_file.type.includes('image')){
            errors.govid_file="File should be an image"
          }

          if( values.type==='guide' && !values.state){
            errors.state="Required"
          }

          if( values.type==='guide' && !values.city){
            errors.city="Required"
          }


          if(!values.terms){
            errors.terms="Required"
          }

          return errors;
        }}
      >
        {({ values,setFieldValue,errors }) => {
          return (
            <Form className="overflow-y-scroll h-60">
              <label htmlFor="fname">First Name</label>
              <br />
              <ErrorMessage
                name="fname"
                component={"div"}
                className="text-red-400"
              />
              <Field
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter your First Name"
              />
              <br /> <br />
              <label htmlFor="lname" className="">
                Last Name
              </label>
              <br />
              <ErrorMessage
                name="lname"
                component={"div"}
                className="text-red-400"
              />
              <Field
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter your Last Name"
              />
              <br /> <br />
              <label htmlFor="type">
                <span className="mr-2">User Type</span>
              </label>
              <br />
              <div className="flex justify-around my-2">
                <div>
                  <Field type="radio" name="type" value="traveler" />
                  <span>Traveler</span>
                </div>
                <div>
                  <Field type="radio" name="type" value="guide" />
                  <span>Guide</span>
                </div>
              </div>
              {values.type === "guide" ? (
                <>

                  <label>
                    <span className="mr-2">Government Id</span>
                  </label>
                  <br />

                  <Field as="select" name="govid">
                    <option value="adhaar">Adhaar</option>
                    <option value="pan">Pan</option>
                    <option value="voter">Voter Id</option>
                    <option value="passport">Passport</option>
                  </Field>
                  
                  <br />
                  <br />

                  <label htmlFor="govid_number">Id Number</label>
                  <br />
                  <ErrorMessage
                    name="govid_number"
                    component={"div"}
                    className="text-red-400"
                  />

                  <Field
                    type="text"
                    id="govid_number"
                    name="govid_number"
                    placeholder="Enter your Id Number"
                  />
                  <br /> <br />

                  <label htmlFor="govid_file">
                    <span className="mr-2">Upload Id ( File size should not exceed 5 mb )</span>
                  </label>
                  <br />
                  
                  <ErrorMessage
                    name="govid_file"
                    component={"div"}
                    className="text-red-400"
                  />

                  <input 
                    hidden
                    ref={fileRef}
                    accept="image/*"
                    type="file"
                    id="govid_file"
                    placeholder="Upload your Id"
                    onChange={(event) => {
                      setFieldValue("govid_file", event.currentTarget.files[0]);
                    }}
                  />
                  
                  <button
                    className="bg-black text-white px-4 py-2 rounded-md shadow-sm"
                    onClick={() => {
                      fileRef.current.click();
                    }}  
                  >
                    Upload
                  </button>

                    <br />
                    <br />

                   {values.govid_file && !('govid_file' in errors) && <PreviewFile file={values.govid_file}/>}
                  
                  <label>
                    <span className="mr-2">Experience</span>
                  </label>
                  <br />
                  <Field as="select" name="experience">
                    <option value="100">less than 1 year</option>
                    <option value="200">1-3 years</option>
                    <option value="300">3-5 years</option>
                    <option value="400">more than 5 years</option>
                  </Field>

                  <br />
                  <br />

                  <label>
                    <span className="mr-2">
                      Languages spoken (hold ctrl to select multiple options)
                    </span>
                  </label>

                  <ErrorMessage name="language" component={"div"} className="text-red-400"/>

                  <br />
                  <Field as="select" name="language" multiple>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="sp">Spanish</option>
                    <option value="fr">French</option>
                    <option value="gr">German</option>
                    <option value="ch">Chinese</option>
                  </Field>

                  <br />
                  <br />

                  <label>
                    <span className="mr-2">Country</span>
                  </label>
                  <br />

                  <Field as="select" name="country">
                    <option value="in">India</option>
                  </Field>

                  <br />
                  <br />

                  <label>
                    <span className="mr-2">State</span>
                  </label>
                  
                  <ErrorMessage name="state" component={"div"} className="text-red-400"/>

                  <Field as="select" name="state">
                    <option value="od">Odisha</option>
                    <option value="jh">Jharkhand</option>
                  </Field>

                  <br />
                  <br />

                  {values.state ? (
                    <>
                      <label htmlFor="city">
                        <span className="mr-2">City</span>
                      </label>
                      <br />

                      <ErrorMessage
                        name="city"
                        component={"div"}
                        className="text-red-400"
                      />


                      <Field as="select" name="city">
                        {state_city[values.state].map((city) => {
                          return (
                            <option value={city[0]} key={city[0]}>
                              {city[1]}
                            </option>
                          );
                        })}
                      </Field>

                      <br />
                      <br />
                    </>
                  ) : null}
                </>
              ) : null}
              <label htmlFor="email">Email</label>
              <br />
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-red-400"
              />
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
              />
              <br /> <br />
              <label htmlFor="email">Phone Number</label>
              <br />
              <ErrorMessage
                name="number"
                component={"div"}
                className="text-red-400"
              />
              <div className="flex justify-around my-2">
                <Field component="select" name="country_code" id="country_code">
                  <option value="+91">+91 🇮🇳</option>
                  <option value="+1">+1 🇿🇦</option>
                </Field>

                <Field
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Enter your Number"
                />
              </div>
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-red-400"
              />
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
              />
              <br /> <br />
              <label htmlFor="confirm_password">Confirm Password</label>
              <br />
              <ErrorMessage
                name="confirm_password"
                component={"div"}
                className="text-red-400"
              />
              <Field
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm your Password"
              />
              <br /> <br />

            <ErrorMessage name="terms" component={"div"} className="text-red-400"/>

              <Field type="checkbox" name="terms" />
              <span className="ml-2">
                I agree to the{" "}
                <a href="#" className="text-blue-400">
                  Terms and Conditions
                </a>
              </span>
              <br /> <br />

                        {
                          console.log(errors)
                        }
              {
                
                (Object.keys(errors).length>0) && (
                  <div className="text-red-400">
                    Please fill all the required fields correctly.
                  </div>
                )
              }

              <button
                type="submit"
                className="w-fit mx-auto block my-4 bg-blue-400 px-6 rounded-md py-4 shadow-sm shadow-slate-600"
              >
                {processing ? <PulseLoader /> : "Sign Up"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUp;
