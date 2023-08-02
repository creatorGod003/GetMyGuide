import Footer from "../UIComponent/Footer";
import Card from "../UIComponent/Card";
// import Button from "../UIComponent/Button";
import { useEffect, useRef, useState } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { BeatLoader } from "react-spinners";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

const FindMyGuide = () => {
  const [text, setText] = useState("");
  const mutableText = useRef("");
  const [loader, setLoader] = useState(false);

  const tempSearchResult = useRef([]);
  const [searchResult, setSearchResult] = useState([]);

  const vw = window.innerWidth;
  const number_of_loved_destination = vw > 1024 ? 4 : 2;
  const loaderRef = useRef();

  async function getSearchDoc() {
    tempSearchResult.current = [];

    const q = query(
      collection(db, "tourist_locations"),
      where("cityarray", "array-contains", mutableText.current)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tempSearchResult.current.push(doc.data());
    });

    const array = JSON.stringify(tempSearchResult.current);
    setSearchResult(JSON.parse(array));
  }

  const [latestDoc, setLatestDoc] = useState(null);
  const [lovedDestination, setLovedDestination] = useState([]);
  const updatedDestination = useRef([]);
  const numberOfSlides = vw > 1024 ? 3.2 : vw > 768 ? 2.2 : 1.5;

  async function getMoreDestination() {
    const destinationRef = collection(db, "loved_destination");

    const q = query(
      destinationRef,
      orderBy("rating"),
      startAfter(latestDoc || 0),
      limit(number_of_loved_destination)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      updatedDestination.current.push(doc.data());
    });

    setLatestDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    console.log(querySnapshot.docs);
    const array = JSON.stringify(updatedDestination.current);
    setLovedDestination(JSON.parse(array));

    if (
      querySnapshot.empty ||
      querySnapshot.docs.length < number_of_loved_destination
    ) {
      loaderRef.current.style.display = "none";
    } else {
      console.log("still there...");
    }
  }

  useEffect(() => {
    console.log("useEffect");
    getMoreDestination();
  }, []);

  const [selectedSearchPlace, setSelectedSearchPlace] = useState("");
  const [searchPackages, setSearchPackages] = useState([]);
  const tempSearchPackages = useRef([]);

  async function onSelectSearchResult() {
    const q = query(
      collection(db, "tourist_packages"),
      where("city", "==", selectedSearchPlace)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      tempSearchPackages.current.push(doc.data());
    });

    const array = JSON.stringify(tempSearchPackages.current);
    setSearchPackages(JSON.parse(array));
  }

  return (
    <div className="">
      <div
        className=""
        style={{
          backgroundImage: "url(/src/assets/hero-img2.jpeg)",
          height: "80vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="absolute left-1/2 translate-x-[-50%] bottom-1/3 md:bottom-1/4 w-full p-2 sm:w-3/4 md:w-1/2 lg:w-2/5">
          <form className="flex justify-around items-center bg-white rounded-full p-2 md:p-4 shadow-md shadow-slate-700">
            <img
              src={"/src/assets/search.svg"}
              alt=""
              className="w-8 h-8 basis-6"
            />
            <input
              type="text"
              name="search_place"
              className="focus:outline-none flex-auto py-2 px-1 placeholder:text-center md:text-xl md:px-4"
              placeholder="Where are you going?"
              value={text}
              autoComplete="off"
              onChange={(e) => {
                mutableText.current = e.target.value;
                setText(e.target.value);
                getSearchDoc();
              }}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 px-4 rounded-full hover:bg-blue-800 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                getSearchDoc();
              }}
            >
              Search
            </button>
          </form>

          <div
            className={`bg-white my-2 rounded ${
              text.length != 0 ? "px-5 py-4" : ""
            } `}
          >
            {text.length !== 0 &&
              searchResult.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-start items-center my-1"
                    onClick={() => {
                      setText("");
                      setSearchResult([]);
                      setSelectedSearchPlace(item.place);
                      onSelectSearchResult();
                    }}
                  >
                    <div>
                      <img
                        src={"/src/assets/location.svg"}
                        alt=""
                        className="w-8 h-8 mx-4"
                      />
                    </div>
                    <div>{item.display_name}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      (searchPackages.length !== 0) && (
      <section className="lg:mx-20 md:mx-10 my-5 text-md md:text-lg lg:text-xl flex flex-col">
        <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
          <span className="font-navbar">Most Loved Destination</span>
        </header>

        <Swiper
          slidesPerView={numberOfSlides}
          spaceBetween={2}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-full bg-red-600/20 h-full"

        >
          {searchPackages.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  title={item.title}  
                  description={item.description}
                  rating={item.rating}
                  price={item.price}
                />

        </SwiperSlide>
            )})
              
          }

        </Swiper>
      </section>
      


      <section className="lg:mx-20 md:mx-10 mx-5 my-10 md:my-16 text-md md:text-lg lg:text-xl">
        <header className="font-bold text-3xl text-center sm:text-left my-10">
          <span>Most Loved destination </span>
        </header>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {lovedDestination.map((item, index) => {
            return (
              <Card
                key={"$" + index}
                title={item.place}
                description={item.description}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
        </div>

        <div className="text-center md:text-right mx-20 my-16 md:my-8">
          <button
            className="p-4 bg-blue-600 text-white rounded-md"
            onClick={(e) => {
              e.preventDefault();
              setLoader(true);
              getMoreDestination();
              setLoader(false);
            }}
            ref={loaderRef}
          >
            {loader ? <BeatLoader /> : "Load More"}
          </button>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default FindMyGuide;
