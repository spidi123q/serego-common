import { UserPermissions, UserRoles } from "./enum";
import { ITimeStamps } from "./TimeStamps";

export interface IUser extends Partial<ITimeStamps> {
  _id: string;
  role: UserRoles;
  dob?: Date;
  name?: string;
  address?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  organizationId?: string;
  firebaseId: string;
  active: boolean;
  permissions: UserPermissions[];
}

export interface IUserEdit extends Partial<IUser> {
  password?: string;
}

export interface IUserQuery extends Partial<IUser> {
  page?: number;
}

export const InitialUser: IUser = {
  _id: "",
  role: UserRoles.Guest,
  firebaseId: "",
  permissions: [],
  active: true,
};

export const InitialUserEdit: IUserEdit = {
  email: "",
  password: "",
  name: "",
  phone: "",
  organizationId: "",
  role: UserRoles.User,
  active: true,
};
