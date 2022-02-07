import { IRequest } from "../../helpers/axios";
import { IClearanceQuery } from "../../models/Clearance";

export function GetClearances(query?: IClearanceQuery): IRequest {
  const url = "/api/v1/Clearance";
  return {
    url,
    params: query,
  };
}
