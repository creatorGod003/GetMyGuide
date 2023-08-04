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
  const temple_destination = [
    {
      title: "Konark Sun Temple",
      description:"Konark Sun Temple is a 13th-century CE Sun temple at Konark about 35 kilometres northeast from Puri on the coastline of Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga Dynasty about 1250 CE.",
      rating: 4.5,
      price: 1000,
    },
    {
      title: "Jagannath Temple",
      description:"The Jagannath Temple of Puri is a sacred Vaishnava temple dedicated to Lord Jagannath and located on the eastern coast of India, at Puri in the state of Odisha.",
      rating: 4.5,
      price: 1000,
    },
    {
      title: "Lingaraja Temple",
      description:"Lingaraja Temple is a Hindu temple dedicated to Shiva and is one of the oldest temples in Bhubaneswar, the capital of the Indian state of Odisha. The temple is the most prominent landmark of the Bhubaneswar city and one of the major tourist attractions of the state.",
      rating: 4.5,
      price: 1000,
    },
    {
      title: "Rajarani Temple",
      description:", Rajarani temple is a perfect symphony of skillful planning, symmetry of form and exquisite craftsmanship. No wonder it is hailed as a masterpiece of Odisha Temple Architecture.",
      rating: 4.5,
      price: 1000,
    }
  ]

  const nature_destination = [
    {
      title: "Chilika Lake",
      description:"Chilika Lake is a brackish water lagoon, spread over the Puri, Khurda and Ganjam districts of Odisha state on the east coast of India, at the mouth of the Daya River, flowing into the Bay of Bengal, covering an area of over 1,100 km2.",
      rating: 4.5,
      price: 1000,
    },
    {
      title: "Nandankanan Zoological Park",
      description:"Nandankanan Zoological Park is a 437-hectare zoo and botanical garden in Bhubaneswar, Odisha, India. Established in 1960, it was opened to the public in 1979 and became the first zoo in India to join World Association of Zoos and Aquariums in 2009.",
      rating: 4.5,
      price: 1000,
    },
    {
      title: "Simlipal National Park",
      description:"Located in the state of Odisha, India, Simlipal National Park is a stunning natural reserve known for its rich biodiversity and lush landscapes",
      rating: 4.5,
      price: 1000,
    },
    {
      title: "Bhitarkanika National Park",
      description:"Situated in the coastal region of Odisha, Bhitarkanika National Park is a unique wetland ecosystem and one of the largest mangrove forests in India. ",
      rating: 4.5,
      price: 1000,
    },
    {
      title: "Nalabana Bird Sanctuary",
      description:"Located within Chilika Lake, the largest brackish water lagoon in India, Nalabana Bird Sanctuary is a vital habitat for migratory birds.",
      rating: 4.5,
      price: 1000,
    }
  ]

  const historical_destination = [
    {
      title: "Udayagiri and Khandagiri Caves",
      description:"Udayagiri and Khandagiri Caves are partly natural and partly artificial caves of archaeological, historical and religious importance near the city of Bhubaneswar in Odisha, India.",
      rating: 4.5,
      price: 1000,
    },
    {
      title: "Dhauli Giri Hills",
      description:"The site holds immense significance in Buddhist history as it is believed to be the location where Emperor Ashoka, after witnessing the devastation caused by the Kalinga War, renounced violence and embraced Buddhism",
      rating: 4.5,
      price: 1000,
    },
    {
      title: "Ratnagiri Buddhist Excavation",
      description:"The excavation at Ratnagiri has revealed a significant Buddhist monastic complex dating back to the 6th century CE, which was an important center of learning and religious activities during the Mahayana and Vajrayana periods",
      rating: 4.5,
      price: 1000,
    },
    {
      title: "Ratnagiri Buddhist Excavation",
      description:"The excavation at Ratnagiri has revealed a significant Buddhist monastic complex dating back to the 6th century CE, which was an important center of learning and religious activities during the Mahayana and Vajrayana periods",
      rating: 4.5,
      price: 1000,
    },
  ]

  return (
    <div>
      <section id="hero" className="relative text-2xl lg:text-3xl">
        <div
          className="w-full h-[80vh]"
          style={{
            backgroundImage: "url('/public/assets/hero-img3.jpg')",
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
          
          {
            nature_destination.map((destination, index) => (
              <SwiperSlide className="" key={index}>
                <Card title={destination.title} description={destination.description} rating={destination.rating} price={destination.price} />
              </SwiperSlide>
            ))
          }

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
          
          {
            temple_destination.map((destination, index) => (
              <SwiperSlide className="" key={index}>
                <Card title={destination.title} description={destination.description} rating={destination.rating} price={destination.price} />
              </SwiperSlide>
            ))
          }

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
          {
            nature_destination.map((destination, index) => (
              <SwiperSlide className="" key={index}>
                <Card title={destination.title} description={destination.description} rating={destination.rating} price={destination.price} />
              </SwiperSlide>
            ))
          }
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
          {
            historical_destination.map((destination, index) => (
              <SwiperSlide className="" key={index}>
                <Card title={destination.title} description={destination.description} rating={destination.rating} price={destination.price} />
              </SwiperSlide>
            ))
          }
          
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
