
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserAuthContextProvider } from './context/UserAuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
     <BrowserRouter>
     <UserAuthContextProvider>
    <App />
    </UserAuthContextProvider>
    </BrowserRouter>

)
