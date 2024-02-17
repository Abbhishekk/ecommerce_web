// import React from 'react'

const Subscribe = () => {
  return (
    <div className="flex overflow-hidden gap-5 flex-col h-96 justify-center items-center  mx-auto w-4/5 bg-gradient-to-b from-red-100 to-slate-100" >
        <h1 className="md:text-7xl text-xl font-semibold text-slate-700" >Get Exclusive Offers On Your Email</h1>
        <p className="text-lg" >Subscribe to our newsletter and stay updated</p>
        <div className="flex items-center mx-10 gap-0" >
            <input type="text" id="email" placeholder="Your email id" className="text-lg border-2 px-3 py-1 md:py-3  transition ease-in-out   rounded-l-3xl" />
            <button className="text-lg font-semibold border-2 bg-orange-500 md:px-5 px-1 py-1 md:py-3  transition ease-in-out   rounded-r-3xl text-white hover:text-black hover:bg-transparent hover:border-1 hover:border-orange-500" >Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe