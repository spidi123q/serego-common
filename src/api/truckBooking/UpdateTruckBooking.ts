import { IRequest } from "../../helpers/axios";
import { RequestTypes } from "../../models/enum";
import { ITruckBookingEdit } from "../../models/TruckBooking";

export function UpdateTruckBooking(
  id: number,
  truckBookingEdit: ITruckBookingEdit
): IRequest {
  return {
    url: `/api/v1/TruckBooking/${id}`,
    method: RequestTypes.Put,
    data: truckBookingEdit,
  };
}
