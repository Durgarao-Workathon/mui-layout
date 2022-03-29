import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import "material-react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Mode from "./components/darkmode/Mode";
import ToastNotification from "./components/toast/ToastNotification";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";

function App() {
  const value = useSelector((store) => store.mode.mode);
  return (
    <ThemeProvider theme={value ? darkTheme : lightTheme}>
      <CssBaseline />
      <Mode />
      <Container maxWidth="lg">
        <ToastNotification />
        <Login />
      </Container>
    </ThemeProvider>
  );
}

export default App;
