import { IRequest } from "../../helpers/axios";
import { IClearanceQuery } from "../../models/Clearance";

export function GetClearanceSummaryCount(query?: IClearanceQuery): IRequest {
  const url = "/api/v1/Clearance/Summary/Count";
  return {
    url,
    params: query,
  };
}
