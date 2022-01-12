import { INotificationQuery, IRequest } from "../..";
import { AppInfoActionTypes } from "../../state/appInfo/AppInfoAction";

const GetNotifications = (
  params?: INotificationQuery,
  stateUpdate?: boolean
): IRequest => {
  return {
    url: "/api/v1/Notification",
    actionType: stateUpdate ? AppInfoActionTypes.GetNotification : undefined,
    params,
  };
};
export default GetNotifications;
