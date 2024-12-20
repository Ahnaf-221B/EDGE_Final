import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Sidebar from './Component/Sidebar/Sidebar.jsx'
import Search from './Component/Search/search.jsx'
import Home from './Component/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element : <Sidebar></Sidebar>,
  
  children: [
    {
      path: "/home",
      element : <Home></Home>
    },
    {
      path: "/search",
      element : <Search></Search>
    }
  ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
