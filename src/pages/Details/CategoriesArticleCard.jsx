import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdWorkspacePremium } from "react-icons/md";
import { Box, Button, Grid } from "@mui/material";

const CategoriesArticleCard = ({ article, id }) => {
    const { author, authorImage, description, image, publisher, title, _id } =
    article;
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: loggedInUser } = useQuery({
    queryKey: ["loggedInUser"],
    enabled: !loading,
    queryFn: async () => {
      const result = await axiosSecure.get(`/user/${user?.email}`);
      return result.data;
    },
  });
  return (
    <Grid item sm={6} md={12} mt={3} sx={{ display: id === _id && "none"  }}>
      <Box sx={{ position: "relative", pl: { md: 2 } }}>
        <CardMedia
          component="img"
         
          image={image}
          sx={{ height: 164 }}
          alt="Paella dish"
        />
        {!loggedInUser?.isPremiumTaken && article?.isPremium && (
          <Box sx={{ position: "absolute", top: 5, left: {xs:5, md:20} }}>
            <MdWorkspacePremium style={{ fontSize: 32 }} />
          </Box>
        )}
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          ml: { md: 2 },
          backgroundColor: `${
            article?.isPremium ? "secondary.main" : "tertiary.main"
          }`,
        }}
      >
        <Typography
          gutterBottom
          sx={{ wordBreak: "break-all" }}
          variant="h6"
          fontWeight={700}
          component="div"
          color={article?.isPremium && "#f5f5f5"}
        >
          {title.slice(0, 50)}...
        </Typography>
        <Typography
          sx={{ flexGrow: 1, textAlign: "justify" }}
          variant="body2"
          color={article?.isPremium && "#f5f5f5"}
        >
          {description?.slice(0, 40)}...{" "}
          {
            <Link
              style={{
                color: article?.isPremium ? "white" : "black",
                display:
                  !loggedInUser?.isPremiumTaken && article?.isPremium && "none",
              }}
              to={`/details/${_id}`}
            >
              Details
            </Link>
          }
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CategoriesArticleCard;
