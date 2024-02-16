

import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Shop from './pages/Shop'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/men" element={<div>Men</div>} />
        <Route path="/women" element={<div>Women</div>} />
        <Route path="/kids" element={<div>Kids</div>} />
      </Routes>
      <Footer/>
    
    </>
  )
}

export default App
