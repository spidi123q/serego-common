import { IRequest } from "../../helpers/axios";
import { RequestTypes } from "../../models/enum";
import { IClearanceEdit } from "../../models/Clearance";

export function UpdateClearance(
  id: number,
  truckBookingEdit: IClearanceEdit
): IRequest {
  return {
    url: `/api/v1/Clearance/${id}`,
    method: RequestTypes.Put,
    data: truckBookingEdit,
  };
}
