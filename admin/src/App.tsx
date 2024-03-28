
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import ProductList from './pages/ProductList'
import AddProduct from './pages/AddProduct'

import Wrapper from './components/Wrapper'
import Layout from './components/Layout'
import Login from './pages/Login'
import { useAuthContext } from './hook/useAuthContext'


function App() {
  const {user} = useAuthContext();

  return (
    <>
      <BrowserRouter>
      <Wrapper>
        
          
        <Routes>
          <Route element={(!user)?(<Navigate to="/login"/>): (<Layout/>)} >
          <Route path="/" element={<ProductList/>} />
          <Route path="/add_product" element={<AddProduct/>} />
          </Route>
          <Route path='/login' element={(user)?(<Navigate to={"/"}/>):(<Login/>)} />
        </Routes>
     
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App
