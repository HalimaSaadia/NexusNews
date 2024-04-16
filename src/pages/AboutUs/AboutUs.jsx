
import "leaflet/dist/leaflet.css";

import KeyPersonels from "./KeyPersonels/KeyPersonels";
import MailSection from "./MailSection/MailSection";
import Map from "./Map/Map";
import { Box } from "@mui/material";

const AboutUs = () => {
 
  return (
    <Box>
      <KeyPersonels />
      <MailSection />
      <Map />
    </Box>
  );
};

export default AboutUs;
