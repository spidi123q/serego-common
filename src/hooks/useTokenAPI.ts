import { useDispatch } from "react-redux";
import { createPushToken } from "../helpers/notification";

export function useTokenAPI() {
  const dispatch: any = useDispatch();

  const updateFCMToken = (firebaseVapidKey: string) =>
    createPushToken(dispatch, firebaseVapidKey);

  return { updateFCMToken };
}
