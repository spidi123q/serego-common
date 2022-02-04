import { IUser } from "./User";

export interface ICreatedBy {
  createdBy: number;
  createdByUser?: IUser;
}
