import TablePagination from "@mui/material/TablePagination";
import { first } from "lodash";
import React from "react";
import { DefaultRowsPerPage, StartPage } from "../../config/constants";
import { IPaginateResult } from "../../models/PaginateResult";

export interface ISimpleSimpleTablePaginationProps
  extends IPaginateResult<unknown> {
  onPageChange?(page: number): void;
  onRowsPerPageChange?(count: number): void;
}

export const SimpleTablePagination: React.FunctionComponent<ISimpleSimpleTablePaginationProps> =
  (props) => {
    const { totalDocs, onPageChange, onRowsPerPageChange } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(
      first(RowsPerPageOptions) as number
    );

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
      // API pagination start with 1 but component start with 0
      onPageChange && onPageChange(newPage + 1);
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value: number = +event.target.value;
      setRowsPerPage(value);
      setPage(0);
      onRowsPerPageChange && onRowsPerPageChange(value);
    };

    return (
      <TablePagination
        rowsPerPageOptions={RowsPerPageOptions}
        component="div"
        count={totalDocs}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    );
  };

const RowsPerPageOptions: number[] = [DefaultRowsPerPage, 25, 100];
