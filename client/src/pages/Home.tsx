import { useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      <Container maxWidth="sm">
        <Card
          elevation={6}
          sx={{
            borderRadius: 6,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <CardContent sx={{ textAlign: "center", py: 6, px: 4 }}>
            <Typography
              variant="h3"
              gutterBottom
              fontWeight={700}
              color="primary.main"
            >
              Welcome to Coligo
            </Typography>
            <Typography
              variant="h6"
              color="secondary.main"
              fontWeight={300}
              mb={4}
            >
              Your gateway to seamless software solutions
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleClick}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Login to Dashboard
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Home;
