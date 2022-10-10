import { createTheme } from "@mui/material/styles";
import { theme } from ".";

export const themeUi = createTheme({
  palette: {
    primary: {
      main: theme.primaryColor
    },
    secondary: {
      main: theme.secundaryColor,
    },
    action: { active: theme.primaryColor },
    background: {default: "#ff1", paper: "#FF2"},
    info: {main: "#ff2"},
    mode: "light",
    divider: '#000',
    
  }
});
