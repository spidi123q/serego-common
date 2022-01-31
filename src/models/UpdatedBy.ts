import { IUser } from "./User";

export interface IUpdatedBy {
  updatedBy: string;
  updatedByUser?: IUser;
}
