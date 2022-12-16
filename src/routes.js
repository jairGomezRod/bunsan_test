import { createBrowserRouter } from "react-router-dom";
import Layout from './components/layout.js';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/dashboard",
    element: <>
      <Layout>
        <Dashboard/>
      </Layout>
    </>,
  },
]);

export default router;