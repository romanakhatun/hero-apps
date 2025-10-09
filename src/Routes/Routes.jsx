import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";
import AllApps from "../pages/AllApps/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        path: "/",
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        Component: AllApps,
      },
      {
        path: "apps/:id",
        loader: () => fetch("/appsData.json"),
        Component: AppDetails,
      },
      {
        path: "/installation",
        loader: () => fetch("/appsData.json"),
        Component: Installation,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
