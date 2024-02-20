// import React from 'react'
import logo from './assets/logo.png'
import WhatsApp from "./assets/whatsapp_icon.png";
import instagram from "./assets/instagram_icon.png";
import pinetrest from "./assets/pintester_icon.png";
const Footer = () => {
  return (
    <div className='mb-5' >
        <div>
            <div className="nav-logo flex flex-col  items-center justify-center">
                <img src={logo} alt="Logo" />
                <p className='md:text-3xl font-bold'>
                    SH<span className='text-orange-500' >O</span>PP<span className='text-orange-500' >E</span>R
                </p>
            </div>
        </div>
        <div className='flex justify-center m-6' >
            <ul className='flex flex-col md:flex-row md:gap-10 justify-between' >
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='flex justify-center gap-10 h-5' >
            <img src={WhatsApp} alt="Whatsapp" className='h-auto' />
            <img src={pinetrest} alt="Pinetrest" className='h-auto' />
            <img src={instagram} alt="Instagram" className='h-auto' />
        </div>
    </div>
  )
}

export default Footer