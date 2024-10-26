
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";
import AllBlogs from "./AllBlogs.jsx";
import BlogDetails from "./BlogDetails.jsx";

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
    path:'/home',
    element: <App />
  },
  {
    path:'/home/all-blogs',
    element: <AllBlogs />
  },
  {
    path:'home/all-blogs/details',
    element: <BlogDetails />
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
