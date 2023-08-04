import AdminCard from "../UIComponent/AdminCard"


const Admin = () => {
  return (
    <div>
        <section className=" p-4 lg:mx-20 md:mx-10 mx-5 my-5 sm:my-10 md:my-16 text-md md:text-lg lg:text-xl flex flex-col items-center sm:flex-row sm:justify-around lg:justify-center">

            <div className="inline-block">
                <img src="/public/assets/admin.png" alt="" className="w-40 h-40"/>
            </div>

            <header className="font-bold text-4xl my-10 font-cursiveheader">
            <span>Welcome, Admin</span>
            </header>

        </section>
        <hr className="bg-black" />

        <section className="lg:mx-20 md:mx-10 mx-5 my-10 md:my-16 text-md md:text-lg lg:text-xl">
            
            <header className="font-bold text-3xl text-center my-10 font-navbar">
                <span> Information You may like </span>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <AdminCard title="Manage travellers and guides" link={"path"}/>
                <AdminCard title="Manage tourist places" link={"path"}/>
                <AdminCard title="Manage bookings details" link={"path"}/>
                <AdminCard title={"Manage Issues from here "} link={"path"}/>
                <AdminCard title={"Manage Feedbacks"} link={"path"}/>
                <AdminCard title={"Manage Packages"} link={"path"}/>

            </div>        
        
      </section>

    </div>
  )
}

export default Admin