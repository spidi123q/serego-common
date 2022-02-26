import { IDocumetResponse } from "./DocumetResponse";
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
  stripeCustomerId: string;
  tradeLicenses?: IDocumetResponse[];
  vatNumber?: string;
  importerCode?: string;
  tradeLicensesExpiryDate?: Date;
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
  stripeCustomerId: "",
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
  role: UserRoles.User,
  active: true,
};
