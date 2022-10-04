import { createTheme } from "@mui/material/styles";
import { theme } from ".";

export const themeUi = createTheme({
  palette: {
    primary: {
      main: theme.primaryColor,
    },
    secondary: {
      main: theme.secundaryColor
    },
    action: { active: theme.primaryColor },
  },
});
