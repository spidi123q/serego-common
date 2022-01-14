import { useDispatch } from "react-redux";
import { createPushToken } from "../helpers/notification";

export function useTokenAPI() {
  const dispatch: any = useDispatch();

  const updateFCMToken = () => createPushToken(dispatch);

  return { updateFCMToken };
}
