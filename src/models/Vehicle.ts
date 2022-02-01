import { MassUnit } from "./enum";
import { ISchemaModel } from "./SchemaModel";

export interface IVehicle extends ISchemaModel {
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
