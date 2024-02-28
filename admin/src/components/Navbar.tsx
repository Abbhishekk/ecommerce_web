


import logo from '../assets/nav-logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
    
    
    
  
    return (
        <div className=' flex justify-between w-auto z-40 items-center mr-10 ml-10 mt-2 pb-2 '>
            <div className="nav-logo md:flex hidden items-center justify-center">
                <Link to={'/'} className='nav-logo md:flex hidden items-center justify-center' >
                <img src={logo} alt="Logo" />
                
                </Link>
            </div>
            
            
            <div className="nav-logo md:hidden w-auto sm:flex hidden items-center justify-center">
                <img src={logo} alt="Logo" className='w-10' />
                
            </div>
            <div className='flex gap-5 items-center'>
                
                <p>

                    <button className='border-2 border-orange-500 px-3 py-1  transition ease-in-out   rounded hover:bg-orange-500 hover:text-white' > <Link to={"/logout"} > Logout </Link></button>
                </p>
            </div>

        </div>
    )
}

export default NavBar