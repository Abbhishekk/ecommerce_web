
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import AddProduct from './pages/AddProduct'
import SideBar from './components/SideBar'
import Wrapper from './components/Wrapper'


function App() {


  return (
    <>
      <BrowserRouter>
      <Wrapper>
          <Navbar />
          <SideBar>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/add_product" element={<AddProduct/>} />
        </Routes>
        </SideBar>
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App
