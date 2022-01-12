import { IRequest } from "../../helpers/axios";
import { RequestTypes } from "../../models/enum";

const PatchNotificationsAsSeen = (): IRequest => {
  return {
    url: "/api/v1/Notification/Seen",
    method: RequestTypes.Patch,
  };
};
export default PatchNotificationsAsSeen;
