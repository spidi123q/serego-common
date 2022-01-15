import React from "react";
import { SimpleThemeProvider } from "./SimpleThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

export const StoryBookTemplate: React.FunctionComponent = ({ children }) => {
  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={3} preventDuplicate>
        <SimpleThemeProvider>{children}</SimpleThemeProvider>;
      </SnackbarProvider>
    </BrowserRouter>
  );
};
