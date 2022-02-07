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
import { SkeletonPlaceholder } from "../skeletonPlaceholder/SkeletonPlaceholder";

export interface ISimpleTableProps {
  columns: IColumn[];
  variant?: "outline" | "clear";
  rows?: any[];
  paginateResult?: IPaginateResult<unknown>;
  loading?: boolean;
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
    loading,
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
            {columns.map((column, index) => (
              <TableCell key={index} align={column.align}>
                <SimpleTypography family="medium">
                  {column.headerName}
                </SimpleTypography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, index) => (
            <TableRow
              className={classNames({
                ["simple-table__row--hidden"]: loading,
              })}
              key={index}
            >
              {columns.map((column, index) => (
                <TableCell key={index} align={column.align}>
                  {column.cellRenderer ? (
                    <column.cellRenderer value={row[column.field]} data={row} />
                  ) : (
                    row[column.field]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {(loading || isEmpty(rows)) && (
            <TableRow>
              <TableCell colSpan={columns.length}>
                {loading && <SkeletonPlaceholder />}
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
              </TableCell>
            </TableRow>
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

export interface IColumn<T = any> {
  headerName: string;
  field: string;
  align?: "left" | "center" | "right" | "justify" | "inherit";
  cellRenderer?: (props: IColumnCellRenderProps<T>) => JSX.Element;
}

export interface IColumnCellRenderProps<T> {
  value: any;
  data: T;
}
