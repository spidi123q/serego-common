import { createAction } from "redux-actions";
import { IUser } from "../../models/User";

export enum LoginActionTypes {
  GetUser = "@@UI/login/GetUser",
  GetUserOnSuccess = "@@UI/login/GetUserOnSuccess",
  GetUserOnFail = "@@UI/login/GetUserOnFail",
}

export const LoginActions = {
  GetUser: createAction(LoginActionTypes.GetUser),
  GetUserOnSuccess: createAction(
    LoginActionTypes.GetUserOnSuccess,
    (user: IUser) => user
  ),
  GetUserOnFail: createAction(LoginActionTypes.GetUserOnFail),
};
