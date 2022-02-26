import { isNil, isNumber, isString } from "lodash";
import React from "react";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";

export interface ISimpleItemProps {
  label: string;
  emptyText?: string;
}

export const SimpleItem: React.FunctionComponent<ISimpleItemProps> = (
  props
) => {
  const { label, children, emptyText } = props;
  const body = isNil(children) && emptyText ? emptyText : children;
  return (
    <div>
      <div>
        <SimpleTypography color="colorDark" variant="caption">
          {label}
        </SimpleTypography>
      </div>
      <div>
        {isString(body) || isNumber(body) ? (
          <SimpleTypography family="medium" variant="body1">
            {body}
          </SimpleTypography>
        ) : (
          body
        )}
      </div>
    </div>
  );
};
