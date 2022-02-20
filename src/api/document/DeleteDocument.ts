import { IRequest } from "../../helpers/axios";
import { RequestTypes } from "../../models/enum";

export function DeleteDocument(fileName: string): IRequest {
  return {
    url: "/api/v1/Document",
    method: RequestTypes.Delete,
    params: { fileName },
  };
}
