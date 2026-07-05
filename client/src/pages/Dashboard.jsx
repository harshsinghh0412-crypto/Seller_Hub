import { useEffect, useState } from "react";
import axios from "axios";

import DashboardCard from "../components/DashboardCard";
import SalesChart from "../components/Charts/SalesChart";

import Inventory2Icon from "@mui/icons-material/Inventory2";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CategoryIcon from "@mui/icons-material/Category";

import { Grid, Typography } from "@mui/material";

function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    inventoryValue: 0,
    lowStock: 0,
    categories: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard/stats")
      .then((res) => setStats(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Typography variant="h4" mb={3}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Products"
            value={stats.totalProducts}
            icon={<Inventory2Icon fontSize="large" />}
            color="#1976d2"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Inventory Value"
            value={`₹${stats.inventoryValue.toLocaleString()}`}
            icon={<CurrencyRupeeIcon fontSize="large" />}
            color="#2e7d32"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Low Stock"
            value={stats.lowStock}
            icon={<WarningAmberIcon fontSize="large" />}
            color="#ed6c02"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Categories"
            value={stats.categories}
            icon={<CategoryIcon fontSize="large" />}
            color="#9c27b0"
          />
        </Grid>
      </Grid>

      <div style={{ marginTop: "40px" }}>
        <SalesChart />
      </div>
    </>
  );
}

export default Dashboard;