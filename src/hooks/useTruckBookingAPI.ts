import { useDispatch } from "react-redux";
import { CreateTruckBooking } from "../api/truckBooking/CreateTruckBooking";
import { GetTruckBookingById } from "../api/truckBooking/GetTruckBookingById";
import { GetTruckBookings } from "../api/truckBooking/GetTruckBookings";
import { UpdateTruckBooking } from "../api/truckBooking/UpdateTruckBooking";
import { AxiosApi, IResponse } from "../helpers/axios";
import { IApiUpdateResponse } from "../models/ApiUpdateResponse";
import { IPaginateResponse } from "../models/PaginateResult";
import {
  ITruckBooking,
  ITruckBookingEdit,
  ITruckBookingQuery,
} from "../models/TruckBooking";
import useLoading from "./useLoading";

export default function useTruckBookingAPI() {
  const dispatch: any = useDispatch();
  const loading = useLoading();

  const createElseUpdate = async (
    organizationEdit: ITruckBookingEdit
  ): IResponse<IApiUpdateResponse> => {
    const request = organizationEdit._id
      ? UpdateTruckBooking(organizationEdit._id, organizationEdit)
      : CreateTruckBooking(organizationEdit);
    loading.start();
    const result = await dispatch(AxiosApi(request));
    loading.stop();
    return result;
  };

  const getTruckBookings = async (
    query: ITruckBookingQuery
  ): IPaginateResponse<ITruckBooking> => {
    const request = GetTruckBookings(query);
    return dispatch(AxiosApi(request));
  };

  const getTruckBookingById = async (id: number): IResponse<ITruckBooking> => {
    const request = GetTruckBookingById(id);
    const result = await dispatch(AxiosApi(request));
    return result;
  };

  return {
    createElseUpdate,
    getTruckBookings,
    getTruckBookingById,
    isLoading: loading.isLoading,
  };
}
