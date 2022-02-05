import "./FormSummary.scss";
import React from "react";
import { SimpleItem } from "../simpleItem/SimpleItem";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import classNames from "classnames";

export interface IFormSummaryProps {
  title?: string;
  values: Record<string, any>;
  labelMap: Map<string, string>;
  margin?: boolean;
}

export const FormSummary: React.FunctionComponent<IFormSummaryProps> = (
  props
) => {
  const { values, labelMap, title, margin } = props;

  return (
    <div
      className={classNames("form-summary", {
        ["form-summary--margin"]: margin,
      })}
    >
      {title && (
        <>
          <SimpleTypography family="medium" variant="body1">
            {title}
          </SimpleTypography>
          <br />
        </>
      )}
      {Array.from(labelMap.keys()).map((key: string, index) => (
        <div key={index}>
          <SimpleItem label={labelMap.get(key) ?? ""}>{values[key]}</SimpleItem>
          <br />
        </div>
      ))}
    </div>
  );
};
