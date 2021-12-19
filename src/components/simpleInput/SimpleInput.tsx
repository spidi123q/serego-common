import React from "react";
import "./SimpleInput.scss";

export interface ISimpleInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function SimpleInput(props: ISimpleInputProps) {
  return <input className="SimpleInput" {...props} />;
}
