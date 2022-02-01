import "./SimpleCard.scss";
import React from "react";
import classNames from "classnames";

export interface ISimpleCardProps {
  variant?: "shadow" | "plain" | "plain-sharp" | "dark-gradient";
  className?: string;
}

export const SimpleCard: React.FunctionComponent<ISimpleCardProps> = (
  props
) => {
  const { children, variant, className, ...rest } = props;
  const simpleCardClasses = classNames("simple-card", {
    [`${className}`]: className,
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
