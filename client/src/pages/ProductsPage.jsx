import { Typography, Box } from "@mui/material";
import Products from "../components/Products";

function ProductsPage() {
  return (
    <Box
      sx={{
        px: 3,
        py: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#1e293b",
          mb: 3,
        }}
      >
        Products
      </Typography>

      <Products />
    </Box>
  );
}

export default ProductsPage;