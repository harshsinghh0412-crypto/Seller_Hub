import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/dashboard.css";

import Dashboard from "./pages/Dashboard";
import ProductsPage from "./pages/ProductsPage";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";

import ProtectedLayout from "./layouts/ProtectedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;