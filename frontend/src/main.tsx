
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserAuthContextProvider } from './context/UserAuthContext.tsx'
import { ProductListContextProvider } from './context/ProductList.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
     <BrowserRouter>
        <UserAuthContextProvider>
         <ProductListContextProvider>
            <App />
         </ProductListContextProvider>
        </UserAuthContextProvider>
    </BrowserRouter>

)
