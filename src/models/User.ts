import { UserPermissions, UserRoles } from "./enum";
import { ISchemaModel } from "./SchemaModel";

export interface IUser extends ISchemaModel {
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
  _id: 0,
  role: UserRoles.Guest,
  firebaseId: "",
  permissions: [],
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  createdBy: 0,
  updatedBy: 0,
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
