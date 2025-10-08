import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import AppDetails from "../pages/AppDetails/AppDetails";
import Apps from "../pages/Apps/Apps";
import AppError from "../pages/AppError/AppError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        Component: Apps,
      },
      {
        path: "apps/:id",
        loader: () => fetch("/appsData.json").then((res) => res.json()),
        Component: AppDetails,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
