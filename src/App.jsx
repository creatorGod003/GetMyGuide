import { Routes, Route } from "react-router-dom";
import NavBar from "./components/webpages/NavBar";
import Home from "./components/webpages/Home";
import Contact from "./components/webpages/Contact";
import About from "./components/webpages/About";
import FindBuddy from "./components/webpages/FindBuddy";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="find" element={<FindBuddy />} />
      </Routes>
    </>
  );
}

export default App;
