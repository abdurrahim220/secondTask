import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import React from "react";
import ProductView from "../pages/ProudctViewHome/ProductView";

const Main = React.lazy(()=>import("../Layout/Main"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/productView",
          element:<ProductView/>
        }
    ],
  },
]);


export default router