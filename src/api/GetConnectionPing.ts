import { IRequest } from "../helpers/axios";

export const GetConnectionPing = (): IRequest => {
  return {
    url: "/api/v1/Connection/Ping",
  };
};
