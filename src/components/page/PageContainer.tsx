import Grid from "@mui/material/Grid";
import React from "react";
import "./PageContainer.scss";

export const PageContainer: React.FunctionComponent = ({ children }) => {
  return (
    <Grid container className="page-container">
      {children}
    </Grid>
  );
};
