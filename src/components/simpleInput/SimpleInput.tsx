import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";
import React from "react";
import "./SimpleInput.scss";

export interface ISimpleInputProps extends OutlinedTextFieldProps {}

export default function SimpleInput(props: ISimpleInputProps) {
  return (
    <span className="simple-input">
      <TextField {...props} variant="outlined" />
    </span>
  );
}
