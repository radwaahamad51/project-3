import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes.jsx'
import AuthProvoder from './provider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvoder>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvoder>
    
  </StrictMode>,
)
