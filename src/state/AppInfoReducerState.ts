import ToastMessage from "../models/ToastMessage";

export interface AppInfoReducerState {
  appReady: boolean;
  isLoading: boolean;
  lastApiError?: ToastMessage;
}

export const InitialAppInfoReducerState: AppInfoReducerState = {
  appReady: false,
  isLoading: false,
};
