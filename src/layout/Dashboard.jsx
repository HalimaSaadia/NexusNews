import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../pages/Dashboard/DashboardNavbar/DashboardNavbar";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item md={3}>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: "primary.main",
            position: { md: "fixed" },
            top: 0,
            left: 0,
            width:"25%"
          }}
        >
          <DashboardNavbar />
        </Box>
      </Grid>
      <Grid item md={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
