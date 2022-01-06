import { ThemeOptions } from "@mui/material";
import { DefaultFont } from "./themeConfig";
import colors from "../styles/config.module.scss";

export const CustomThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: colors.secondaryColor,
    },
  },
  typography: {
    h1: {
      fontFamily: DefaultFont,
    },
    h2: {
      fontFamily: DefaultFont,
    },
    h3: {
      fontFamily: DefaultFont,
    },
    h4: {
      fontFamily: DefaultFont,
    },
    h5: {
      fontFamily: DefaultFont,
    },
    h6: {
      fontFamily: DefaultFont,
    },
    body1: {
      fontFamily: DefaultFont,
    },
  },
};
