import classNames from "classnames";
import React from "react";
import { IColor } from "../simpleTypography/SimpleTypography";
import { getIcon, IconNames } from "./helper";
import "./SimpleIcon.scss";

export interface ISimpleIconProps {
  name: IconNames;
  size?: "regular" | "lg" | "sm";
  color?: IColor;
}

export const SimpleIcon: React.FunctionComponent<ISimpleIconProps> = (
  props
) => {
  const { name, size, color } = props;
  const iconClassNames = classNames("simple-icon", {
    [`simple-icon__size--${size}`]: size,
    [`simple-icon__color--${color}`]: color,
  });

  return <span className={iconClassNames}>{getIcon(name)}</span>;
};

SimpleIcon.defaultProps = {
  size: "regular",
};
