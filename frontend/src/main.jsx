
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element: <LogIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path:'home',
    element: <App />
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
