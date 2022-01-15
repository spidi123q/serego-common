import { includes } from "lodash";
import { UserPermissions } from "../models/enum";
import {
  getAuth,
  signInAnonymously as signInAnonymouslyFirebase,
  User,
} from "firebase/auth";
import { AxiosApi, IRequest } from "./axios";
import GetUser from "../api/user/GetUser";

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

export const logout = async (dispatch: any) => {
  await getAuth().signOut();
  await onAuthStateChanged();
  const request = GetUser(true);
  await dispatch(AxiosApi(request));
};

export const getIdToken = async () => {
  return await getAuth().currentUser?.getIdToken();
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
