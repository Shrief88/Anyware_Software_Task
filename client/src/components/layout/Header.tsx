import {
  Avatar,
  Badge,
  Box,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  Email as EmailIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { SearchBar, StyledInputBase } from "./styles";

type Props = {
  handleDrawerToggle: () => void;
  isMobile: boolean;
};

const Header = ({ handleDrawerToggle, isMobile }: Props) => {
  return (
    <Grid2 container sx={{ bgcolor: "white", mb: 2, px: 3, py: 2 }} spacing={1}>
      <Grid2
        size={{ xs: 12, md: 2, lg: 2 }}
        order={{ md: 2, lg: 3 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", md: "center", lg: "center" },
        }}
      >
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <Badge badgeContent={3} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ mx: 1 }}>
            <Badge badgeContent={5} color="primary">
              <EmailIcon />
            </Badge>
          </IconButton>
          <Avatar sx={{ width: 34, height: 34, ml: 1 }} />
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 10, lg: 6 }} order={{ md: 1, lg: 1 }}>
        <Typography variant="h5" fontWeight={700}>
          Welcome back Talia
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 12, lg: 4 }} order={{ md: 2, lg: 2 }}>
        <SearchBar>
          <IconButton sx={{ position: "absolute", p: 1 }}>
            <SearchIcon />
          </IconButton>
          <StyledInputBase placeholder="Search…" />
        </SearchBar>
      </Grid2>
    </Grid2>
  );
};

export default Header;
