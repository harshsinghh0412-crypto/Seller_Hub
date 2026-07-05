import { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function SalesChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/analytics/category")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 15,
        boxShadow: "0 5px 20px rgba(0,0,0,.08)",
        marginTop: 30,
      }}
    >
      <h2>Products by Category</h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="_id" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="total"
            fill="#2874F0"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;