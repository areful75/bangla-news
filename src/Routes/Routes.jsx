import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        }
      ]
    },
    {
        path: "/auth",
        element: <h3>auth Layout</h3>
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