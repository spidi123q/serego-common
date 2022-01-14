import React from "react";
import { SimpleThemeProvider } from "./SimpleThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const StoryBookTemplate: React.FunctionComponent = ({ children }) => {
  return (
    <BrowserRouter>
      <SimpleThemeProvider>{children}</SimpleThemeProvider>;
    </BrowserRouter>
  );
};
