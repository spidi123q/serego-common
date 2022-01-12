import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { AppInfoActionTypes } from "../state/appInfo/AppInfoAction";

export interface IRequest extends AxiosRequestConfig {
  actionType?: string;
}
export interface IResolvedResponse<T> {
  payload: T;
}
export type IResponse<T> = Promise<IResolvedResponse<T>>;
export const IResponse = Promise;

export const createAxiosClient = (endpoint: string) =>
  axios.create({
    //all axios can be used, shown in axios documentation
    baseURL: endpoint,
    responseType: "json",
  });

export const AxiosApi = (request: IRequest) => ({
  type: request.actionType ?? AppInfoActionTypes.DefaultApiCall,
  payload: { request: request },
});
