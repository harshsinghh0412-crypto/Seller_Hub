import { useState, useEffect } from "react";
import axios from "axios";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";

function AddProduct({
  open,
  onClose,
  onProductAdded,
  editingProduct,
  onUpdateComplete,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setStock(editingProduct.stock);
      setCategory(editingProduct.category);
    } else {
      setName("");
      setPrice("");
      setStock("");
      setCategory("");
    }
  }, [editingProduct, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price: Number(price),
      stock: Number(stock),
      category,
    };

    try {
      if (editingProduct) {
        await axios.put(
          `http://localhost:5000/api/products/${editingProduct._id}`,
          product
        );

        onUpdateComplete();
      } else {
        await axios.post(
          "http://localhost:5000/api/products",
          product
        );

        onProductAdded();
      }

      setName("");
      setPrice("");
      setStock("");
      setCategory("");

      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="md"
    fullWidth
    PaperProps={{
      sx: {
        borderRadius: 3,
        p: 2,
        boxShadow: "0px 15px 40px rgba(0,0,0,0.25)",
      },
    }}
  >
    <DialogTitle
      sx={{
        fontSize: "30px",
        fontWeight: 700,
        color: "#1e293b",
        pb: 1,
      }}
    >
      {editingProduct ? "Edit Product" : "Add New Product"}
    </DialogTitle>

    <DialogContent>
      <Stack spacing={3} mt={1}>
        <TextField
          label="Product Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#475569",
              fontWeight: 500,
            },
          }}
        />

        <TextField
          label="Price"
          type="number"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#475569",
              fontWeight: 500,
            },
          }}
        />

        <TextField
          label="Stock"
          type="number"
          fullWidth
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#475569",
              fontWeight: 500,
            },
          }}
        />

        <TextField
          label="Category"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#475569",
              fontWeight: 500,
            },
          }}
        />
      </Stack>
    </DialogContent>

    <DialogActions sx={{ p: 3 }}>
      <Button
        onClick={onClose}
        color="inherit"
        sx={{
          px: 3,
          fontWeight: 600,
          textTransform: "none",
        }}
      >
        Cancel
      </Button>

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          px: 4,
          py: 1.2,
          borderRadius: 2,
          fontWeight: 600,
          textTransform: "none",
          boxShadow: 3,
        }}
      >
        {editingProduct ? "Update Product" : "Save Product"}
      </Button>
    </DialogActions>
  </Dialog>
);
}

export default AddProduct;