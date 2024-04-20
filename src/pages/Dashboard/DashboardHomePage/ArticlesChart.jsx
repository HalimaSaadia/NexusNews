import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Chart } from "react-google-charts";
import { Box, Container } from "@mui/material";
import Loader from "../../../shared/Loader/Loader";

const ArticlesChart = () => {
  const axiosSecure = useAxiosSecure();
  const { isPending: articlesStatesLoading, data: articlesStates } = useQuery({
    queryKey: ["articlesState"],
    queryFn: async () => {
      const result = await axiosSecure.get("/articlesCount");
      return result.data;
    },
  });

  if (articlesStatesLoading) {
    return <Loader />;
  }
  const data = [
    [
      {
        v: "Mikes",
        f: 'Mikes<div style="color:red; font-style:italic">President</div>',
      },
      "",
      "The President",
    ],
    [
      {
        v: "Jim",
        f: `${articlesStates?.approvedArticles}<div style="color:black; padding:5px">Approved Articles</div>`,
      },
      "Articles Status",
      "VP",
    ],
    [
      `${articlesStates?.allArticles} <div>All Articles</div>`,
      "Articles Status",
      "",
    ],
    [
      `${articlesStates?.pendingArticles}<div>Pending Articles</div>`,
      "Jim",
      "Bob Sponge",
    ],
    [
      `${articlesStates?.declinedArticles}<p>Declined Articles</p>`,
      `${articlesStates?.pendingArticles}<div>Pending Articles</div>`,
      "",
    ],
  ];

  const options = {
    allowHtml: true,
    backgroundColor: "#7A6954",
  };
  return (
    <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", height:405, backgroundColor:"#7A6954", mt:2, mx:2, width:"92%", border:"3px solid #5e503f"}}>
      <Chart
        chartType="OrgChart"
        data={data}
        options={options}
        width="min-content"
        

        style={{backgroundColor: "#7A6954"}}
      />
    </Container>
  );
};

export default ArticlesChart;
