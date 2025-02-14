import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import Header from "./Header";

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Nav
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        isMobile={isMobile}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#f5f7f9",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header handleDrawerToggle={handleDrawerToggle} isMobile={isMobile} />
        <Box flexGrow={1}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
