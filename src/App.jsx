import { Routes, Route } from "react-router-dom";
import NavBar from "./components/webpages/NavBar";
import Home from "./components/webpages/Home";
import Contact from "./components/webpages/Contact";
import About from "./components/webpages/About";
import FindMyGuide from "./components/webpages/FindMyGuide";
import Login from "./components/webpages/Login/Login";
import { useSelector } from "react-redux";
import SignUp from "./components/webpages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./components/webpages/Profile/Profile";
import ProfileEdit from "./components/webpages/Profile/ProfileEdit";
import PackageDescription from "./components/webpages/PackageDescription";
import Feedback from "./components/webpages/Feedback";


function App() {

  const loginPopUp = useSelector((state)=>{return state.stateControl.loginPopUp})
  const signupPopUp = useSelector((state)=>{return state.stateControl.signUpPopUp})
  const feedbackPopUp = useSelector((state)=>{return state.stateControl.feedbackPopUp})

  return (
    <div className={`relative ${(loginPopUp || signupPopUp||feedbackPopUp)?"bg-black/30":""}`} style={(loginPopUp || signupPopUp||feedbackPopUp)?{pointerEvents:"none"}:{}}>
      <ToastContainer className="fixed top-10 right-10" autoClose="200" pauseOnHover="false"/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="find" element={<FindMyGuide />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profileEdit" element={<ProfileEdit />} />
        <Route path="packageDescription" element={<PackageDescription />} />
      </Routes>

      {
        loginPopUp? <Login/>:signupPopUp?<SignUp/>:feedbackPopUp?<Feedback/>:""
      }

    </div>
  );
}

export default App;
