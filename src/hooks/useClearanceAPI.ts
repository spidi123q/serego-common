import { useDispatch } from "react-redux";
import { CreateClearance } from "../api/clearance/CreateClearance";
import { GetClearanceById } from "../api/clearance/GetClearanceById";
import { GetClearances } from "../api/clearance/GetClearances";
import { UpdateClearance } from "../api/clearance/UpdateClearance";
import { AxiosApi, IResponse } from "../helpers/axios";
import { IApiUpdateResponse } from "../models/ApiUpdateResponse";
import { IPaginateResponse } from "../models/PaginateResult";
import {
  IClearance,
  IClearanceDTO,
  IClearanceEdit,
  IClearanceQuery,
} from "../models/Clearance";
import useLoading from "./useLoading";
import { GetClearanceSummaryCount } from "../api/clearance/GetClearanceSummaryCount";
import { IApiDataResponse } from "../models/ApiDataResponse";
import { CreateClearanceStripePaymentIntent } from "../api/clearance/CreateClearanceStripePaymentIntent";

export default function useClearanceAPI() {
  const dispatch: any = useDispatch();
  const loading = useLoading();

  const createElseUpdate = async (
    organizationEdit: IClearanceEdit
  ): IResponse<IApiUpdateResponse> => {
    const request = organizationEdit._id
      ? UpdateClearance(organizationEdit._id, organizationEdit)
      : CreateClearance(organizationEdit);
    loading.start();
    const result = await dispatch(AxiosApi(request));
    loading.stop();
    return result;
  };

  const getClearances = async (
    query: IClearanceQuery
  ): IPaginateResponse<IClearanceDTO> => {
    const request = GetClearances(query);
    return dispatch(AxiosApi(request));
  };

  const getClearanceById = async (id: number): IResponse<IClearanceDTO> => {
    const request = GetClearanceById(id);
    loading.start();
    const result = await dispatch(AxiosApi(request));
    loading.stop();
    return result;
  };

  const getClearanceSummaryCount = async (
    query: IClearanceQuery
  ): IResponse<IApiDataResponse<number>> => {
    const request = GetClearanceSummaryCount(query);
    return dispatch(AxiosApi(request));
  };

  const createClearanceStripePaymentIntent = async (
    id: number
  ): IResponse<IApiDataResponse<string>> => {
    const request = CreateClearanceStripePaymentIntent(id);
    loading.start();
    const result = await dispatch(AxiosApi(request));
    loading.stop();
    return result;
  };

  return {
    createElseUpdate,
    getClearances,
    getClearanceById,
    isLoading: loading.isLoading,
    getClearanceSummaryCount,
    createClearanceStripePaymentIntent,
  };
}
