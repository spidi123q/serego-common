import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CustomThemeOptions } from "../config/palette";

export const SimpleThemeProvider: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const theme = createTheme(CustomThemeOptions);
