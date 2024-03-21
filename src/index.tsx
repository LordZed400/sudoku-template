import * as React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.scss";
import routes from "~routes";

createRoot(document.getElementById('root')!)
.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
