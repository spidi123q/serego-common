import { IRequest } from "../../helpers/axios";
import { RequestTypes } from "../../models/enum";
import { ITruckBookingEdit } from "../../models/TruckBooking";

export function CreateTruckBooking(
  truckBookingEdit: ITruckBookingEdit
): IRequest {
  return {
    url: `/api/v1/TruckBooking`,
    method: RequestTypes.Post,
    data: truckBookingEdit,
  };
}
