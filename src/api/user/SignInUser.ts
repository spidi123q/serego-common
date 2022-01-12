import { IRequest, IUserEdit } from "../..";
import { RequestTypes } from "../../models/enum";

export const SignInUser = (userSignIn: IUserSignIn): IRequest => {
  return {
    url: "/api/v1/User/SignIn/ByUsername",
    method: RequestTypes.Post,
    data: userSignIn,
  };
};

export type IUserSignIn = Pick<IUserEdit, "username" | "password" | "email">;
export interface IUserToken {
  signInToken: string;
}
