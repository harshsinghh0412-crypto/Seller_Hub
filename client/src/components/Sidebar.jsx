import {
  Dashboard,
  Inventory,
  ShoppingCart,
  BarChart,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    icon: <Dashboard />,
    path: "/dashboard",
  },
  {
    name: "Products",
    icon: <Inventory />,
    path: "/products",
  },
  {
    name: "Orders",
    icon: <ShoppingCart />,
    path: "/orders",
  },
  {
    name: "Analytics",
    icon: <BarChart />,
    path: "/analytics",
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div
      style={{
        width: "240px",
        background: "#1f2937",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Menu</h2>

      <div style={{ marginTop: "30px" }}>
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "14px",
              marginBottom: "10px",
              borderRadius: "10px",
              color: "white",
              textDecoration: "none",
              background:
                location.pathname === item.path
                  ? "#2874F0"
                  : "transparent",
            }}
          >
            {item.icon}

            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;