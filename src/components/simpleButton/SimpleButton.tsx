import React from "react";
import "./SimpleButton.scss";
import Button, { ButtonProps } from "@mui/material/Button";
import classNames from "classnames";

export interface ISimpleButtonProps extends ButtonProps {
  marginRight?: boolean;
  marginLeft?: boolean;
}

export default function SimpleButton({
  children,
  marginRight,
  marginLeft,
  ...rest
}: ISimpleButtonProps) {
  return (
    <span
      className={classNames("simple-button", {
        "simple-button__margin--right": marginRight,
        "simple-button__margin--left": marginLeft,
      })}
    >
      <Button variant="contained" {...rest}>
        {children}
      </Button>
    </span>
  );
}
