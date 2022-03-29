import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#22292F",
    },
    color: "#FFFFFF",
    primary: {
      main: "#512da8",
      light: "#8559da",
      dark: "#140078",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffa000",
      light: "#ffd149",
      dark: "#c67100",
      contrastText: "#000000",
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export let lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F1F5F8",
    },
    color: "#151515",
    primary: {
      main: "#512da8",
      light: "#8559da",
      dark: "#140078",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#ffa000",
      light: "#ffd149",
      dark: "#c67100",
      contrastText: "#000000",
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

// eslint-disable-next-line import/no-anonymous-default-export
export default { darkTheme: darkTheme, lightTheme: lightTheme };
