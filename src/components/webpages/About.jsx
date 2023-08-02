import { Link } from "react-router-dom";
import Footer from "../UIComponent/Footer";

const About = () => {
  return (
    <div className="bg-pink-200">
      <section id="hero" className="relative text-2xl lg:text-3xl">
        <div
          className="w-full h-[80vh]"
          style={{
            backgroundImage: "url('/src/assets/hero-img3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>

        <div className="absolute bottom-1/2 translate-y-[50%] left-1/2 translate-x-[-50%] bg-black bg-opacity-50 rounded pl-4 p-4 w-4/5 md:w-1/2">
          <p className="font-extrabold text-white font-navbar">
            Welcome to Our World of Discovery and Connection!
          </p>
        </div>
      </section>

      <section className="mx-5 md:mx-10 lg:mx-14 text-md md:text-xl my-8 sm:my-12 md:my-14 lg:my-16">
        <header className="font-semibold text-center my-5 text-xl md:text-2xl lg:text-3xl">
          <span className="font-cursiveheader">
            Your Gateway to Unforgettable Experiences
          </span>
        </header>

        <p className="my-4 text-center">
          Our platform is designed to create unforgettable travel experiences by
          offering a seamless and personalized way for travelers and guides to
          connect, collaborate, and embark on extraordinary journeys together.
        </p>
      </section>

      <section className="mx-5 md:mx-10 lg:mx-14 text-md md:text-xl my-8 sm:my-12 md:my-14 lg:my-16">
        <h2 className="font-semibold text-center my-5 text-xl md:text-2xl lg:text-3xl font-navbar">
          What we offer
        </h2>

        <div
          className="lg:grid grid-cols-2 grid-rows-5 my-10 grid-flow-col p-2 sm:p-4 md:p-8 rounded-lg"
          style={{ backgroundImage: "url('/src/assets/rainbow-vortex.svg')" }}
        >
          <p className="text-white py-2 pl-4 flex flex-col justify-evenly text-left col-start-1 col-end-2 m-4 border-4 border-r-red-600 border-y-red-600 border-l-white rounded shadow-slate-600 shadow-sm">
            <h1 className="block font-semibold my-1">Handpicked Guides</h1>
            <span className="text-sm md:text-md lg:text-xl">
              We curate a network of highly skilled and verified guides who are
              not only experts in their fields but also passionate storytellers
              and cultural ambassadors.
            </span>
          </p>

          <p className="text-white py-2 pl-4 flex flex-col justify-evenly text-left col-start-2  col-end-3 row-start-2 row-end-3 m-4 border-4 border-l-blue-600 border-y-blue-600 border-r-white rounded shadow-slate-600 shadow-sm">
            <h1 className="block font-semibold my-1">
              Easy Booking and Secure Payments
            </h1>
            <span className="text-sm md:text-md lg:text-xl">
              Our user-friendly platform allows you to browse, compare, and book
              tours effortlessly. We prioritize your safety and security,
              ensuring that all payments are processed securely.
            </span>
          </p>

          <p className="text-white py-2 pl-4 flex flex-col justify-evenly text-left col-start-1 col-end-2 row-start-3 row-end-4 m-4 border-4 border-r-red-600 border-y-red-600 border-l-white rounded shadow-slate-600 shadow-sm">
            <h1 className="block font-semibold my-1">Service Across India</h1>
            <span className="text-sm md:text-md lg:text-xl">
              From vibrant city excursions to secluded wilderness expeditions,
              Get My Guide offers coverage of destinations throughout India.
              Regardless of your desired location, we will assist you in finding
              the ideal guide to accompany you on your journey.
            </span>
          </p>

          <p className="text-white py-2 pl-4 flex flex-col justify-evenly text-left col-start-2  col-end-3 row-start-4 row-end-5 m-4 border-4 border-l-blue-600 border-y-blue-600 border-r-white rounded shadow-slate-600 shadow-sm">
            <h1 className="block font-semibold my-1">Supportive Community</h1>
            <span className="text-sm md:text-md lg:text-xl">
              We value every traveler and guide in our community. Our support
              team is available around the clock to assist you with any queries
              or concerns you may have. Your satisfaction is our top priority.
            </span>
          </p>

          <p className="text-white py-2 pl-4 flex flex-col justify-evenly text-left col-start-1  col-end-2 row-start-5 row-end-6 m-4 border-4 border-r-red-600 border-y-red-600 border-l-white rounded shadow-slate-600 shadow-sm">
            <h1 className="block font-semibold my-1">Tailored Experiences:</h1>
            <span className="text-sm md:text-md lg:text-xl">
              We understand that each traveler is unique, and their interests
              and preferences may differ which is why we offers a diverse range
              of tours and activities to cater to every type of traveler,
              whether you are an adrenaline junkie, history buff, food lover, or
              nature enthusiast.
            </span>
          </p>
        </div>
      </section>

      <section className="lg:mx-20 md:mx-10 mx-5  my-5 text-md md:text-lg lg:text-xl">
        <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
          <span className="font-navbar">Our Vision</span>
        </header>

        <p className="text-start">
          We envision a world where travel is not just about ticking off
          bucket-list items, but about immersing oneself in the culture,
          history, and beauty of each destination. By bridging the gap between
          travelers and guides, we aim to foster meaningful connections that
          enrich the travel experience and leave a positive impact on local
          communities.
        </p>
      </section>

      <section className="lg:mx-20 md:mx-10 mx-5  my-10 text-md md:text-lg lg:text-xl">
        <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
          <span className="font-navbar">Join Us on Your Next Adventure! </span>
        </header>

        <p className="text-start">
          Whether you are a passionate explorer seeking hidden gems or a
          seasoned guide eager to share your knowledge, Get My Guide welcomes
          you with open arms. Together, let us embark on a journey filled with
          discovery, laughter, and unforgettable memories.
        </p>

        <button className="p-2 bg-red-600 text-md text-white rounded-md my-4">
          <Link to="/find">Find My Guide</Link>
        </button>
      </section>

      <section className="lg:mx-20 md:mx-10 mx-5  my-10 text-md md:text-lg lg:text-xl flex justify-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl my-4">Creator</h2>
          <div className="flex flex-col p-4 sm:flex-row items-center justify-evenly bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-lg sm:rounded-md sm:rounded-l-lg w-[200px] h-[300px] md:w-[300px] md:h-[400px]"
                src="/src/assets/profile.jpg"
                alt="Jese Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Ashutosh Ranjan</a>
              </h3>

              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Founder and CEO
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mx-20 md:mx-10 mx-5 text-md md:text-lg lg:text-xl">
        <Footer />
      </section>
    </div>
  );
};

export default About;
