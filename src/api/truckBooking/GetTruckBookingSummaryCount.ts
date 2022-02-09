import { IRequest } from "../../helpers/axios";
import { ITruckBookingQuery } from "../../models/TruckBooking";

export function GetTruckBookingSummaryCount(
  query?: ITruckBookingQuery
): IRequest {
  const url = "/api/v1/TruckBooking/Summary/Count";
  return {
    url,
    params: query,
  };
}
