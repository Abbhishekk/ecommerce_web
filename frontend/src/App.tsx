

import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import Login from './pages/Login'
import Product from './pages/Product'
import {  CartContextProvider } from './context/CartContext'
import Cart from './pages/Cart'
import SignUp from './pages/SignUp'
import { useAuthContext } from './hooks/useAuthContext'


function App() {
  // const [count, setCount] = useState(0)
  const { user } = useAuthContext()
 
  return (
    <>
    <CartContextProvider value="null" >
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/men" element={<Mens/>} />
        <Route path="/women" element={<Womens/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/login" element={(user!=null)?(<Navigate to={"/"}/>):(<Login/>)} />
        <Route path="/signup" element={(user!=null)?(<Navigate to={"/"}/>):(<SignUp/>)} />
        <Route path="/logout" element={<Login />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
      </CartContextProvider>
    </>
  )
}

export default App
