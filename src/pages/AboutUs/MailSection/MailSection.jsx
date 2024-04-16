import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import mail from "../../../assets/lottie/mail.json";
import Lottie from "react-lottie";
import "./mail.css";
import { Email } from "@mui/icons-material";

const options = {
  loop: true,
  autoplay: true,
  animationData: mail,
  height: 500,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const MailSection = () => {
  return (
    <Box my={10} sx={{ display: { sm: "flex", justifyContent: "center" } }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Lottie options={options} />
      </Box>
      <Box p={2} >
       <Typography  variant="h4" fontWeight={600} lineHeight={1.5}>
          Have a Question or Inquiry ? <br /> Contact Us Now !
        </Typography>
        <Typography mb={4} mt={2}  variant="h6" color="secondary" fontWeight={600}>
        We welcome your thoughts and suggestions to <br /> enhance  our coverage and serve you better!
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={3}
          type="text"
          sx={{ border: "2px solid black", borderRadius: 2 }}
        />
        <br />
        <Button variant="contained" fullWidth sx={{ mt: 3, py: 2 }}>
          {" "}
          <Email sx={{ mr: 1 }} /> SEND
        </Button>
      </Box>
    </Box>
  );
};

export default MailSection;
