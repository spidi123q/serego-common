import Grid from "@mui/material/Grid";
import React from "react";
import { SimpleItem } from "../simpleItem/SimpleItem";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import "./ListBox.scss";

export interface IListBoxProps {
  items: IListBoxItems[];
}

export const ListBox: React.FunctionComponent<IListBoxProps> = (props) => {
  const { items } = props;
  return (
    <Grid container justifyContent="space-between" className="list-box">
      {items.map((item) => (
        <SimpleItem key={item.label} label={item.label}>
          <SimpleTypography variant="body1">{item.value}</SimpleTypography>
        </SimpleItem>
      ))}
    </Grid>
  );
};

export interface IListBoxItems {
  label: string;
  value: string;
}
