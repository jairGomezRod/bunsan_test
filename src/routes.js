import { createBrowserRouter } from "react-router-dom";
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <h1>Test home</h1>,
  },
]);

export default router;