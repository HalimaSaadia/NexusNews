import { Box, Card, CardContent, CardMedia, Container, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import Marquee from "react-fast-marquee";

const Publisher = () => {
  const axiosPublic = useAxiosPublic();
  const { isPending: allPublisherLoading, data: allPublisher } = useQuery({
    queryKey: ["allPublisher"],
    queryFn: async () => {
      const result = await axiosPublic.get("/publisher");
      return result.data
    },
  });
  return (
   <Box sx={{my:10,p:2}}>
    <SectionHeading title="OUR PUBLISHERS" />
     <Box
      sx={{
        py: 5,
        color: "white",
      }}
    >
      <Box>
        {" "}
        <Box
          sx={{
            display: "flex",
            flexWrap:"wrap",
            justifyContent:"space-around"
  
          }}
        >
          <Marquee>
          {allPublisher?.map((publisher) => (
            <Paper elevation={12} key={publisher?._id} sx={{ py:3, px:5,  width:350, m:2 }}>
              <CardMedia
                sx={{ height: 140,width:140,borderRadius:"50%",border:"10px solid #5E503F",margin:"auto" }}
                image={publisher?.publisherImage}
                title="green iguana"
              />
              <CardContent sx={{bgcolor:'', color:'black'}}>
                <Typography sx={{fontWeight:700,textAlign:"center"}} gutterBottom variant="h5" component="div">
                 {publisher?.publisherName}
                </Typography>
        
              </CardContent>
             
            </Paper>
          ))}
          </Marquee>
        </Box>
      </Box>
    </Box>
   </Box>
  );
};

export default Publisher;
