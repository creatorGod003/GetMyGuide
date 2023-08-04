import { ErrorMessage, Field, Form, Formik } from "formik";
import Footer from "../UIComponent/Footer";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRef } from "react";

const Contact = () => {

  function sendToast(status) {
    if (status === "success") {
      toast.success("We have registered your issue!");
    } else {
      toast.error("Error in Registoring your issue!");
    }

  }

  async function handleSubmit(values) {
    const { email, message } = values;

    try{
      await addDoc(collection(db, "issues"),{
        email:email,
        message:message,
        timestamp: new Date().toLocaleTimeString()
      })
      sendToast("success");
    }
    catch(error){
      sendToast("error");
    }
    
  }

  const resetFormFunction = useRef(null);


  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1603.3404694237245!2d85.79953494660005!3d20.25066991460047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7a3b9692fff%3A0x87cd0a356bbc39ce!2sITER%2C%20Siksha%20'O'%20Anusandhan!5e0!3m2!1sen!2sin!4v1690812369028!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(0.4) contrast(1.2) opacity(0.7)",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex z-30">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Need Help?
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
            
            </p>

            <Formik initialValues={
                {
                    email:"",
                    message:""
                }
            }
            
            onSubmit={
              (values)=>{
                console.log(values)
                handleSubmit(values);
                resetFormFunction.current();
              }
            }

            validate={
              (values)=>{
                const errors={};

                if(values.email==""){
                  errors.email ="Required*"
                }
                else if(!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i.test(
                  values.email
                )){
                  errors.email = "Not a valid email"
                }

                if(values.message==""){
                  errors.message="Required*"
                }

                return errors;
              }
            }
            
            >
              
            {

              ({resetForm})=>(
                <Form>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <ErrorMessage name="email" component={"div"} className="text-red-400"/>
                  <br />
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <ErrorMessage name="message" component={"div"} className="text-red-400"/>
                  <br />
                  <Field 
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Describe your issue"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    
                  />
                </div>
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={
                  ()=>{
                    resetFormFunction.current=resetForm;
                  }
                }>
                    Submit
                </button>
              </Form>
              )

            }

            </Formik>

            
            <p className="text-xs text-gray-500 mt-3">
            All information provided in this form will be treated confidentially and used solely for improving our products and services.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
