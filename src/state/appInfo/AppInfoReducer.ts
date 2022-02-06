import { AnyAction, Reducer } from "redux";
import {
  IAppInfoReducerState,
  InitialAppInfoReducerState,
} from "./AppInfoReducerState";
import { v4 as uuidv4 } from "uuid";
import { AppInfoActionTypes } from "./AppInfoAction";

export const AppInfoReducer: Reducer<IAppInfoReducerState> = (
  state: IAppInfoReducerState = InitialAppInfoReducerState,
  action: AnyAction
) => {
  switch (action.type) {
    case AppInfoActionTypes.InApiProgress:
      return { ...state, isLoading: true };

    case AppInfoActionTypes.OnApiFail:
      return {
        ...state,
        isLoading: false,
        lastApiError: { message: action.payload, id: uuidv4() },
      };
    case AppInfoActionTypes.OnApiSuccess:
      return { ...state, isLoading: false };

    case AppInfoActionTypes.AppReady:
      return { ...state, appReady: true };

    case AppInfoActionTypes.SetPlaceholder:
      return { ...state, showPlaceholder: action.payload };

    default:
      return state;
  }
};
