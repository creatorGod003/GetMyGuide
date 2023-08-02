import Footer from "../UIComponent/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Card from "../UIComponent/Card";
import Review from "../UIComponent/Review";
import { setFeedbackPopUp } from "../../redux_store/features/stateControlSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const vw = window.innerWidth;
  const numberOfSlides = vw > 1024 ? 3.2 : vw > 768 ? 2.2 : 1.5;
  const dispatch = useDispatch();

  return (
    <div>
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
            Discover India{"'"}s Rich Tapestry of Adventures
            <br />
            <span className="text-xl">Exploring nature{"'"} love</span>
          </p>
        </div>
      </section>

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
          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>
          
          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

        </Swiper>
      </section>

      <section className="lg:mx-20 md:mx-10 my-5 text-md md:text-lg lg:text-xl flex flex-col">
        <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
          <span className="font-navbar">Top Temple Destination</span>
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
          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="lg:mx-20 md:mx-10 my-5 text-md md:text-lg lg:text-xl flex flex-col">
        <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
          <span className="font-navbar">Top Nature Destination</span>
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
          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="lg:mx-20 md:mx-10  my-5 text-md md:text-lg lg:text-xl flex flex-col">
        <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
          <span className="font-navbar">Top Historical Destination</span>
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
          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>

          <SwiperSlide className="">
            <Card />
          </SwiperSlide>
          
        </Swiper>
      </section>

      <section className="lg:mx-20 md:mx-10 mx-5  my-5 text-md md:text-lg lg:text-xl flex flex-col">
        <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
          <span className="font-navbar">Testimonials</span>
        </header>

        <Swiper
          slidesPerView={numberOfSlides}
          spaceBetween={1}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-full bg-red-600/20 h-full"
        >
          <SwiperSlide className="">
            <Review />
          </SwiperSlide>

          <SwiperSlide className="">
            <Review />
          </SwiperSlide>

          <SwiperSlide className="">
            <Review />
          </SwiperSlide>

          <SwiperSlide className="">
            <Review />
          </SwiperSlide>

          <SwiperSlide className="">
            <Review />
          </SwiperSlide>

          <SwiperSlide className="">
            <Review />
          </SwiperSlide>
        </Swiper>

        <div className="my-4 text-center lg:text-left">
          <button className="bg-blue-600 text-white p-2 px-4 rounded-full hover:bg-blue-800 transition-all duration-300" onClick={
            ()=>{
              dispatch(setFeedbackPopUp(true));
            }
          }>
            Give Feedback
          </button>
        </div>
      </section>

      <section className="lg:mx-20 md:mx-10 mx-5  my-5 text-md md:text-lg lg:text-xl flex flex-col">
      <Footer />
      </section>
    </div>
  );
};

export default Home;
