import Slider from "react-slick";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import { Divider, List, ListItemText } from "@mui/material";

const PackageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box sx={{ width: 300}}>
      <Slider {...settings}>
        <Box sx={{ mt: 7 }}>
          <Card
            sx={{
              border: "2px solid #c6ac8f",
              maxWidth: 300,
            }}
          >
            <Box
              height={70}
              sx={{
                bgcolor: "tertiary.main",
                display: "flex",
                alignItems: "center",
                px: 2,
              }}
            >
              <Typography gutterBottom variant="h6" component="div">
                Premium Individual
              </Typography>
            </Box>
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <List>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircleIcon sx={{ fontSize: "small", mr: 1 }} />
                    <ListItemText secondary="One Premium account" />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircleIcon sx={{ fontSize: "small", mr: 1 }} />
                    <ListItemText secondary="Cancel Anytime" />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircleIcon sx={{ fontSize: "small", mr: 1, mt: -2.5 }} />
                    <ListItemText secondary="15 hours/month of listening time from our audio books" />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ListItemText secondary="&nbsp;" />
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                  >
                    <ListItemText secondary="&nbsp;" />
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                  >
                    <ListItemText secondary="&nbsp;" />
                  </Box>
                </List>
              </Typography>
              <Button
                variant="contained"
                sx={{ borderRadius: 2 }}
                color="tertiary"
                fullWidth
                size="small"
              >
                Try Free For 1 Month
              </Button>
            </CardContent>
            <Divider />
            <CardActions>
              <Typography variant="body2">
                Offer only Available If have not tried premium before
                <br />
              </Typography>
            </CardActions>
          </Card>
        </Box>
        <Box sx={{ mt: 7 }}>
          <Card
            sx={{
              border: "2px solid #5e503f",
              maxWidth: 300,
            }}
          >
            <Box
              height={70}
              sx={{
                bgcolor: "secondary.main",
                display: "flex",
                alignItems: "center",
                px: 2,
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                color="white"
                component="div"
              >
                Premium Duo
              </Typography>
            </Box>
            <CardContent>
              <Typography
                sx={{ mb: 1.5, display: "flex", flexDirection: "column" }}
                color="text.secondary"
              >
                <List sx={{ flexGrow: "1" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircleIcon sx={{ fontSize: "small", mr: 1 }} />
                    <ListItemText secondary="Two Premium account" />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircleIcon sx={{ fontSize: "small", mr: 1 }} />
                    <ListItemText secondary="Cancel Anytime" />
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                  >
                    <CircleIcon sx={{ fontSize: "small", mr: 1, mt: -4.5 }} />
                    <ListItemText secondary="15 hours/month of listening time from our audio books(plan manager only)" />
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                  >
                    <ListItemText secondary="&nbsp;" />
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                  >
                    <ListItemText secondary="&nbsp;" />
                  </Box>
                </List>
              </Typography>
              <Button
                variant="contained"
                sx={{ borderRadius: 2 }}
                color="secondary"
                fullWidth
                size="small"
              >
                Get Premium Duo
              </Button>
            </CardContent>
            <Divider />
            <CardActions>
              <Typography variant="body2">
                For couples who resides at the same address. Terms apply.
                <br />
              </Typography>
            </CardActions>
          </Card>
        </Box>
        <Box sx={{ mt: 7 }}>
          <Card sx={{ border: "2px solid #0a0908", maxWidth: 300 }}>
            <Box
              height={70}
              sx={{
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                px: 2,
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                color="white"
                component="div"
              >
                Premium Family
              </Typography>
            </Box>
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <List>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircleIcon sx={{ fontSize: "small", mr: 1 }} />
                    <ListItemText secondary="Upto 6 Premium account" />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircleIcon sx={{ fontSize: "small", mr: 1 }} />
                    <ListItemText secondary="Block Explicit music" />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircleIcon sx={{ fontSize: "small", mr: 1 }} />
                    <ListItemText secondary="Access to spotify kids" />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircleIcon sx={{ fontSize: "small", mr: 1 }} />
                    <ListItemText secondary="Cancel Anytime" />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircleIcon sx={{ fontSize: "small", mr: 1, mt: -4.5 }} />
                    <ListItemText secondary="15 hours/month of listening time from our audio books(plan manager only)" />
                  </Box>
                </List>
              </Typography>
              <Button
                variant="contained"
                sx={{ borderRadius: 2 }}
                color="primary"
                fullWidth
                size="small"
              >
                Get Premium Duo
              </Button>
            </CardContent>

            <Divider />
            <CardActions>
              <Typography variant="body2">
                For 6 Family member who resides at the same address
                <br />
              </Typography>
            </CardActions>
          </Card>
        </Box>
      </Slider>
    </Box>
  );
};

export default PackageSlider;
