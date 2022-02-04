import { MassUnit, MeasurementUnit, TruckType } from "./enum";
import { IGeoJSON } from "./GeoJSON";
import { ISchemaModel } from "./SchemaModel";

export interface ITruckBooking extends ISchemaModel {
  pickupAddress: string;
  pickupLocation: IGeoJSON;
  destinationAddress: string;
  destinationLocation: IGeoJSON;
  truckType: TruckType;
}

export interface ITruckBookingEdit extends Partial<ITruckBooking> {}

export interface ITruckBookingQuery extends Partial<ITruckBooking> {
  page: number;
}
