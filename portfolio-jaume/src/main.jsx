import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import router from "../lib/routes/router";
import "@/css/index.css";
import "@/css/home.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomCursor />
    <RouterProvider router={router} />
  </StrictMode>,
);
