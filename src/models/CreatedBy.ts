import { IUser } from "./User";

export interface ICreatedBy {
  createdBy: string;
  createdByUser?: IUser;
}
