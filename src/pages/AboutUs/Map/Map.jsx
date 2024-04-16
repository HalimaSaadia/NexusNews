import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, ListItemButton, Typography } from "@mui/material";

const Map = () => {
    const position = [51.505, -0.09];
  return (
    <Box sx={{ position: "relative", borderTop: "3px solid #c6ac8f" }}>
      <MapContainer
        style={{ height: "100vh", zIndex: -20 }}
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
      <Box
        sx={{
          position: "absolute",
          bgcolor: "secondary.main",
          bottom: 0,
        }}
      >
        <ListItemButton
          sx={{
            borderTop: "2px solid #c6ac8f",
            borderRight: "2px solid #c6ac8f",
            width: 300,
          }}
          component="ul"
          href="#simple-list"
        >
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
      </Box>
    </Box>
  );
};

export default Map;
