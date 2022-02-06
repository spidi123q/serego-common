import { IToastMessage } from "../../models/ToastMessage";

export interface IAppInfoReducerState {
  appReady: boolean;
  isLoading: boolean;
  lastApiError?: IToastMessage;
  showPlaceholder: boolean;
}

export const InitialAppInfoReducerState: IAppInfoReducerState = {
  appReady: false,
  isLoading: false,
  showPlaceholder: false,
};
