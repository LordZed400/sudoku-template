import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import LandingPage from "./views/Landing/LandingPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default routes;
