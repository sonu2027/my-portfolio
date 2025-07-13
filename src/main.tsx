import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routing />
       <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  </StrictMode>,
)
