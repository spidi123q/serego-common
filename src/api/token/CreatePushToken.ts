import { IRequest, IPushTokenEdit } from "../..";
import { RequestTypes } from "../../models/enum";

export default function CreatePushToken(token: string): IRequest {
  const data: IPushTokenEdit = {
    deviceName: navigator.userAgent,
    platform: navigator.platform,
    token,
  };
  return {
    url: "/api/v1/PushToken",
    method: RequestTypes.Post,
    data,
  };
}
