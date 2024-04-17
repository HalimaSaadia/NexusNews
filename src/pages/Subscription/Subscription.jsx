import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link } from "react-router-dom";
import PackageSlider from "./PackageSlider/PackageSlider";



const Subscription = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
 
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(to right, rgba(1,1,1,1), rgba(0, 0, 0, 0)), url('https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=900') center/cover no-repeat",
          minHeight: "100vh",
          py: 5,
          
        }}
      >
        <Grid container>
          <Grid item md={6} sx={{pl:{xs:2, md:5}}}>
          <Typography sx={{mt:{md:4}}} fontSize={48} color="white" mb={3}>
            Your Window to World Subscribe for unmatched perspective
          </Typography>

          <Box>
            <ButtonGroup
              variant="contained"
              ref={anchorRef}
            sx={{position:"static"}}
            >
              <Button color="secondary">{`Select Your Pack `}</Button>
              <Button
                size="small"
                onClick={handleToggle}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
              }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        sx={{ width: 220, mt: 1, backgroundColor: "#5e503f" }}
                        autoFocusItem
                      >
                        <MenuItem>
                          <Link
                            style={{
                              color: "white",
                              textDecoration: "none",
                              fontSize: 15,
                              letterSpacing: 1.5,
                            }}
                            to={`/payment/${1}`}
                          >
                            {" "}
                            $2 For 1 Minute
                          </Link>{" "}
                        </MenuItem>
                        <Divider sx={{ border: "1px solid #c6ac8f" }} />
                        <MenuItem>
                          <Link
                            style={{
                              color: "white",
                              textDecoration: "none",
                              fontSize: 15,
                              letterSpacing: 1.5,
                            }}
                            to={`/payment/${2}`}
                          >
                            {" "}
                            $14.99 for 5 Days
                          </Link>
                        </MenuItem>
                        <Divider sx={{ border: "1px solid #c6ac8f" }} />{" "}
                        <MenuItem>
                          <Link
                            style={{
                              color: "white",
                              textDecoration: "none",
                              fontSize: 15,
                              letterSpacing: 1.5,
                            }}
                            to={`/payment/${3}`}
                          >
                            {" "}
                            $16.99 for 10 Days
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:"center", mt:{xs:10, md:0}}}>
              <PackageSlider />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Subscription;
