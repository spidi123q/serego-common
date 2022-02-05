import Grid from "@mui/material/Grid";
import classNames from "classnames";
import React from "react";
import { SimpleItem } from "../simpleItem/SimpleItem";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import "./ListBox.scss";

export interface IListBoxProps {
  items: IListBoxItem[];
  margin?: boolean;
}

export const ListBox: React.FunctionComponent<IListBoxProps> = (props) => {
  const { items, margin } = props;
  return (
    <Grid
      container
      justifyContent="space-between"
      className={classNames("list-box", {
        ["list-box--margin"]: margin,
      })}
    >
      {items.map((item) => (
        <SimpleItem key={item.label} label={item.label}>
          <SimpleTypography variant="body1">{item.value}</SimpleTypography>
        </SimpleItem>
      ))}
    </Grid>
  );
};

export interface IListBoxItem {
  label: string;
  value: string;
}
