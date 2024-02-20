

// import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const [hamburger, setHamburger] = useState(false)
    
  
    return (
        <div className=' flex justify-between w-auto z-40 items-center mr-10 ml-10 mt-2 pb-2 '>
            <div className="nav-logo md:flex hidden items-center justify-center">
                <img src={logo} alt="Logo" />
                <p className='text-3xl font-bold'>
                    SH<span className='text-orange-500' >O</span>PP<span className='text-orange-500' >E</span>R
                </p>
            </div>
            <div className='md:hidden block cursor-pointer hover:text-gray-500'>
                {!hamburger && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" onClick={() => setHamburger(!hamburger)} strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>}
                {hamburger &&<svg xmlns="http://www.w3.org/2000/svg" onClick={() => setHamburger(!hamburger)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                }
                {hamburger &&  <div>
                    <ul className="md:hidden gap-5 md:text-lg font-semibold absolute bg-white w-56 py-6 px-3  transition ease-in-out flex-col">
                        <li className='border-b-2 border-orange-500 cursor-pointer hover:text-gray-500 m-5'> <Link to={"/"} > Shop</Link></li>
                        <li className='border-b-2 border-orange-500 cursor-pointer hover:text-gray-500 m-5'><Link to={"/men"} >Men </Link> </li>
                        <li className='border-b-2 border-orange-500 cursor-pointer hover:text-gray-500 m-5'><Link to={"/women"} >Women </Link></li>
                        <li className='border-b-2 border-orange-500 cursor-pointer hover:text-gray-500 m-5'><Link to={"/kids"} >Kids </Link></li>
                    </ul>

                </div>}
            </div>
            <ul className="md:flex gap-5 text-lg font-semibold  transition ease-in-out hidden">
                        <li className='hover:border-b-2 hover:border-orange-500 cursor-pointer hover:text-gray-500'> <Link to={"/"} > Shop</Link></li>
                        <li className='hover:border-b-2 hover:border-orange-500 cursor-pointer hover:text-gray-500'><Link to={"/men"} >Men </Link> </li>
                        <li className='hover:border-b-2 hover:border-orange-500 cursor-pointer hover:text-gray-500'><Link to={"/women"} >Women </Link></li>
                        <li className='hover:border-b-2 hover:border-orange-500 cursor-pointer hover:text-gray-500'><Link to={"/kids"} >Kids </Link></li>
            </ul>
            <div className="nav-logo md:hidden w-auto sm:flex hidden items-center justify-center">
                <img src={logo} alt="Logo" className='w-10' />
                <p className='text-3xl font-bold'>
                    SH<span className='text-orange-500' >O</span>PP<span className='text-orange-500' >E</span>R
                </p>
            </div>
            <div className='flex gap-5 items-center'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <p className='absolute mt-[-35px] ml-[15px] bg-orange-500 px-1 text-white rounded-full text-xs' >0</p>
                </div>
                <p>

                    <button className='border-2 border-orange-500 px-3 py-1  transition ease-in-out   rounded hover:bg-orange-500 hover:text-white' > <Link to={"/login"} > Login </Link></button>
                </p>
            </div>

        </div>
    )
}

export default NavBar