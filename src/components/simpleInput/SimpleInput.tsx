import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";
import React from "react";
import "./SimpleInput.scss";

export interface ISimpleInputProps
  extends Omit<OutlinedTextFieldProps, "variant"> {}

export const SimpleInput: React.FunctionComponent<ISimpleInputProps> = (
  props
) => {
  return (
    <span className="simple-input">
      <TextField {...props} variant="outlined" />
    </span>
  );
};
