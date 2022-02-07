import { IRequest } from "../../helpers/axios";
import { RequestTypes } from "../../models/enum";
import { IClearanceEdit } from "../../models/Clearance";

export function GetClearanceById(id: number): IRequest {
  return {
    url: `/api/v1/Clearance/${id}`,
    method: RequestTypes.Get,
  };
}
