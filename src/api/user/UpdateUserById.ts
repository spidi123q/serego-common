import { IUserEdit, IRequest } from "../..";
import { RequestTypes } from "../../models/enum";

export const UpdateUserById = (id: string, userEdit: IUserEdit): IRequest => {
  return {
    url: `/api/v1/User/${id}`,
    method: RequestTypes.Put,
    data: userEdit,
  };
};
