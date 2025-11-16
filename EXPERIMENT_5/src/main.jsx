import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App_5B from './App_5B.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App_5B />
  </StrictMode>,
)
