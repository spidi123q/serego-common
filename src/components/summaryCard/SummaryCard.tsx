import Grid from "@mui/material/Grid";
import React from "react";
import { SimpleCard } from "../simpleCard/SimpleCard";
import { IconNames } from "../simpleIcon/helper";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import { SkeletonPlaceholder } from "../skeletonPlaceholder/SkeletonPlaceholder";
import "./SummaryCard.scss";

export interface ISummaryCardProps {
  iconName: IconNames;
  title: string | number;
  subTitle: string;
  loading?: boolean;
}

export const SummaryCard: React.FunctionComponent<ISummaryCardProps> = (
  props
) => {
  const { iconName, title, subTitle, loading } = props;
  return (
    <SimpleCard className="summary-card" variant="plain-sharp" fullWidth>
      <div className="summary-card__icon-container">
        <SimpleIcon name={iconName} size="regular" color="primaryColor" />
      </div>
      <div className="summary-card__content">
        {loading ? (
          <SkeletonPlaceholder width={100} count={1} />
        ) : (
          <Grid container justifyContent="flex-start" flexDirection="column">
            <SimpleTypography family="medium" variant="h5">
              {title}
            </SimpleTypography>
            <SimpleTypography color="colorDark2" variant="caption">
              {subTitle}
            </SimpleTypography>
          </Grid>
        )}
      </div>
    </SimpleCard>
  );
};
