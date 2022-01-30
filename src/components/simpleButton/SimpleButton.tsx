import React from "react";
import "./SimpleButton.scss";
import Button, { ButtonProps } from "@mui/material/Button";
import classNames from "classnames";

export interface ISimpleButtonProps extends Omit<ButtonProps, "variant"> {
  marginRight?: boolean;
  marginLeft?: boolean;
  variant?: IType;
}

export const SimpleButton: React.FunctionComponent<ISimpleButtonProps> = (
  props
) => {
  const { children, marginRight, marginLeft, variant, ...rest } = props;
  return (
    <span
      className={classNames("simple-button", {
        "simple-button__margin--right": marginRight,
        "simple-button__margin--left": marginLeft,
        [`simple-button__variant--${variant}`]: variant,
      })}
    >
      <Button variant={typeVariantMap[variant ?? "contained"]} {...rest}>
        {children}
      </Button>
    </span>
  );
};

SimpleButton.defaultProps = {
  variant: "contained",
};

const typeVariantMap: Record<IType, "text" | "outlined" | "contained"> = {
  text: "text",
  outlined: "outlined",
  contained: "contained",
  "contained-light": "text",
  "contained-dark": "contained",
  "outlined-dark": "outlined",
};

type IType =
  | "text"
  | "contained"
  | "outlined"
  | "outlined-dark"
  | "contained-light"
  | "contained-dark";
