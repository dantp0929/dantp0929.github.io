import "./Common/styles/index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";

const theme = createTheme({
  palette: {
    secondary: {
      light: "#b1b1b1",
      main: "#9e9e9e",
      dark: "#6e6e6e",
      contrastText: "#ffffff",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
