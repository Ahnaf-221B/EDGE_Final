import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Sidebar from './Component/Sidebar/Sidebar.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element : <Sidebar></Sidebar>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
