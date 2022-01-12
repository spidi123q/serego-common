import { useDispatch } from "react-redux";
import { IPaginateResult } from "..";
import DeleteNotifications from "../api/notification/DeleteNotifications";
import GetNotifications from "../api/notification/GetNotifications";
import PatchNotificationsAsSeen from "../api/notification/PatchNotificationsAsSeen";
import { AxiosApi, IResponse } from "../helpers/axios";
import INotification, { INotificationQuery } from "../models/Notification";

export default function useNotificationAPI() {
  const dispatch: any = useDispatch();

  const getNotifications = async (
    params?: INotificationQuery,
    stateUpdate?: boolean | undefined
  ): IResponse<IPaginateResult<INotification>> => {
    const request = GetNotifications(params, stateUpdate);
    return dispatch(AxiosApi(request));
  };

  const seenNotifications = async () => {
    const request = PatchNotificationsAsSeen();
    return dispatch(AxiosApi(request));
  };

  const deleteNotifications = async () => {
    const request = DeleteNotifications();
    return dispatch(AxiosApi(request));
  };

  const seenAndUpdateNotificationAlert = async () => {
    await seenNotifications();
    await getNotifications({ seen: false }, true);
  };

  return {
    getNotifications,
    seenNotifications,
    seenAndUpdateNotificationAlert,
    deleteNotifications,
  };
}
