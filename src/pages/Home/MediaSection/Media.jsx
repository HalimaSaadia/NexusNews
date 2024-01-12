import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import video from "../../../assets/media.mp4"
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

export default function MediaControlCard() {


  return (
    <Box sx={{px:2, my:10}}>
      <SectionHeading title="Writing Essentials" />
      <Box sx={{ display:{lg:"flex"}, mt:5}}>
      <Box sx={{ flexDirection: "column", width:{lg: "60%"} }}>
        <CardContent sx={{ flex: "1 0 auto" , px:0}}>
          <Typography component="div" variant="h6" letterSpacing={1} fontWeight={400} >
          Crafting Effective Article Writing
          </Typography>
         
          <Typography
            sx={{ mr: {md:5}, textAlign: "justify",mt:2 }}
            variant="subtitle1"
            color="text.secondary"
            component="div"
            fontWeight={200}
          >
            Unlock the secrets to captivating your readers with our comprehensive guide on effective article writing. Whether you're a seasoned writer looking to enhance your skills or a beginner eager to dive into the world of content creation, employing persuasive language, and engaging your audience from start to finish. Our guide is packed with practical advice and real-world examples to help you communicate your ideas effectively and leave a lasting impact. Elevate your writing to new heights and establish yourself as a Your journey to becoming an influential and effective writer begins here
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="video"
        sx={{ width:{lg:"40%" }}}
        src={video}
        title="Live from space album cover"
        controls
        autoPlay
        muted
      />
    </Box>
    </Box>
  );
}
