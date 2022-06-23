import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouters } from './router/AppRouters.jsx'
import { BrowserRouter } from 'react-router-dom';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <BrowserRouter>
    <AppRouters />
  </BrowserRouter>
  /* </React.StrictMode> */
)
