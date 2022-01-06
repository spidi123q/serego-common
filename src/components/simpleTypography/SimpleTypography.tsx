import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";
import { AppFonts, Colors, IFontFamily } from "../../config/themeConfig";

export interface ISimpleTypographyProps extends TypographyProps {
  color?: string;
  family?: IFontFamily;
  fontWeight?: number;
}

export const SimpleTypography: React.FunctionComponent<
  ISimpleTypographyProps
> = (props) => {
  const { children, color, family, fontWeight, ...rest } = props;
  return (
    <Typography
      style={{
        color: color && Colors[color],
        fontFamily: family && AppFonts[family],
        fontWeight,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

SimpleTypography.defaultProps = {
  family: "regular",
};
