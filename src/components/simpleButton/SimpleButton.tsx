import React from "react";
import "./SimpleButton.scss";
import Ripples from "react-ripples";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function SimpleButton(props: IProps) {
  const { label, ...rest } = props;
  return (
    <Ripples>
      <button type="button" {...rest} className="SimpleButton">
        {label}
      </button>
    </Ripples>
  );
}
