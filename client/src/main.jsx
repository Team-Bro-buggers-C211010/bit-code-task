import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import router from './routes/router.jsx';
import { Provider } from 'react-redux'
import { store } from './app/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </Provider>
  </StrictMode>,
)
