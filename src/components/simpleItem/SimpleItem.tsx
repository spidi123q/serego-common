import { isString } from "lodash";
import React from "react";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";

export interface ISimpleItemProps {
  label: string;
}

export const SimpleItem: React.FunctionComponent<ISimpleItemProps> = (
  props
) => {
  const { label, children } = props;
  return (
    <div>
      <div>
        <SimpleTypography color="colorDark" variant="caption">
          {label}
        </SimpleTypography>
      </div>
      <div>
        {isString(children) ? (
          <SimpleTypography family="medium" variant="body1">
            {children}
          </SimpleTypography>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
