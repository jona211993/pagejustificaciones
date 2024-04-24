import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lista from './pages/lista.jsx'
import { BrowserRouter,Routes,Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routes>
        <Route path="/formulario" element={<App />}/> 
        <Route path="/lista" element={<Lista />} /> 
      </Routes>
    
  </BrowserRouter>,
)
