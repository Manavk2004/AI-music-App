import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/homepage.css'
import App from './pages/homePage/homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
