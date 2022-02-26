import Grid from "@mui/material/Grid";
import classNames from "classnames";
import React from "react";
import "./PageContainer.scss";

interface IPageContainerProps {
  noPaddingTop?: boolean;
}

export const PageContainer: React.FunctionComponent<IPageContainerProps> = ({
  children,
  noPaddingTop,
}) => {
  const classes = classNames("page-container", {
    [`page-container--no-padding-top`]: noPaddingTop,
  });
  return (
    <Grid container className={classes}>
      {children}
    </Grid>
  );
};
