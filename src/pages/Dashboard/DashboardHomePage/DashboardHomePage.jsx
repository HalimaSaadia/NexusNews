import { Box, Grid } from "@mui/material";
import PublisherChart from "./PublisherChart";
import UsersChart from "./UsersChart";
import ArticlesChart from "./ArticlesChart";

const DashboardHomePage = () => {
  return (
    <Box>
      <PublisherChart />
      <Grid container>
        <Grid item md={7}>
          <UsersChart />
        </Grid>
        <Grid item md={5}>
          <ArticlesChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHomePage;
