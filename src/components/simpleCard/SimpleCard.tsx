import "./SimpleCard.scss";
import Card, { CardProps } from "@mui/material/Card";
import React from "react";
import classNames from "classnames";

export interface ISimpleCardProps extends Omit<CardProps, "variant"> {
  variant?: "shadow" | "plain" | "plain-sharp" | "dark-gradient";
}

export const SimpleCard: React.FunctionComponent<ISimpleCardProps> = (
  props
) => {
  const { children, variant, ...rest } = props;
  const simpleCardClasses = classNames("simple-card", {
    [`simple-card__variant--${variant}`]: variant,
  });
  return (
    <div className={simpleCardClasses} {...rest}>
      {children}
    </div>
  );
};

SimpleCard.defaultProps = {
  variant: "shadow",
};
