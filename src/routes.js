import { createBrowserRouter } from "react-router-dom";
import Layout from './components/layout.js';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

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
  {
    path: "/detail/:id",
    element: <>
      <Layout>
        <Detail/>
      </Layout>
    </>,
  },
]);

export default router;