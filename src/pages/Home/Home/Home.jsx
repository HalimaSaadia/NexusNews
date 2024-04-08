import { Box } from "@mui/material";
import Plans from "../Plans/Plans";
import HomePageStatistic from "../HomePageStatistic/HomePageStatistic";
import Publisher from "../Publisher/Publisher";
import SubscriptionModal from "../SubscriptionModal/SubscriptionModal";
import Media from "../MediaSection/Media";
import TodaysPick from "../TodaysPick/TodaysPick";
import Banner from "../Banner/Banner";
import TopReads from "../TopReads/TopReads";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAllArticles from "../../../Hooks/useAllArticles";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const allCategoriesArticles = useAllArticles()

  console.log(allCategoriesArticles);
  const { isPending: trendLoading, data: articles } = useQuery({
    queryKey: ["trendingArticle"],
    queryFn: async () => {
      const result = await axiosPublic.get("/trendingArticle");
      return result.data;
    },
  });

  const { isPending: localUpdateLoading, data:localUpdates } = useQuery({
    queryKey: ["localUpdates"],
    queryFn: async () => {
      const result = await axiosPublic.get("/local-update");
      return result.data;
    },
  });

  return (
    <Box>
      <Box maxWidth={1200} mx="auto">
        <Banner />
        <TopReads articles={articles} title="Top Reads" />
        <TopReads articles={localUpdates} title="Local Updates" />
        <Plans />
        <TodaysPick />   
        <Media />
        <HomePageStatistic />
        <Publisher />
        <SubscriptionModal />
      </Box>
    </Box>
  );
};

export default Home;
