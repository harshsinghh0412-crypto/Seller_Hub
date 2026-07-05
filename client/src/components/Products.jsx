import { useEffect, useState } from "react";
import axios from "axios";

import {
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { DataGrid } from "@mui/x-data-grid";

import AddProduct from "./AddProduct";

function Products() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    setOpenDialog(true);
  };

  const handleUpdateComplete = () => {
    setEditingProduct(null);
    fetchProducts();
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 120,
      renderCell: (params) => params.value.slice(-6),
    },
    {
      field: "name",
      headerName: "Product",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      renderCell: (params) => `₹${params.value}`,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 120,
    },
    {
      field: "category",
      headerName: "Category",
      width: 180,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 220,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button
            size="small"
            variant="contained"
            startIcon={<EditIcon />}
            sx={{ mr: 1 }}
            onClick={() => editProduct(params.row)}
          >
            Edit
          </Button>

          <Button
            size="small"
            color="error"
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => deleteProduct(params.row._id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        mt: 4,
        bgcolor: "white",
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4">
          Products
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setEditingProduct(null);
            setOpenDialog(true);
          }}
        >
          New Product
        </Button>
      </Box>

      <TextField
        fullWidth
        label="Search Products"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />

      <div style={{ width: "100%" }}>
        <DataGrid
          rows={filteredProducts}
          columns={columns}
          getRowId={(row) => row._id}
          autoHeight
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          disableRowSelectionOnClick
        />
      </div>

      <AddProduct
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
          setEditingProduct(null);
        }}
        onProductAdded={() => {
          fetchProducts();
          setOpenDialog(false);
        }}
        editingProduct={editingProduct}
        onUpdateComplete={() => {
          handleUpdateComplete();
          setOpenDialog(false);
        }}
      />
    </Box>
  );
}

export default Products;