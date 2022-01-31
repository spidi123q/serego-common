import { ICreatedBy, IUpdatedBy, MassUnit } from "..";
import { ITimeStamps } from "./TimeStamps";

export interface IVehicle extends ITimeStamps, ICreatedBy, IUpdatedBy {
  _id: string;
  registrationNumber: string;
  model: string;
  capacity: number;
  capacityUnit: MassUnit;
  make: number;
  imageIds: string[];
}

export interface IVehicleEdit extends Partial<IVehicle> {}

export interface IVehicleQuery extends Partial<IVehicle> {
  page: number;
}
