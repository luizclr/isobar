import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Base from "~/pages/base/base";
import { Login } from "~/pages/login/login.container";
import { PATHS } from "~/routes/paths";
import { PrivateRoute } from "~/routes/private-route";

const Home = lazy(async () => await import("~/pages/home/home"));
const Band = lazy(async () => await import("~/pages/band/band"));

export const router = createBrowserRouter([
  {
    path: PATHS.LOGIN,
    element: <Login />,
    index: true,
  },
  {
    path: PATHS.HOME,
    element: <Base />,
    children: [
      {
        path: PATHS.HOME,
        element: <PrivateRoute outlet={<Home />} />,
      },
      {
        path: PATHS.BAND,
        element: <PrivateRoute outlet={<Band />} />,
      },
    ],
  },
]);
