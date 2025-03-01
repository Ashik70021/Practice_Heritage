import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LandingBaner from "../components/Banner/LandingBaner";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <LandingBaner></LandingBaner>,
        },
      ]
    },
  ]);