import { createAction } from "redux-actions";

export enum AppInfoActionTypes {
  AppReady = "@@UI/AppReady",
  InApiProgress = "@@UI/api/InProgress",
  OnApiSuccess = "@@UI/api/OnSuccess",
  OnApiFail = "@@UI/api/OnFail",
  DefaultApiCall = "@@UI/api/DefaultApiCall",
  SetRecentSearch = "@@UI/SetRecentSearch",
  GetNotificationOnSuccess = "@@UI/GetNotificationOnSuccess",
  GetNotification = "@@UI/GetNotification",
  SetPageFilterValues = "@@UI/SetPageFilterValues",
}

export const AppInfoActions = {
  InApiProgress: createAction(AppInfoActionTypes.InApiProgress),
  OnApiSuccess: createAction(AppInfoActionTypes.OnApiSuccess),
  OnApiFail: createAction(
    AppInfoActionTypes.OnApiFail,
    (error: string) => error
  ),
  AppReady: createAction(AppInfoActionTypes.AppReady),
  SetPageFilterValues: createAction(
    AppInfoActionTypes.SetPageFilterValues,
    (values: any) => values
  ),
};
