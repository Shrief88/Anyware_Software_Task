import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import RequireAuth from './components/RequireAuth';

const ProtectedDashboard = RequireAuth(Dashboard);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <ProtectedDashboard />,
  },
];

export default routes;
