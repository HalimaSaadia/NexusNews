import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import Categories from "./Categories";

const AllArticles = () => {
  const axiosPublic = useAxiosPublic();
  // const [categories, setCategories] = useState([])

  const { data: categories, isPending: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const categories = await axiosPublic.get("/categories");
      return categories.data;
    },
  });


  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box>
        {categories?.map((category) => (
          <Box key={category} sx={{ position: "relative" }}>
            <Box sx={{ mt: 10, mb: 3, display: { sm: "flex" }, gap: 2 }}>
              <SectionHeading title={category} />
            </Box>
            <Box>
              <Categories category={category} />
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default AllArticles;
