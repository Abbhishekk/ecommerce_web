// import React from 'react'
import bannerImg from "./assets/exclusive_image.png"
const SaleBanner = () => {
  return (
    <div className="flex justify-between items-center my-10 mx-auto w-4/5 bg-gradient-to-b from-red-100 to-slate-100" >
        <div className="md:m-10" >
            <h1 className="text-7xl font-semibold" >Exclusive <br /> Offers For You </h1>
            <p className="text-sm" >ONLY ON BEST SELLER PRODUCTS</p>
            <button className=" text-lg font-semibold mt-5 border-2 border-orange-500 px-3 py-1  transition ease-in-out   rounded hover:bg-orange-500 hover:text-white">CHECK NOW</button>
        </div>
        <div>
            <img src={bannerImg} alt="Banner Image" />
        </div>
    </div>
  )
}

export default SaleBanner