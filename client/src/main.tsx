import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import routes from "./routes";

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "hsl(25 5.3% 44.7%)",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={createBrowserRouter(routes)} />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
