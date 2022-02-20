import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateUser from "../api/user/CreateUser";
import GetUser from "../api/user/GetUser";
import GetUsers from "../api/user/GetUsers";
import { IUserSignIn, IUserToken, SignInUser } from "../api/user/SignInUser";
import UpdateUser from "../api/user/UpdateUser";
import { UpdateUserById } from "../api/user/UpdateUserById";
import { AxiosApi, IResolvedResponse, IResponse } from "../helpers/axios";
import { IApiUpdateResponse } from "../models/ApiUpdateResponse";
import { IPaginateResponse } from "../models/PaginateResult";
import { IUser, IUserEdit, IUserQuery } from "../models/User";

export default function useUserAPI() {
  const dispatch: any = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateUser = async (userEdit: IUserEdit) => {
    const request = UpdateUser(userEdit);
    setIsLoading(true);
    const response = await dispatch(AxiosApi(request));
    setIsLoading(false);
    return response;
  };

  const getUser = async (isStateUpdate: boolean = true): IResponse<IUser> => {
    const request = GetUser(isStateUpdate);
    setIsLoading(true);
    const response = await dispatch(AxiosApi(request));
    setIsLoading(false);
    return response;
  };

  const signInUser = async (
    userSignIn: IUserSignIn
  ): Promise<string | undefined> => {
    try {
      const request = SignInUser(userSignIn);
      setIsLoading(true);
      const response: IResolvedResponse<IUserToken> = await dispatch(
        AxiosApi(request)
      );
      setIsLoading(false);
      return response?.payload?.signInToken;
    } catch (err) {
      console.error(err);
    }
  };

  const updateAndGetUser = async (userEdit: IUserEdit) => {
    await updateUser(userEdit);
    await getUser(true);
  };

  const createElseUpdate = async (
    userEdit: IUserEdit
  ): IResponse<IApiUpdateResponse> => {
    const request = userEdit._id
      ? UpdateUserById(userEdit._id, userEdit)
      : CreateUser(userEdit);
    setIsLoading(true);
    const result = await dispatch(AxiosApi(request));
    setIsLoading(false);
    return result;
  };

  const getUsers = async (query: IUserQuery): IPaginateResponse<IUser> => {
    const request = GetUsers(query);
    return dispatch(AxiosApi(request));
  };

  return {
    updateUser,
    getUser,
    getUsers,
    updateAndGetUser,
    signInUser,
    createElseUpdate,
    isLoading,
  };
}
