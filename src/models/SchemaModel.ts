import { ICreatedBy } from "./CreatedBy";
import { ITimeStamps } from "./TimeStamps";
import { IUpdatedBy } from "./UpdatedBy";

export interface ISchemaModel extends ITimeStamps, ICreatedBy, IUpdatedBy {
  _id: string;
}
