import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import "leaflet/dist/leaflet.css";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const KeyPersonels = () => {
  return (
   <>
   <Typography mt={5} textAlign="center" variant="h4" fontWeight={600} >Key Personals</Typography>
    <Box sx={{ display: "flex", justifyContent: "center", px: 5 }}>
      <Grid
        container
        sx={{ py: 15, maxWidth: 1000 }}
        rowGap={5}
        columnSpacing={5}
      >
        <Grid sm={6} lg={4}>
          <Paper
            justifySelf="center"
            sx={{ width: 300, height: 400, border:"1px solid #c6ac8f" }}
            elevation={3}
            
          >
            <Box sx={{ height: 180, position: "relative" }}>
              <Box sx={{ height: 120, bgcolor: "tertiary.main" }}></Box>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/7103081/pexels-photo-7103081.jpeg?auto=compress&cs=tinysrgb&w=600"
                sx={{
                  width: 110,
                  height: 110,
                  position: "abosolute",
                  bottom: 60,
                  left: "30%",
                  border:"3px solid #5e503f"
                }}
              />
            </Box>
            <Box sx={{ display: "grid", justifyContent: "center", px: 2 }}>
              <Typography variant="h5" fontWeight={600} justifySelf="center">
              Sarah L.
              </Typography>
              <Typography fontWeight={600} justifySelf="center">
              Chief Reporter
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, textAlign: "justify", my: 1 }}
              >
               Sarah L. is a dedicated professional excelling in marketing strategies and community engagement initiatives.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Typography
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifySelf: "center",
                  }}
                  color="tertiary.main"
                >
                  <FacebookTwoToneIcon fontSize="large" />{" "}
                  <LinkedInIcon fontSize="large" />
                  <EmailIcon fontSize="large" />
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid sm={6} lg={4}>
          <Paper
            sx={{ width: 300, height: 400, border:"1px solid #5e503f", mt: { lg: -10 } }}
            elevation={3}
          >
            <Box sx={{ height: 180, position: "relative" }}>
              <Box sx={{ height: 120, bgcolor: "secondary.main" }}></Box>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/9835442/pexels-photo-9835442.jpeg?auto=compress&cs=tinysrgb&w=600"
                sx={{
                  width: 110,
                  height: 110,
                  position: "abosolute",
                  bottom: 60,
                  left: "30%",
                  border:"3px solid #c6ac8f"
                }}
              />
            </Box>
            <Box sx={{ display: "grid", justifyContent: "center", px: 2 }}>
              <Typography variant="h5" fontWeight={600} justifySelf="center">
                Julia Ramirez
              </Typography>
              <Typography fontWeight={600} justifySelf="center">
                CEO
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, textAlign: "justify", my: 1 }}
              >
                Julia Ramirez is a dynamic and visionary CEO known for her
                strategic leadership and innovation in the technology sector.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Typography
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifySelf: "center",
                  }}
                  color="secondary.main"
                >
                  <FacebookTwoToneIcon fontSize="large" />{" "}
                  <LinkedInIcon fontSize="large" />
                  <EmailIcon fontSize="large" />
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid sm={6} lg={4}>
          <Paper sx={{ width: 300, height: 400, border:"1px solid #c6ac8f" }} elevation={3} >
            <Box sx={{ height: 180, position: "relative" }}>
              <Box sx={{ height: 120, bgcolor: "tertiary.main" }}></Box>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=600"
                sx={{
                  width: 110,
                  height: 110,
                  position: "abosolute",
                  bottom: 60,
                  left: "30%",
                  border:"3px solid #5e503f"
                }}
              />
            </Box>
            <Box sx={{ display: "grid", justifyContent: "center", px: 2 }}>
              <Typography variant="h5" fontWeight={600} justifySelf="center">
              Tailor B.
              </Typography>
              <Typography fontWeight={600} justifySelf="center">
                Chief Editor
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, textAlign: "justify", my: 1 }}
              >
              Tailor B. is a visionary Chief Editor, shaping compelling narratives and setting editorial standards with precision.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Typography
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifySelf: "center",
                  }}
                  color="tertiary.main"
                >
                  <FacebookTwoToneIcon fontSize="large" />{" "}
                  <LinkedInIcon fontSize="large" />
                  <EmailIcon fontSize="large" />
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
   </>
  );
};

export default KeyPersonels;
