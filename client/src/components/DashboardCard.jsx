import { Card, CardContent, Typography, Box } from "@mui/material";

function DashboardCard({ title, value, icon, color }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 4,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="subtitle1"
              color="text.secondary"
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ mt: 1 }}
            >
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;