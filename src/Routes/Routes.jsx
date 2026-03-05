import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
        },
        {
            path: "/category/:id",
            element:<CategoryNews></CategoryNews>,
            loader:()=>fetch('/news.json').then(res=>res.json())
        }
      ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[

         { path: "/auth/login",
          element:<Login></Login>},

          {path: "/auth/register",
          element:<Register></Register>}


        ]
      },
      {
        path: "/news",
        element: <h3>news layout Layout</h3>
      },
      {
        path: "/*",
        element: <h3>Error 404</h3>
      },
  ]);

  export default router;