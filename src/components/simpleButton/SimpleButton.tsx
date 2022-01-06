import React from "react";
import "./SimpleButton.scss";
import Ripples from "react-ripples";
import Button, { ButtonProps } from "@mui/material/Button";

export interface ISimpleButtonProps extends ButtonProps {}

export default function SimpleButton({
  children,
  ...rest
}: ISimpleButtonProps) {
  return (
    <span className="simple-button">
      <Button {...rest} variant="contained">
        {children}
      </Button>
    </span>
  );
}
