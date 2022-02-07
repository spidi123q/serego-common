import { IRequest } from "../../helpers/axios";
import { RequestTypes } from "../../models/enum";
import { IClearanceEdit } from "../../models/Clearance";

export function CreateClearance(truckBookingEdit: IClearanceEdit): IRequest {
  return {
    url: `/api/v1/Clearance`,
    method: RequestTypes.Post,
    data: truckBookingEdit,
  };
}
