import "./SimpleTable.scss";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import Grid from "@mui/material/Grid";
import { isEmpty } from "lodash";

export interface ISimpleTableProps {
  columns: IColumn[];
  rows?: any[];
}

export default function SimpleTable(props: ISimpleTableProps) {
  const { columns, rows } = props;
  return (
    <TableContainer className="simple-table">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.headerName} align={column.align}>
                {column.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column, index) => (
                <TableCell key={index} align={column.align}>
                  {row[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {isEmpty(rows) && (
            <Grid
              container
              xs={12}
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <br />
              <SimpleTypography>No records</SimpleTypography>
              <br />
            </Grid>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

interface IColumn {
  headerName: string;
  field: string;
  align?: "left" | "center" | "right" | "justify" | "inherit";
}
