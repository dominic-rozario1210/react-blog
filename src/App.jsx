import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/Template'
import All from './components/All'
import Fullstack from './components/Fullstack'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import Error from './components/Error'
import Ai from './components/Ai'
import "./App.css"
import Blog from './components/Blog'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
          path: "/",
          element: <All />
        },
        {
          path: "/fullstack",
          element: <Fullstack />
        },
        {
          path: "/datascience",
          element: <DataScience />
        },
        {
          path: "/cybersecurity",
          element: <CyberSecurity />
        },
        {
          path: "/ai",
          element: <Ai />
        },
        {
          path: "/*",
          element: <Error />
        }
      ]
    },
    {
      path:"/blog/:id",
      element:<Blog/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
