import { Chart } from "react-google-charts";
import useUsersCount from "../../../Hooks/useUsersCount";
import Loader from "../../../shared/Loader/Loader";
import { Box, Container } from "@mui/material";



const UsersChart = () => {
    const options ={
        backgroundColor: "#7A6954",
    }
    const {usersCountLoading,usersCount} = useUsersCount()
    if(usersCountLoading){
        return <Loader />
    }
 
   const data = [
        ["Element", "Users", { role: "style" }],
        ["All Users",usersCount?.allUsers,  "#b87333"], 
        ["Normal User",usersCount?.normalUsers,  "silver"], 
        ["Premium User",usersCount?.premiumUsers, "gold"], 
      ];
      
    return (
        <Box sx={{mt:2, ml:2, border:"3px solid #5e503f"}}>
            <Chart  options={options} chartType="ColumnChart" width="100%" height="400px" data={data} />
        </Box>
    );
};

export default UsersChart;