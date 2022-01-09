import { includes } from "lodash";
import { UserPermissions } from "../models/enum";

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
