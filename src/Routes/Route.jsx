import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import React from "react";

const Main = React.lazy(()=>import("../Layout/Main"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path:"/",
            element:<Home/>
        }
    ],
  },
]);


export default router