import {
  Avatar,
  Box,
  Divider,
  Grid,
  ListItemButton,
  Paper,
  Typography,
} from "@mui/material";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyPersonels from "./KeyPersonels/KeyPersonels";

const AboutUs = () => {
  const position = [51.505, -0.09];
  return (
    <Box>
      <KeyPersonels />
      <Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            overflow: scroll,
            flexDirection: "column",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <ListItemButton component="ul" href="#simple-list">
              <Box>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Office Hours
                </Typography>
                <Typography sx={{ color: "tertiary.main" }}>
                  Monday-Friday
                  <br />
                  9:00AM to 5:00PM
                  <br />
                  Lunch Break 12:00AM - 1:00 PM
                  <br />
                  Closed on weekends and public holidays
                </Typography>
              </Box>
            </ListItemButton>
            <Divider sx={{ borderColor: "tertiary.main" }} />
            <ListItemButton component="ul" href="#simple-list">
              <Box>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Address
                </Typography>
                <Typography sx={{ color: "tertiary.main" }}>
                  123 Main Street
                  <br />
                  Cityville state
                  <br />
                  Zip Code:64458
                  <br />
                  Bangladesh
                </Typography>
              </Box>
            </ListItemButton>
            <Divider sx={{ borderColor: "tertiary.main" }} />
            <ListItemButton component="ul" href="#simple-list">
              <Box>
             

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}
                >
                
                </Box>
           
              </Box>
            </ListItemButton>
          </Box>
          <Box>
            <Divider sx={{ borderColor: "tertiary.main" }} />
         
          </Box>
        </Box>
      </Box>
      <Grid item md={9} >
        <MapContainer
          style={{ height: "90vh", zIndex: -50 }}
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Grid>
    </Box>
  );
};

export default AboutUs;
