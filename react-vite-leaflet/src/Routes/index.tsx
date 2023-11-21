import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout><App /></MainLayout> ,
      errorElement: <ErrorPage />,
    },
    {
        path: "/test",
        element: <MainLayout><h1>This is a test page</h1></MainLayout>,
      },
  ]);