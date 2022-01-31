import { ICreatedBy } from "./CreatedBy";
import { MassUnit, MeasurementUnit, TruckType } from "./enum";
import { IGeoJSON } from "./GeoJSON";
import { ITimeStamps } from "./TimeStamps";
import { IUpdatedBy } from "./UpdatedBy";

export interface ITruckBooking extends ITimeStamps, ICreatedBy, IUpdatedBy {
  _id: string;
  pickupAddress: string;
  pickupLocation: IGeoJSON;
  destinationAddress: string;
  destinationLocation: IGeoJSON;
  truckType: TruckType;
  weight: number;
  weightUnit: MassUnit;
  length: number;
  width: number;
  height: number;
  measurementUnit: MeasurementUnit;
  goodsType: string;
}

export interface ITruckBookingEdit extends Partial<ITruckBooking> {}

export interface ITruckBookingQuery extends Partial<ITruckBooking> {
  page: number;
}
