import React from "react";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";

export interface ISimpleItemProps {
  label: string;
  value: string;
}

export const SimpleItem: React.FunctionComponent<ISimpleItemProps> = (
  props
) => {
  const { label, value } = props;
  return (
    <>
      <div>
        <SimpleTypography color="colorDark" variant="caption">
          {label}
        </SimpleTypography>
      </div>
      <div>
        <SimpleTypography family="medium" variant="body1">
          {value}
        </SimpleTypography>
      </div>
    </>
  );
};
