import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div class="flex justify-center mx-auto py-[22px] px-[6px] max-w-[1873px]">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
