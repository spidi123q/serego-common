import Grid from "@mui/material/Grid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SimpleButton } from "../simpleButton/SimpleButton";
import { IconNames } from "../simpleIcon/helper";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import "./OperationCompleted.scss";

export interface IOperationCompletedProps {
  title: string;
  subTitle: string;
  caption: string;
  viewButtonLabel: string;
  viewPagePath: string;
  status: IStatus;
}

export const OperationCompleted: React.FunctionComponent<IOperationCompletedProps> =
  (props) => {
    const { title, subTitle, viewPagePath, viewButtonLabel, caption, status } =
      props;
    const navigate = useNavigate();
    const goToHome = () => navigate("/");
    const goToViewPage = () => navigate(viewPagePath);

    return (
      <Grid container justifyContent="flex-end" className="operation-completed">
        <SimpleButton variant="text-dark" onClick={goToHome}>
          Cancel
        </SimpleButton>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <SimpleIcon size="xlg" name={statusIconMap[status]} />
          <SimpleTypography family="medium" variant="h6">
            {title}
          </SimpleTypography>
          <br />
          <SimpleTypography color="colorDark">{subTitle}</SimpleTypography>
          <br />
          <br />
          <br />
          <br />
          <SimpleTypography>{caption}</SimpleTypography>
          <br />
          <SimpleButton onClick={goToViewPage} variant="outlined">
            {viewButtonLabel}
          </SimpleButton>
        </Grid>
      </Grid>
    );
  };

type IStatus = "success";
const statusIconMap: Record<IStatus, IconNames> = {
  success: IconNames["tick-filled"],
};
