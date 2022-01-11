import { getMessaging, getToken } from "firebase/messaging";
import { firebaseVapidKey } from "../config/firebase";
import { AxiosApi, IRequest } from "./axios";

export const initFCM = async (): Promise<string> => {
  const messaging = getMessaging();
  const token = await getToken(messaging, { vapidKey: firebaseVapidKey });
  console.log("token: ", token);
  return token;
};

/**
 * Update fcm token to server
 * @param dispatch Redux disptach object
 */
export const createPushToken = async (
  dispatch: any,
  createPushToken: (token: string) => IRequest
) => {
  try {
    const token = await initFCM();
    const request = createPushToken(token);
    return dispatch(AxiosApi(request));
  } catch (err) {
    console.error(err);
  }
};
