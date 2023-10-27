

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/login-admin',
    element: <Login />
  },
  {
    path: '/register-admin',
    element: <Register />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
