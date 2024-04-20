import { Box, Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Chart } from "react-google-charts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Loader from "../../../shared/Loader/Loader";

export const options = {
  title: "Publisher States",
  backgroundColor: "#7A6954",
 
};

const PublisherChart = () => {
  const axiosSecure = useAxiosSecure();
  const [option, setOption] = useState([]);
  const { isPending: publisherStatesPending, data: publisherStates } = useQuery(
    {
      queryKey: ["publisherStates"],
      queryFn: async () => {
        const result = await axiosSecure.get("/publisher-states");
        const publishersStates = result.data;
        const newOptions = publishersStates?.map((publisher) => [
          publisher._id,
          publisher?.quantity,
        ]);
        setOption([["Task", "Hours per Day"], ...newOptions]);
        return result.data;
      },
    }
  );

  if (publisherStatesPending) {
    return <Loader />;
  }
  return (
    <Box sx={{ mt: { md: 3 }, mx:{md:2}, border:"3px solid #5e503f" }}>
      <Chart
        chartType="PieChart"
        data={option}
        options={options}
        width={"100%"}
        height={"400px"}
        style={{ backgroundColor: "#5e503f" }}
      />
    </Box>
  );
};

export default PublisherChart;
