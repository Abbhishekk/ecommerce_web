import heroImage from "../components/assets/hero_image.png";


const Hero = () => {
  return (
    <div className="flex justify-between bg-gradient-to-b from-red-100 to-slate-100  md:items-center items-start md:h-screen h-auto mx-auto w-full h-screen" >
        <div className="flex flex-col mx-auto mt-5 " >
            <p className=" md:text-lg text-sm text-orange-500" >NEW ARRIVALS ONLY</p>
            <p className="md:text-7xl text-lg font-semibold" >New <span className="animate-bounce" > 👋</span></p>
            <p className="md:text-7xl text-lg font-semibold" >Collections</p>
            <p className="md:text-7xl text-lg font-semibold" >for everyone</p>
            <p className="mt-5" >
              <button className="flex gap-2 items-center md:text-lg font-semibold border-2 bg-orange-500 md:px-3 px-1 py-1 md:py-3  transition ease-in-out   rounded-3xl text-white hover:text-black hover:bg-transparent hover:border-1 hover:border-orange-500" >Latest Collections <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </p>
        </div>
        <div className="md:mx-auto md:h-screen" >
        
          <img src={heroImage} alt="heroImage" className="md:w-auto h-full object-cover hover:scale-105 transition ease-in-out duration-300  z-0 " />
        </div>

    </div>
  )
}

export default Hero