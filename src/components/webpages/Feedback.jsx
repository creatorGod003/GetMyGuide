import {  Field, Form, Formik } from "formik";
import { setFeedbackPopUp } from "../../redux_store/features/stateControlSlice";
import { useDispatch } from "react-redux";
import StarRating from "../UIComponent/StarRating";
import { toast } from "react-toastify";

const Feedback = () => {
  const dispatch = useDispatch();

  function sendToast(status) {
    if (status === "success") {
      toast.success("Form Submitted Successfully!");
    } else {
      toast.error("Error in submitting form!");
    }
  }

  return (
    <div
      className="flex flex-col w-[95%] sm:w-[70%] md:w-[50%] lg:w-[50%] xl:w-[35%] mx-auto p-6 px-8 bg-white shadow-2xl rounded fixed top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] z-30"
      style={{ pointerEvents: "all" }}
    >
      <h1 className="flex justify-between text-2xl my-4">
        <span>Feedback Form</span>
        <button
          onClick={() => {
            dispatch(setFeedbackPopUp(false));
          }}
        >
          x
        </button>
      </h1>
      <Formik
        initialValues={{
          comment: "user_interface",
          other: "",
          description: "",
          rating: "",
        }}
        onSubmit={(values) => {
          console.log(values);
            sendToast("success");
            dispatch(setFeedbackPopUp(false));
        }}

        validate={
            (values)=>{
                const errors = {}
                if(values.comment === "other" && values.other === ""){
                    errors.other = "Please Specify"
                }

                if(values.description === ""){
                    errors.description = "Please Describe"
                }

                if(values.rating === ""){
                    errors.rating = "Please Rate"
                }
                else if(/^(?![\d.]+$).*$/.test(values.rating)){
                    errors.rating = "Please enter a rating between 0 to 5"
                }
                return errors;
            }
        }
      >
        {({ values ,errors}) => (
          <Form className=" p-4">
            <div>
              <label htmlFor="comment" className={`text-xl ${Object.keys(errors).includes("comment")?"text-red-600":'text-black'}`}>
                What did you like the most about this website? {
                    Object.keys(errors).includes("comment")?<span className="text-red-600">*</span>:""
                }
              </label>
              <br />
              <Field
                as="select"
                name="comment"
                className="my-2 p-2 w-full rounded border-2 border-black outline-none text-xl"
              >
                <option value="user_interface">User Friendly Interface</option>
                <option value="content">Rich Content</option>
                <option value="reviews_rating">Reviews and Rating</option>
                <option value="other">Other</option>
              </Field>

              {values.comment === "other" ? (
                <div>
                  <label htmlFor="other" className={`text-xl ${Object.keys(errors).includes("other")?"text-red-600":'text-black'}`}>Please Specify {
                    Object.keys(errors).includes("other")?<span className="text-red-600">*</span>:""
                }  </label>
                  <br />
                  <Field
                    type="text"
                    name="other"
                    id="other"
                    className={`my-2 p-2 w-full rounded border-2 border-black outline-none text-xl ${Object.keys(errors).includes("other")?"border-red-600":'border-black'}`}
                  />
                </div>
              ) : null}
            </div>

            <br />

            <div>
              <label htmlFor="description" className={`text-xl ${Object.keys(errors).includes("description")?"text-red-600":'text-black'}`}>Description {
                    Object.keys(errors).includes("description")?<span className="text-red-600">*</span>:""
                }</label>
              <br />
              <Field
                as="textarea"
                name="description"
                id="description"
                className={`my-2 p-2 w-full rounded border-2 border-black outline-none text-xl ${Object.keys(errors).includes("description")?"border-red-600":'border-black'}`}
              />
            </div>

            <br />

            <div>
              <label htmlFor="rating"
                className={`text-xl ${Object.keys(errors).includes("rating")?"text-red-600":'text-black'}`}
              >Rate us {
                Object.keys(errors).includes("rating")?<>
                <span className="text-red-600">*</span>
                <span>( {errors.rating} )</span>
                </>:""
            } </label>
              <br />
              <div className="flex">
              <abbr title="Enter value from 1 to 5" className="no-underline">
                
              <Field
                type="tel"
                name="rating"
                id="rating"
                className={`my-2 p-2 rounded border-2 outline-none text-xl w-1/4 border-black ${Object.keys(errors).includes("rating")?"border-red-600":'border-black'}`}
              />
              </abbr>
              {
                (!/^(?![\d.]+$).*$/.test(values.rating) )?<StarRating width={35} rating={values.rating}/>:null
              }
              </div>
            </div>

            <br />

            <div className="text-center">
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Feedback;
