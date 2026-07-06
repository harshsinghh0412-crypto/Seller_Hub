import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );

      alert("Account created successfully!");

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Signup Failed");
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: "100%",
            p: 3,
            borderRadius: 3,
            boxShadow: 5,
          }}
        >
          <CardContent>

            <Typography
              variant="h4"
              align="center"
              fontWeight="bold"
              gutterBottom
            >
              SellerHub
            </Typography>

            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              mb={3}
            >
              Create Account
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSignup}>

              <TextField
                fullWidth
                label="Name"
                name="name"
                margin="normal"
                value={formData.name}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                margin="normal"
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                margin="normal"
                value={formData.password}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3, py: 1.5 }}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Sign Up"
                )}
              </Button>

            </form>

            <Typography
              align="center"
              sx={{ mt: 3 }}
            >
              Already have an account?{" "}
              <Link to="/">
                Login
              </Link>
            </Typography>

          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Signup;