import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Landing from "../components/Pages/Landing";
import PropertyDetails from "../components/Pages/PropertyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Landing></Landing>,
      },
      {
        path: "/propertydetails/:id",
        element: <PropertyDetails></PropertyDetails>,
      },
    ]
  },
]);