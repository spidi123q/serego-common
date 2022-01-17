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
import classNames from "classnames";
import { IPaginateResult } from "../../models/PaginateResult";
import { SimpleTablePagination } from "./SimpleTablePagination";

export interface ISimpleTableProps {
  columns: IColumn[];
  variant?: "outline" | "clear";
  rows?: any[];
  paginateResult?: IPaginateResult<unknown>;
  onPageChange?(page: number): void;
  onRowsPerPageChange?(page: number): void;
}

export const SimpleTable: React.FunctionComponent<ISimpleTableProps> = (
  props
) => {
  const {
    columns,
    rows,
    variant,
    paginateResult,
    onRowsPerPageChange,
    onPageChange,
  } = props;
  return (
    <TableContainer
      className={classNames("simple-table", {
        [`simple-table__variant--${variant}`]: variant,
      })}
    >
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
      {paginateResult && (
        <SimpleTablePagination
          {...paginateResult}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      )}
    </TableContainer>
  );
};

SimpleTable.defaultProps = {
  variant: "outline",
};

export interface IColumn {
  headerName: string;
  field: string;
  align?: "left" | "center" | "right" | "justify" | "inherit";
}
