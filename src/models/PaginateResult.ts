import { IResponse } from "../helpers/axios";

export interface IPaginateResult<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  page?: number;
  totalPages: number;
  nextPage?: number | null;
  prevPage?: number | null;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  meta?: any;
}
export type IPaginateResponse<T> = IResponse<IPaginateResult<T>>;
export const IPaginateResponse = Promise;
