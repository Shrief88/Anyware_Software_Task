import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/layout/Layout";

const ProtectedDashboard = RequireAuth(Dashboard);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <ProtectedDashboard />,
      },
    ],
  },
];

export default routes;
