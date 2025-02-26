import React from "react";
import { Typography, CssBaseline, AppBar, Toolbar, Box, Button } from "@mui/material";
import Dropdown from "./dropdown";

export default function top() {
  return (
    <>
    <CssBaseline/>
    <AppBar position="relative" sx={{ boxShadow:"none", height: {md:35, xs: 45}, display: "flex", justifyContent: "center", backgroundColor: "rgba(26, 115, 232, 0.11)", alignItems:"center"}}>
      <Toolbar sx={{ width: "100%", display: "flex", justifyContent: "center", color:"rgba(38,38,38,1)", gap: 2}}>
          <Typography sx={{fontSize: { xs: "10px", md: "12px" }, fontWeight:"300"}} >Navigate your ideal career path with tailored expert advice</Typography> 
          <Typography sx={{fontSize: { xs: "10px", md: "12px" }, fontWeight:"300", color:"blue"}} >Contact Expert</Typography>
      </Toolbar>
    </AppBar>
    <br />
    
    </>
  );
}

