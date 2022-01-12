import React from "react";
import { SimpleThemeProvider } from "./SimpleThemeProvider";

export const StoryBookTemplate: React.FunctionComponent = ({ children }) => {
  return <SimpleThemeProvider>{children}</SimpleThemeProvider>;
};
