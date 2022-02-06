import { TruckBookingStatus, TruckType } from "./enum";
import { IGeoJSON } from "./GeoJSON";
import { IPageQuery } from "./PageQuery";
import { ISchemaModel } from "./SchemaModel";

export interface ITruckBooking extends ISchemaModel {
  pickupAddress: string;
  pickupLocation: IGeoJSON;
  destinationAddress: string;
  destinationLocation: IGeoJSON;
  truckType: TruckType;
  status: TruckBookingStatus;
}

export interface ITruckBookingEdit extends Partial<ITruckBooking> {}

export interface ITruckBookingQuery
  extends Partial<ITruckBooking>,
    IPageQuery {}
