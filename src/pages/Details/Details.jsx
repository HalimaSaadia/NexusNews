import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from "@mui/material";
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



export default function Details() {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const {
    data: article = {},
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["articleDetails"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/details/${id}`);
      console.log(result.data);
      return result.data;
    },
  });

  useEffect(()=>{
    if(!isPending){
      axiosPublic.patch(`/details/${id}`)
    .then(res => {
      console.log("viewCount",res.data);
    
    })
    }
   
  },[isPending])

  return (
    <Container sx={{ py: 5 }}>
      <Grid container>
        <Grid item md={8}>
          <Box>
            <Card sx={{ p: 2 }}>
              <Box sx={{ position: "relative" }}>
                {article.image ? (
                  <CardMedia
                    component="img"
                    sx={{ objectFit: "fit", height: 384 }}
                    image={article?.image}
                    alt="Paella dish"
                  />
                ) : (
                  <Skeleton variant="rectangular" height={384} width="100%" />
                )}
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    position: "absolute",
                    bottom: 0,
                    bgcolor: "primary.main",
                    right: 0,
                    px: 3,
                    py: 1,
                    color: "white",
                  }}
                >
                  {" "}
                  <RemoveRedEyeIcon color="tertiary" /> {article?.viewCount}{" "}
                  views
                </Typography>
              </Box>
              <CardContent sx={{ p: 0 }}>
                <Typography fontWeight={600} mt={3} variant="h4">
                  {article?.title}
                </Typography>
                <Typography
                  textAlign="justify"
                  color="text.secondary"
                  mt={3}
                  paragraph
                >
                  {article?.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <List sx={{ ml: { md: 2 }, width:"100%" }}>
            <ListItem 
              sx={{ bgcolor: "secondary.main", width:"100%" }}
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ height: 70, width: 70 }}
                  alt="Remy Sharp"
                  src={article?.authorImage}
                />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <Box ml={2} mt={1}>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="h5"
                      color="white"
                    >
                      {article?.author}
                    </Typography>
                    <br />
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      color="tertiary.main"
                    >
                      Author
                    </Typography>
                  </Box>
                }
              />
            </ListItem>

            <ListItem
              alignItems="flex-start"
              sx={{ mt: 5, bgcolor: "secondary.main" }}
            >
              <IconButton>
                <NewspaperIcon
                  color="white"
                  sx={{ color: "white", fontSize: 32, mt: 1 }}
                />
              </IconButton>
              <ListItemText
                secondary={
                  <Box ml={2} mt={1}>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="h5"
                      color="white"
                    >
                      {article?.publisher}
                    </Typography>
                    <br />
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      color="tertiary.main"
                    >
                      Publisher
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            
            <ListItem
              alignItems="flex-start"
              sx={{ mt: 5, bgcolor: "secondary.main" }}
            >
              <IconButton>
                <ScheduleIcon
                  color="white"
                  sx={{ color: "white", fontSize: 32, mt: 1 }}
                />
              </IconButton>
              <ListItemText
                secondary={
                  <Box ml={2} mt={1}>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="h5"
                      color="white"
                    >
                      {article?.postedDate}
                    </Typography>
                    <br />
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      color="tertiary.main"
                    >
                      Date Posted
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
    // <Box sx={{ maxWidth: "md", mx: "auto",my:5 }}>
    //   <Card  sx={{backgroundColor: article?.isPremium ? '#a9927d' :""}}>
    //     <CardHeader
    //     sx={{bgcolor:"#a9927d"}}
    //       avatar={
    //         <Avatar  sx={{ bgcolor: '#c6ac8f' }} aria-label="recipe">
    //           <img  src={article?.authorImage} alt="" />
    //         </Avatar>
    //       }

    //       title={article?.publisher}
    //       subheader={article?.author}
    //     />
    //     <CardMedia
    //       component="img"
    //       height="194"
    //       sx={{ maxHeight: 294,objectFit:"fill", }}
    //       image={article?.image}
    //       alt="Paella dish"

    //     />
    //     <CardContent>
    //       <Typography fontWeight={600} variant="h5">{article?.title}</Typography>
    //     </CardContent>
    //     <CardActions disableSpacing>
    //       <IconButton aria-label="add to favorites">
    //         <RemoveRedEyeIcon color="secondary" />
    //       </IconButton>
    //       <Typography>
    //        {article?.viewCount} views
    //       </Typography>

    //       <ExpandMore
    //         expand={expanded}
    //         onClick={handleExpandClick}
    //         aria-expanded={expanded}
    //         aria-label="show more"

    //       >

    //         <ExpandMoreIcon />
    //       </ExpandMore>

    //     </CardActions>
    //     <Collapse in={expanded} timeout="auto" unmountOnExit>
    //       <CardContent>
    //         <Typography color="text.secondary" paragraph>{article?.description}</Typography>
    //       </CardContent>
    //     </Collapse>
    //   </Card>
    // </Box>
  );
}
