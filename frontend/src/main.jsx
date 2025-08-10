import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)
