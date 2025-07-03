import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import { AuthProvider } from './Context/AuthContext'



let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/signup', element: <Signup /> },
      { path: '/login', element: <Login /> },
    ]
  },
])

export default function App() {

  return (
    <AuthProvider>
      <RouterProvider router={routers} />
    </AuthProvider>
  )
}
