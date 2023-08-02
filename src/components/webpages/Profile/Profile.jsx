import { useNavigate } from "react-router-dom";
import Footer from "../../UIComponent/Footer";    
import ReadableField from "../../UIComponent/ReadableField";
import Review from "../../UIComponent/Review";
import SectionHeader from "../../UIComponent/SectionHeader";
const Profile = () => {

    const navigate = useNavigate();

  return (
    
    <div className="min-w-screen">
        <section className="relative mb-60 sm:mb-40">
            
            <div className="bg-black h-[300px] lg:h-[400px]">
                Background
            </div>
            <div className="w-[220px] lg:w-[500px] h-[220px] sm:w-[320px] sm:h-[300px] lg:h-[400px] absolute left-1/2 translate-x-[-50%] top-1/2 sm:top-1/3 sm:left-1/3 sm:flex">
                <img src={"/src/assets/profile.jpg"} className="h-full w-full border-8 rounded-full border-white shadow-lg shadow-white" alt="" />
                <div className="text-center my-2 self-center sm:text-left sm:ml-10 flex flex-col items-center sm:items-start">
                    <span className="text-black text-2xl font-bold sm:text-white">Gurpreet Singh</span>
                    <button className="bg-blue-600 text-white text-left h-fit px-4 py-2 rounded my-2 border-2 border-white w-fit"

                        onClick={
                            ()=>{
                                navigate("/profileEdit")
                            }
                        }
                    
                    >
                        <abbr title="edit profile" className="border-none no-underline">Edit</abbr>
                    </button>
                </div>
            </div>

            
            
        </section>

        <section className="mx-20 sm:mx-35 lg:mx-50 xl:mx-70 2xl:mx-80">
            
            <header className="font-bold text-3xl my-4 text-center sm:text-left">
                <span>About Me</span>
            </header>
            
            <p className="text-2xl text-center sm:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex earum, aliquam voluptate autem modi nihil soluta praesentium porro laboriosam dignissimos.
            </p>
            

        </section>

        <section className="text-xl my-20">
            
            <div className="grid grid-cols-1 md:grid-cols-2 mx-20 sm:mx-35 lg:mx-50 xl:mx-70 2xl:mx-80">

                <div className="grid grid-cols-1 grid-rows-6 md:ml-8">


                    <ReadableField name="Name" data={{data:"Gurpreet Singh"}} type="text" />
                    <ReadableField name="Email" data={{data:"abc@gmail.com"}} type="text"/>
                    <ReadableField name="Phone" data={{data:"1234567890",country_code:"+91"}} type="phone"/>
                    <ReadableField name="Experience" data={{data:"5 years"}} type="text"/>
                    <ReadableField name="Languages" data={{data:["english","punjabi","hindi"]}} type="array"/>
                    <ReadableField name="GovernmentID" data={{data:"Aadhar"}} type="text"/>
                    <ReadableField name="GovernmentID Number" data={{data:"1234567890"}} type="number"/>
                    

                </div>
                <div  className="grid grid-cols-1 grid-rows-5">
                    <ReadableField name="Country" data={{data:"India"}} type="text"/>
                    <ReadableField name="State" data={{data:"Punjab"}} type="text"/>    
                    <ReadableField name="City" data={{data:"Amritsar"}} type="text"/>
                    <ReadableField name="Pincode" data={{data:"143001"}} type="text"/>
                    <ReadableField name="Rating" data={{data:4.8}} type="rating"/>      
                    <ReadableField name="Knowledge about places" data={{data:["khandagiri","lingaraj","nandankanan"]}} type="array"/>
                </div>

            </div>


        </section>
        <section className="flex flex-col justify-center w-screen px-8 my-10">
            <SectionHeader name={"Reviews"}/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>

            <div className="flex justify-center sm:justify-end">
            <button className="p-2 bg-blue-600 text-white w-fit rounded">
                View All
            </button>
            </div>
        </section>

        <section>
            <Footer/>
        </section>
    
    </div>

  )
}

export default Profile