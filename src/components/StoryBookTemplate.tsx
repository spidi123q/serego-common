import React from "react";
import { SimpleThemeProvider } from "./SimpleThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(() => {});

export const StoryBookTemplate: React.FunctionComponent = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3} preventDuplicate>
          <SimpleThemeProvider>{children}</SimpleThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
  );
};
