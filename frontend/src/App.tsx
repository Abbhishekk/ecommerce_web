

import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import Login from './pages/Login'
import Product from './pages/Product'
import {  CartContextProvider } from './context/CartContext'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <CartContextProvider value="null" >
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/men" element={<Mens/>} />
        <Route path="/women" element={<Womens/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<Product
        />} />
      </Routes>
      <Footer/>
      </CartContextProvider>
    </>
  )
}

export default App
