import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import router from './routes/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="bottom-center"
      reverseOrder={false}
    />
  </StrictMode>,
)
