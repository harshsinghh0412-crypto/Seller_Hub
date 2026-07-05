import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        backgroundColor: "#2874F0",
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            flexGrow: 1,
          }}
        >
          SellerHub
        </Typography>

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 2,
          }}
        >
          <Avatar sx={{ bgcolor: "#ff9800" }}>H</Avatar>

          <Typography sx={{ ml: 1 }}>
            Harsh
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;