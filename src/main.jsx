import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes//App.jsx'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Root from './routes/Root.jsx'
import { AuthProvider } from './context.jsx'
import Profile from './routes/Profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '',
        element: <App />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <Profile/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
    <div className='bg-white py-4'>
      
      <RouterProvider router={router}/>

    </div>

    </AuthProvider>


  </React.StrictMode>,
)
