import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

// App pages
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Comic from './pages/Comic'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'
import Error from './pages/Error.jsx'

// React router 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, //TODO: replace with a cute image for pete's sake
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/comic/:comicID',
        element: <Comic />
      }, {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
