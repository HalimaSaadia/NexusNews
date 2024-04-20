import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import GroupIcon from "@mui/icons-material/Group";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import "./dashboardNavbar.css";
import { Typography } from "@mui/material";

export default function DashboardNavbar() {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      
    >
      <List component="nav" aria-label="main mailbox folders">
        <Link style={{textDecoration:"none", color:"white"}} to="/">
          {" "}
          <ListItemButton>
            <ListItemIcon sx={{display:"flex", alignItems:"center", py:1}}>
              <AutoStoriesIcon sx={{color:"white", mr:2, fontSize:38}} />
              <Typography color="white" fontSize={30}>NexusNews</Typography>
            </ListItemIcon>
          </ListItemButton>
        </Link>

        <Divider sx={{borderBottom:"1px solid white"}} />
        <Link style={{textDecoration:"none"}} to="/">
          <ListItemButton
            selected={selectedIndex === -1}
            onClick={(event) => handleListItemClick(event, -1)}
            style={{
              backgroundColor: selectedIndex === -1 ? "#c6ac8f" : "transparent",
              color: selectedIndex === -1 ? "black" : "white",
            }}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: selectedIndex === -1 ? "#5e503f" : "white"}} />
            </ListItemIcon>{" "}
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
        <Link style={{textDecoration:"none"}} to="/dashboard">
          <ListItemButton
            selected={selectedIndex === -2}
            onClick={(event) => handleListItemClick(event, -2)}
            style={{
              backgroundColor: selectedIndex === -2 ? "#c6ac8f" : "transparent",
              color: selectedIndex === -2 ? "black" : "white",
              fontWeight: selectedIndex === -2 ? 800 : "normal"
             
            }}
          >
            <ListItemIcon>
              <DashboardIcon sx={{ backgroundColor: selectedIndex === -2 ? "#c6ac8f" : "transparent",
              color: selectedIndex === -2 ? "#5e503f" : "white",}} />
            </ListItemIcon>{" "}
            <ListItemText  primary="Dashboard" />
          </ListItemButton>
        </Link>

        <Link style={{textDecoration:"none"}} to="/dashboard/allUsers">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            style={{
              backgroundColor: selectedIndex === 0 ? "#c6ac8f" : "transparent",
              color: selectedIndex === 0 ? "black" : "white",
            }}
          >
            <ListItemIcon>
              <GroupIcon sx={{color: selectedIndex === 0 ? "#5e503f" : "white" }} />
            </ListItemIcon>{" "}
            <ListItemText primary="All Users" />
          </ListItemButton>
        </Link>

        <Link style={{textDecoration:"none"}} to="/dashboard/articles">
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            style={{
              backgroundColor: selectedIndex === 1 ? "#c6ac8f" : "transparent",
              color: selectedIndex === 1 ? "black" : "white",
            }}
          >
            <ListItemIcon>
              <DescriptionIcon sx={{color: selectedIndex === 1 ? "#5e503f" : "white",}} />
            </ListItemIcon>

            <ListItemText primary="All Articles" />
          </ListItemButton>
        </Link>

        <Link style={{textDecoration:"none"}} to="/dashboard/add-publisher">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            style={{
              backgroundColor: selectedIndex === 2 ? "#c6ac8f" : "transparent",
              color: selectedIndex === 2 ? "black" : "white",
            }}
          >
            <ListItemIcon>
              <AutoStoriesIcon sx={{color: selectedIndex === 2 ? "#5e503f" : "white",}} />
            </ListItemIcon>
            <ListItemText primary="Add publisher" />
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
}
