import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Route from './application/Route.jsx'
import App from "./App.jsx";
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById("root")).render(
  
    <BrowserRouter> 
      <App />
    
    <StrictMode>
      <Route />
    </StrictMode>
    </BrowserRouter>
)
