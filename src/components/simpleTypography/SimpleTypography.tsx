import "./SimpleTypography.scss";
import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";
import { AppFonts, Colors, IFontFamily } from "../../config/themeConfig";
import classNames from "classnames";

export interface ISimpleTypographyProps extends TypographyProps {
  color?: IColor;
  family?: IFontFamily;
  fontWeight?: number;
  whiteSpace?: "pre" | "nowrap";
}

export const SimpleTypography: React.FunctionComponent<ISimpleTypographyProps> =
  (props) => {
    const { children, color, family, fontWeight, whiteSpace, ...rest } = props;
    const typographyClasses = classNames("simple-typography", {
      "simple-typography__link": props.onClick,
    });
    return (
      <Typography
        className={typographyClasses}
        sx={{
          color: color && Colors[color],
          fontFamily: family && AppFonts[family],
          fontWeight,
          whiteSpace,
        }}
        {...rest}
      >
        {children}
      </Typography>
    );
  };

SimpleTypography.defaultProps = {
  family: "regular",
  color: "colorBlack",
};

export type IColor =
  | "primaryColor"
  | "secondaryColor"
  | "primaryColorLight"
  | "colorDark"
  | "colorDark2"
  | "colorDarkLight"
  | "colorDarkLight2"
  | "colorDarkLight3"
  | "colorDisabled"
  | "colorBlack"
  | "colorWhite"
  | "colorDanger";
