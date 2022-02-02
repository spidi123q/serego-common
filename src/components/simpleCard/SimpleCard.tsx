import "./SimpleCard.scss";
import React from "react";
import classNames from "classnames";

export interface ISimpleCardProps {
  variant?: "shadow" | "plain" | "plain-sharp" | "dark-gradient";
  className?: string;
  fullWidth?: boolean;
}

export const SimpleCard: React.FunctionComponent<ISimpleCardProps> = (
  props
) => {
  const { children, variant, className, fullWidth, ...rest } = props;
  const simpleCardClasses = classNames("simple-card", {
    [`${className}`]: className,
    [`simple-card__variant--${variant}`]: variant,
    [`simple-card--full-width`]: fullWidth,
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
