import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import './index.css'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'
import Home from './pages/Home.jsx'
import Staffers from './pages/Staffers.jsx'
import Chat from './pages/Chat.jsx'

const router =  createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/staffers",
        element: <Staffers />
      },
      {
        path: "/chat",
        element: <Chat />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
