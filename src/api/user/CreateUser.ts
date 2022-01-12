import { IUserEdit, IRequest } from "../..";
import { RequestTypes } from "../../models/enum";

const CreateUser = (userEdit: IUserEdit): IRequest => {
  return {
    url: `/api/v1/User`,
    method: RequestTypes.Post,
    data: userEdit,
  };
};

export default CreateUser;
