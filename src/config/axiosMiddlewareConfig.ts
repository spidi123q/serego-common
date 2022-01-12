import { createAction } from "redux-actions";
import HttpStatus from "http-status-codes";
import { getAuth } from "firebase/auth";
import { AxiosError } from "axios";
import { AppInfoActions } from "../state/appInfo/AppInfoAction";
import { logout } from "../helpers/auth";

interface AxiosMiddleWareConfigParams {
  getState: any;
  dispatch: any;
  getSourceAction: any;
}

export const axiosMiddlewareConfig = {
  successSuffix: "OnSuccess",
  errorSuffix: "OnFail",
  interceptors: {
    request: [
      {
        success: async function (
          params: AxiosMiddleWareConfigParams,
          req: any
        ) {
          const token = await getAuth().currentUser?.getIdToken();
          req.headers.Authorization = `Bearer ${token}`;
          params.dispatch(AppInfoActions.InApiProgress());
          return req;
        },
        error: function (
          params: AxiosMiddleWareConfigParams,
          error: AxiosError
        ) {
          console.error("TCL: error", error);
          return error;
        },
      },
    ],
    response: [
      {
        success: function (params: AxiosMiddleWareConfigParams, res: any) {
          console.log("TCL: res", res); //contains information about request object
          params.dispatch(AppInfoActions.OnApiSuccess());
          return Promise.resolve(res.data);
        },
        error: async function (
          params: AxiosMiddleWareConfigParams,
          error: AxiosError
        ) {
          const message: string =
            error.response?.data?.message ?? error.message;
          await params.dispatch(AppInfoActions.OnApiFail(message));
          if (
            error.response &&
            error.response.status === HttpStatus.UNAUTHORIZED
          ) {
            await logout(params.dispatch);
          }
          return Promise.reject(null);
        },
      },
    ],
  },
};
