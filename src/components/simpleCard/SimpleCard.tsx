import Card, { CardProps } from "@mui/material/Card";
import React from "react";

export interface ISimpleCardProps extends CardProps {}

export const SimpleCard: React.FunctionComponent<ISimpleCardProps> = (
  props
) => {
  const { children, ...rest } = props;
  return (
    <Card
      sx={{
        borderRadius: "30px",
        boxShadow: "0px 10px 31px #0000000D",
      }}
      {...rest}
    >
      {children}
    </Card>
  );
};
