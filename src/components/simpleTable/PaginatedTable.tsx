import React, { useEffect, useState } from "react";
import { StartPage } from "../../config/constants";
import { IResponse } from "../../helpers/axios";
import { IPageQuery } from "../../models/PageQuery";
import {
  InitialPaginateResult,
  IPaginateResult,
} from "../../models/PaginateResult";
import { ISimpleTableProps, SimpleTable } from "./SimpleTable";

export interface IPaginatedTableProps<T>
  extends Omit<ISimpleTableProps, "rows" | "paginateResult"> {
  fetchCollections(params: IPageQuery): IResponse<IPaginateResult<T>>;
}

export function PaginatedTable<T>(props: IPaginatedTableProps<T>) {
  const { fetchCollections, columns, ...rest } = props;
  const [paginateResult, setPaginateResult] = useState<IPaginateResult<T>>(
    InitialPaginateResult
  );

  const onPageChange = (page: number) => {
    getCollection(page);
  };
  const onRowsPerPageChange = (count: number) => {
    // setRowsPerPage(count);
  };

  const getCollection = async (page: number) => {
    const result = await fetchCollections({ page, pagination: true });
    setPaginateResult(result.payload);
  };

  useEffect(() => {
    getCollection(StartPage);
  }, []);

  return (
    <SimpleTable
      columns={columns}
      rows={paginateResult.docs}
      paginateResult={paginateResult}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      {...rest}
    />
  );
}
