import { IUser } from "./User";

export interface IUpdatedBy {
  updatedBy: number;
  updatedByUser?: IUser;
}
