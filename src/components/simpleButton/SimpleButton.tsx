import React from "react";
import "./SimpleButton.scss";
import Ripples from "react-ripples";

export interface ISimpleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function SimpleButton(props: ISimpleButtonProps) {
  const { label, ...rest } = props;
  return (
    <Ripples>
      <button type="button" {...rest} className="SimpleButton">
        {label}
      </button>
    </Ripples>
  );
}
