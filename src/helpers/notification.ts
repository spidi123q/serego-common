import { getMessaging, getToken } from "firebase/messaging";
import CreatePushToken from "../api/token/CreatePushToken";
import { firebaseVapidKey } from "../config/firebase";
import { AxiosApi } from "./axios";

export const initFCM = async (firebaseVapidKey: string): Promise<string> => {
  const messaging = getMessaging();
  const token = await getToken(messaging, { vapidKey: firebaseVapidKey });
  console.log("FCM token: ", token);
  return token;
};

/**
 * Update fcm token to server
 * @param dispatch Redux disptach object
 */
export const createPushToken = async (
  dispatch: any,
  firebaseVapidKey: string
) => {
  try {
    const token = await initFCM(firebaseVapidKey);
    const request = CreatePushToken(token);
    return dispatch(AxiosApi(request));
  } catch (err) {
    console.error(err);
  }
};
