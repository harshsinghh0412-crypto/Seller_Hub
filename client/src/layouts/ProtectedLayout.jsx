import { Navigate, Outlet } from "react-router-dom";

import MainLayout from "./MainLayout";

function ProtectedLayout() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default ProtectedLayout;