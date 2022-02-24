import { IDocumetResponse } from "./DocumetResponse";
import { ClearanceStatus, PortType, ShipmentStatus } from "./enum";
import { IPageQuery } from "./PageQuery";
import { ISchemaModel } from "./SchemaModel";
import { IStripePaymentDetails } from "./StripePaymentDetails";

export interface IClearance extends ISchemaModel {
  portType: PortType;
  entryPort: string;
  deliveryAddress: string;
  status: ClearanceStatus;
  shipmentStatus: ShipmentStatus;
  stripePaymentDetails: IStripePaymentDetails;
  invoices?: IDocumetResponse[];
  documents?: IDocumetResponse[];
}

export interface IClearanceEdit extends Partial<IClearance> {}

export interface IClearanceQuery extends IClearanceEdit, IPageQuery {
  isOpen?: boolean;
}

export interface IClearanceDTO extends IClearance {
  isCompleted: boolean;
}
