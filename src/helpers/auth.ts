import { includes } from "lodash";
import { UserPermissions } from "../models/enum";
import {
  getAuth,
  signInAnonymously as signInAnonymouslyFirebase,
  User,
} from "firebase/auth";
import { AxiosApi, IRequest } from "./axios";

export const signInAnonymously = async () => {
  try {
    return await signInAnonymouslyFirebase(getAuth());
  } catch (error) {
    console.error("TCL: signInAnonymously -> error", error);
  }
};

export const onAuthStateChanged = async (): Promise<User> => {
  return new Promise((resolve: any, reject: any) => {
    getAuth().onAuthStateChanged(async (user) => {
      console.log("TCL: onAuthStateChanged -> user");
      const authUser = user ?? (await signInAnonymously())?.user;
      //setAccessToken(authUser);
      authUser ? resolve(authUser) : reject();
    });
  });
};

export const logout = async (
  dispatch: any,
  getUser: (stateUpdate?: boolean) => IRequest
) => {
  await getAuth().signOut();
  await onAuthStateChanged();
  const request = getUser(true);
  await dispatch(AxiosApi(request));
};

/**
 *
 * @param permissions List of current user permissions
 * @param permission Required permission
 */
export const isAuthorized = (
  permissions: UserPermissions[],
  permission?: UserPermissions
): boolean => {
  if (!permission) {
    return true;
  }
  return includes(permissions, permission);
};
