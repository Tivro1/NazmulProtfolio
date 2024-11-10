import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Skills from './Component/Skills'


const route = createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>,
      children:[
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/skills',
          element:<Skills></Skills>
        }
      ]
    }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
