import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SideBar from './SideBar'

const Layout: React.FC = () => {
  return (
   <>
   <Navbar />
   <SideBar>

    <Outlet/>
   </SideBar>
   </>
  )
}

export default Layout