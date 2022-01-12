import { IUserEdit, IRequest } from "../..";
import { RequestTypes } from "../../models/enum";

const UpdateUser = (userEdit: IUserEdit): IRequest => {
  return {
    url: "/api/v1/User",
    method: RequestTypes.Put,
    data: userEdit,
  };
};
export default UpdateUser;
