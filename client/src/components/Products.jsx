import { useEffect, useState } from "react";
import axios from "axios";

import {
  Button,
  TextField,
  Box,
  Typography,
  InputAdornment,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

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

  const filteredProducts = products.filter(
    (product) =>
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
      width: 130,
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
            sx={{
              mr: 1,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
            onClick={() => editProduct(params.row)}
          >
            Edit
          </Button>

          <Button
            size="small"
            color="error"
            variant="contained"
            startIcon={<DeleteIcon />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
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
        mt: 2,
        bgcolor: "#ffffff",
        p: 4,
        borderRadius: 3,
        boxShadow: "0px 8px 30px rgba(0,0,0,0.12)",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        mb={3}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setEditingProduct(null);
            setOpenDialog(true);
          }}
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: 2,
            fontWeight: 600,
            textTransform: "none",
            boxShadow: 3,
          }}
        >
          New Product
        </Button>
      </Box>

      <TextField
        fullWidth
        placeholder="Search by product name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
        }}
      />

      {filteredProducts.length === 0 ? (
        <Typography
          align="center"
          sx={{
            py: 8,
            color: "#64748b",
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          No products found.
        </Typography>
      ) : (
        <Box sx={{ width: "100%" }}>
          <DataGrid
            rows={filteredProducts}
            columns={columns}
            getRowId={(row) => row._id}
            autoHeight
            rowHeight={60}
            headerHeight={60}
            pageSizeOptions={[5, 10, 20]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            disableRowSelectionOnClick
            sx={{
              border: "none",
              borderRadius: 2,

              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f8fafc",
                fontWeight: 700,
                fontSize: "15px",
              },

              "& .MuiDataGrid-cell": {
                borderBottom: "1px solid #f1f5f9",
              },

              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#f8fafc",
              },
            }}
          />
        </Box>
      )}

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