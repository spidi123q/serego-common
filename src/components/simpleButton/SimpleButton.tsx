import React from "react";
import "./SimpleButton.scss";
import classNames from "classnames";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

export interface ISimpleButtonProps
  extends Omit<LoadingButtonProps, "variant"> {
  marginRight?: boolean;
  marginLeft?: boolean;
  variant?: IType;
  width?: "md";
}

export const SimpleButton: React.FunctionComponent<ISimpleButtonProps> = (
  props
) => {
  const { children, marginRight, marginLeft, variant, width, ...rest } = props;
  return (
    <span
      className={classNames("simple-button", {
        "simple-button__margin--right": marginRight,
        "simple-button__margin--left": marginLeft,
        [`simple-button__variant--${variant}`]: variant,
        [`simple-button__width--${width}`]: width,
      })}
    >
      <LoadingButton variant={typeVariantMap[variant ?? "contained"]} {...rest}>
        {children}
      </LoadingButton>
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
  "text-dark": "text",
};

type IType =
  | "text"
  | "contained"
  | "outlined"
  | "outlined-dark"
  | "text-dark"
  | "contained-light"
  | "contained-dark";
