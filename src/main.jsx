import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Staffers from './pages/Staffers.jsx'
import Chat from './pages/Chat.jsx'

const router =  createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/chat",
        element: <Chat />
      },
      {
        path: "/staffers",
        element: <Staffers />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
