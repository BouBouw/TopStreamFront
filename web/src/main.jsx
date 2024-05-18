import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import { Welcome } from './pages/Welcome.jsx';
import { Login } from './pages/Auth/Login.jsx';
import { Register } from './pages/Auth/Register.jsx';
import { ResetPassword } from './pages/Auth/ResetPassword.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: "/auth/login",
    element: <Login/>
  },
  {
    path: "/auth/register",
    element: <Register/>
  },
  {
    path: "/auth/reset-password",
    element: <ResetPassword/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
