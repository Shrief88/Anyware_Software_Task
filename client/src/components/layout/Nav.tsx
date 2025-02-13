import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Home as HomeIcon,
  Event as EventIcon,
  School as SchoolIcon,
  MenuBook as MenuBookIcon,
  Assessment as AssessmentIcon,
  Announcement as AnnouncementIcon,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";

import { useAuth } from "../../context/AuthContext";
import { StyledDrawer } from "./styles";

type Props = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  isMobile: boolean;
};

const menuItems = [
  { text: "Dashboard", icon: <HomeIcon />, active: true },
  { text: "Schedule", icon: <EventIcon /> },
  { text: "Courses", icon: <MenuBookIcon /> },
  { text: "Gradebook", icon: <SchoolIcon /> },
  { text: "Performance", icon: <AssessmentIcon /> },
  { text: "Announcement", icon: <AnnouncementIcon /> },
];

const Nav = ({ mobileOpen, handleDrawerToggle, isMobile }: Props) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const drawer = (
    <>
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h5" color="white" fontWeight={"700"}>
          Coligo
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            component="div"
            key={item.text}
            sx={{
              backgroundColor: item.active
                ? "rgba(255, 255, 255, 0.1)"
                : "transparent",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
              },
            }}
            onClick={() => isMobile && handleDrawerToggle()}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem
          component="div"
          key="Logout"
          sx={{
            mt: 2,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" onClick={handleLogout} />
        </ListItem>
      </List>
    </>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <StyledDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {drawer}
      </StyledDrawer>

      {/* Desktop Drawer */}
      <StyledDrawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        {drawer}
      </StyledDrawer>
    </>
  );
};

export default Nav;
