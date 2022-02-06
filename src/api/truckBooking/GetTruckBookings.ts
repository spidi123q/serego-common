import { IRequest } from "../../helpers/axios";
import { ITruckBookingQuery } from "../../models/TruckBooking";

export function GetTruckBookings(query?: ITruckBookingQuery): IRequest {
  const url = "/api/v1/TruckBooking";
  return {
    url,
    params: query,
  };
}
