import { Box, Grid, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllArticleCard from "./AllArticleCard";
import { useState } from "react";

const Categories = ({ category }) => {
  const [searchedValue, setSearchedValue] = useState("");
  const { data: categoryArticles } = useQuery({
    queryKey: ["categoriesArticles", category, searchedValue],
    queryFn: async () => {
      const result = await axios.post(
        "http://localhost:5000/approved-articles",
        { category, searchedValue }
      );
      return result.data;
    },
  });
  return (
    <>
    <Box sx={{display:"flex", justifyContent:{sm:"end"}, mt:{sm:-9}}}>
    <TextField
        name="searchValue"
        placeholder="Search"
        variant="outlined"
        sx={{backgroundColor:"white"}}
        onChange={(e) => setSearchedValue(e.target.value)}
      />
    </Box>
      <Grid
      container
       spacing={5}
       sx={{my:3}}
      >
        {categoryArticles?.map((article) => (
          <AllArticleCard key={article?._id} article={article} />
        ))}
      </Grid>
    </>
  );
};

export default Categories;