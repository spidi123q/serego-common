import Grid from "@mui/material/Grid";
import React from "react";
import { IconNames, SimpleCard, SimpleIcon, SimpleTypography } from "../..";
import "./SummaryCard.scss";

export interface ISummaryCardProps {
  iconName: IconNames;
  title: string;
  subTitle: string;
}

export const SummaryCard: React.FunctionComponent<ISummaryCardProps> = (
  props
) => {
  const { iconName, title, subTitle } = props;
  return (
    <SimpleCard className="summary-card" variant="plain-sharp" fullWidth>
      <div className="summary-card__icon-container">
        <SimpleIcon name={iconName} size="regular" color="primaryColor" />
      </div>
      <div className="summary-card__content">
        <Grid container justifyContent="flex-start" flexDirection="column">
          <SimpleTypography family="medium" variant="h5">
            {title}
          </SimpleTypography>
          <SimpleTypography color="colorDark2" variant="caption">
            {subTitle}
          </SimpleTypography>
        </Grid>
      </div>
    </SimpleCard>
  );
};
