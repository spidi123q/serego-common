import { IUserQuery, IRequest, removeWhiteSpace } from "../..";

const GetUsers = (query?: IUserQuery): IRequest => {
  if (query?.phone) {
    query.phone = removeWhiteSpace(query.phone);
  }

  const url = "/api/v1/User/List/Search";
  return {
    url,
    params: query,
  };
};

export default GetUsers;
