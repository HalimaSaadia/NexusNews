import { Box } from "@mui/material";
import HomePageBanner from "../TopReads/TopReads";
import Plans from "../Plans/Plans";
import HomePageStatistic from "../HomePageStatistic/HomePageStatistic";
import Publisher from "../Publisher/Publisher";
import SubscriptionModal from "../SubscriptionModal/SubscriptionModal";
import WeatherWidget from "../WeatherWidget/WeatherWidget";
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
      {/* <HomePageBanner /> */}
      
      <Box maxWidth={1200} mx="auto">
      <Banner />
        <TopReads articles={articles}/>
        <TodaysPick />
        <Plans />
        <Media />
        <HomePageStatistic />
        <Publisher />
        <SubscriptionModal />
        {/* <WeatherWidget /> */}
      </Box>
    </Box>
  );
};

export default Home;
