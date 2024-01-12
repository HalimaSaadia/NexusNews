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

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const { isPending: trendLoading, data: articles } = useQuery({
    queryKey: ["trendingArticle"],
    queryFn: async () => {
      const result = await axiosPublic.get("/trendingArticle");
      return result.data;
    },
  });
  return (
    <Box>
      <Box maxWidth={1200} mx="auto">
        <Banner />
        <TopReads articles={articles} title="Top Reads" />
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
