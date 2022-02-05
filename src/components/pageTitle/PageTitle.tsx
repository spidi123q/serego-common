import Grid from "@mui/material/Grid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SimpleButton } from "../simpleButton/SimpleButton";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import "./PageTitle.scss";

export interface IPageTitleProps {
  title?: string;
  showCancel?: boolean;
}

export const PageTitle: React.FunctionComponent<IPageTitleProps> = (props) => {
  const { title, showCancel } = props;
  console.log("🚀 ~ file: PageTitle.tsx ~ line 15 ~ title", title);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Grid container justifyContent="space-between" className="page-title">
      {title && (
        <SimpleTypography family="bold" variant="h5">
          {title}
        </SimpleTypography>
      )}
      {showCancel && (
        <SimpleButton variant="text-dark" onClick={goBack}>
          Cancel
        </SimpleButton>
      )}
    </Grid>
  );
};
