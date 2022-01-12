import { IRequest } from "../../helpers/axios";
import { LoginActionTypes } from "../../state/login/LoginAction";

const GetUser = (stateUpdate: boolean = true): IRequest => {
  return {
    url: "/api/v1/User",
    actionType: stateUpdate ? LoginActionTypes.GetUser : undefined,
  };
};
export default GetUser;
