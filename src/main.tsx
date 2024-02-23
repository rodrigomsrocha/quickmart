import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import { App } from './App.tsx'
import './index.css'
import { Account } from './routes/account'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
  },
  {
    path: '/account',
    element: <Account />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
