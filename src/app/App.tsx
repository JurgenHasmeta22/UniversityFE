import * as React from 'react'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useStore } from "~/main/store/zustand/store";
import IUser from "~/main/interfaces/IUser";
import authenticationController from "~/main/controllers/authenticationController";
import PrivateRoutes from "~/main/utils/PrivateRoutes";
import Login from '~/modules/base/pages/login';
import Register from '~/modules/base/pages/register';
const Error404 = React.lazy(() => import("~/modules/base/pages/error"))

function App() {
  const { setUser } = useStore();

  useEffect(() => {
    const validateUser = async () => {
      const response: IUser | undefined = await authenticationController.validateUser();
      if (response) setUser(response);
    }
    validateUser();
  }, []);

  return (
    <Routes>
      <Route index element={<Navigate replace to="/movies" />} />
      <Route path="*" element={<React.Suspense fallback={<>...</>}><Error404 /></React.Suspense>} />
      <Route path="/login" element={<React.Suspense fallback={<>...</>}><Login /></React.Suspense>} />
      <Route path="/register" element={<React.Suspense fallback={<>...</>}><Register /></React.Suspense>} />
    </Routes>
  );
}

export default App;
