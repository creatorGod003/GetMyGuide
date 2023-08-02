import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Field, Form, Formik } from "formik";
import Review from "../UIComponent/Review";
import Footer from "../UIComponent/Footer";
import Button from "../UIComponent/Button";

const PackageDescription = () => {
  return (
    <div>
      <section className="lg:mx-20 md:mx-10 sm:mx-0 sm:bg-black md:bg-pink-500 lg:bg-orange-700 xl:bg-yellow-500">
        <header className="font-bold text-3xl flex justify-center sm:text-left my-10">
          <span className="inline-block">Konark Sun Temple </span>
        </header>

        <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full sm:w-[90vw] lg:w-[80vw] xl:w-[70vw] h-[40vh] sm:h-[50vh] lg:h-[80vh] shadow-gray-400 shadow-md rounded-md"
        >
          <SwiperSlide className="bg-green-400">
            <img src={"https://tailwindcss.com/img/card-top.jpg"} alt="" className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide className="bg-green-400">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-blue-400">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-green-400">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-green-400">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-blue-400">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-green-400">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-green-400">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-blue-400">Slide 3</SwiperSlide>
        </Swiper>
      </section>

      <section className="lg:mx-20 md:mx-10 mx-5  my-10 text-md md:text-lg lg:text-xl">
        <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
          <span>Overview</span>
        </header>

        <p className="text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus
          voluptates repellat commodi accusantium nisi architecto voluptas iure
          impedit consectetur.
        </p>
      </section>

      <section className="lg:mx-20 md:mx-10 mx-5 my-10 md:my-16 text-md md:text-lg lg:text-xl">
        <div>
          <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
            <span>Select Participants and Date</span>
          </header>
          <div className=" my-10 md:justify-around bg-blue-200 rounded-md  lg:w-2/3 xl:w-1/2 sm:bg-black md:bg-pink-500 lg:bg-orange-700 xl:bg-yellow-500">
            <Formik>
              <Form className="flex flex-col items-center sm:flex-row sm:justify-around p-6 rounded-lg">
                <div className="flex items-center">
                  <button className="bg-green-200 m-2 p-2 rounded-md">-</button>
                  <Field
                    type="number"
                    name="participants"
                    className=" w-16 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <button className="bg-green-200 m-2 p-2 rounded-md">+</button>
                </div>

                <div className="my-5">
                  <Field
                    type="date"
                    name="date"
                    className="text-center p-2 rounded-md"
                  />
                </div>

                <div>
                  <Field
                    as="select"
                    name="time"
                    className="text-center p-2 rounded-md"
                  >
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                  </Field>
                </div>
              </Form>
            </Formik>
            <div className="text-center p-4">
              <Button name={"Book Now"} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-2/3 lg:mx-20 md:mx-10 mx-5 my-10 md:my-16">
        <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
          <span>Experience</span>
        </header>

        <div className="my-8">
          <div className="my-10">
            <h1 className="text-lg lg:text-xl my-4">Hightlights</h1>
            <ul className="list-disc pl-4">
              <li className="p-2 my-1 sm:my-2 md:my-3 lg:my-4">Highlight 1</li>
              <li className="p-2 my-1 sm:my-2 md:my-3 lg:my-4">Highlight 2</li>
              <li className="p-2 my-1 sm:my-2 md:my-3 lg:my-4">Highlight 3</li>
              <li className="p-2 my-1 sm:my-2 md:my-3 lg:my-4">Highlight 4</li>
            </ul>
          </div>
          <hr />
          <div className="my-10">
            <h1 className="text-xl my-4">Full Description</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              soluta quisquam alias quas tempore cum possimus minima. Adipisci
              nostrum illo, fugiat deserunt mollitia eos expedita ipsum hic,
              repudiandae tempora maiores?
            </p>
          </div>
          <hr />
          <div className="my-10">
            <h1 className="text-xl my-4">Includes</h1>
            <ul className="list-none">
              <li className="p-2 my-1 sm:my-2 md:my-3 lg:my-4">✅ Include 1</li>
              <li className="p-2 my-1 sm:my-2 md:my-3 lg:my-4">✅ Include 2</li>
              <li className="p-2 my-1 sm:my-2 md:my-3 lg:my-4">✅ Include 3</li>
              <li className="p-2 my-1 sm:my-2 md:my-3 lg:my-4">✅ Include 4</li>
            </ul>
          </div>
          <hr />
          <div className="my-10">
            <h1 className="text-xl my-4">Meeting Point</h1>
            <p className="text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              debitis explicabo ipsum maiores ratione ipsam illum similique
              dolorem quos consequatur!
            </p>
          </div>
          <hr />

          <div className="my-10">
            <h1 className="">
              <span className="text-xl my-4 font-semibold">
                Important Information
              </span>
              <br />
              <span className="text-lg my-4 block">Know Before you go</span>
            </h1>



            <p className="text-md">
              <ul className="list-disc pl-4">
                <li className="p-2 my-1 sm:my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, voluptatibus.
                </li>
                <li className="p-2 my-1 sm:my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, voluptatibus.
                </li>
                <li className="p-2 my-1 sm:my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, voluptatibus.
                </li>
                <li className="p-2 my-1 sm:my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, voluptatibus.
                </li>
                <li className="p-2 my-1 sm:my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, voluptatibus.
                </li>
                <li className="p-2 my-1 sm:my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, voluptatibus.
                </li>
                <li className="p-2 my-1 sm:my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, voluptatibus.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>

          <hr />
      <section className="lg:mx-20 md:mx-10 mx-5 my-10 md:my-16 text-md md:text-lg lg:text-xl">
      <header className="font-semibold text-left my-5 text-xl md:text-2xl lg:text-3xl">
          <span>Customer Reviews</span>
        </header>
        <Review />
        <Review />
        <Review />
        <div>
            <Button name={"Load More"}/>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default PackageDescription;
